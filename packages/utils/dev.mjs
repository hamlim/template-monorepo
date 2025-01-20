import { runBuild } from "hohoro/experimental";

await runBuild({
  rootDirectory: process.cwd(),
  logger: console,
});
