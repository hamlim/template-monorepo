import { execSync } from "node:child_process";
import { $ } from "bun";

// Example CLI args:
// --name foo-bar --copy template-library --type package

// parse CLI args as a Record<string, string | boolean> (default to true if no value is provided)
// the format of the args are either `--key=value` or `--key` or `--key value` or `--key`
let args = {} as Record<string, string | boolean>;

for (let i = 2; i < process.argv.length; i++) {
  let arg = process.argv[i];
  if (arg.startsWith("--")) {
    arg = arg.replace(/^--/, "");
    if (arg.includes("=")) {
      let [key, value] = arg.split("=");
      args[key] = value;
    } else {
      if (process.argv[i + 1] && !process.argv[i + 1].startsWith("--")) {
        args[arg] = process.argv[i + 1];
        i++;
      } else {
        args[arg] = true;
      }
    }
  } else {
    throw new Error(`Invalid argument: ${arg}`);
  }
}

let { name, type } = args;

if (!name && !type) {
  throw new Error("Missing required arguments: --name and --type");
}

if (!name) {
  throw new Error("Missing required argument: --name");
}
if (!type) {
  throw new Error("Missing required argument: --type");
}

if (type !== "package" && type !== "app") {
  throw new Error(
    `Invalid type: ${type}, only "package" and "app" are allowed`,
  );
}

if (type === "package") {
  console.log(`Generating a new package: ${name}`);
  await $`bun turbo gen workspace --name ${name} --copy template-library --type package --destination packages/${name}`;

  console.log(`Replacing template-library with ${name}`);

  // replace `template-library` with the new library name
  let cmd = `find ./packages/${name} -type f -exec sed -i '' 's/template-library/${name}/g' {} +`;
  execSync(cmd, { stdio: "inherit" });

  console.log(`Done!`);
}

if (type === "app") {
  console.log(`Generating a new app: ${name}`);
  await $`bun turbo gen workspace --name ${name} --copy template-app --type app --destination apps/${name}`;

  console.log(`Replacing template-app with ${name}`);

  // replace `template-app` with the new app name
  let cmd = `find ./apps/${name} -type f -exec sed -i '' 's/template-app/${name}/g' {} +`;
  execSync(cmd, { stdio: "inherit" });

  console.log(`Done!`);
}
