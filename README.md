# Template Monorepo

This is a template repo in GitHub for creating a fresh monorepo for managing code and documentation.

For more details on this setup, refer to my blog post here: https://matthamlin.me/2024/february/library-docs-monorepo-template

## Getting Started:

- Use this template (see `Use this Template` button near the top right corner of the page)
- Clone the newly created repo
- Run `bun install` (if you don't have bun installed locally, refer to their [docs](https://bun.sh))
- Start writing some code!

## Tasks:

Since this is a `turborepo` monorepo, you can run some tasks across the repo with ease by using the configured "tasks" from the root `package.json` and `turbo.json` files. Currently the below tasks are supported:

- `build`
- `type-check`
- `lint`
- `format`
- `test`

## Creating new workspaces:

This template has a minimal generator for creating new libraries and applications, both of which are defined by the `template-library` and `template-app` workspaces respectively. To create a new workspace, run the following command:

```sh
bun run generate --name <name> --type <package|app>
```

This will create either:

- A new library within `packages/<name>` based on `packages/template-library`
- A new application within `apps/<name>` based on `apps/template-app`

## Tools:

- [Bun](https://bun.sh)
- [Turborepo](https://turbo.dev/repo/docs)
- [Next.js](https://nextjs.org)
- [SWC](https://swc.rs/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [dprint](https://www.typescriptlang.org/docs/)
- [BiomeJS](https://biomejs.dev/)

## Future Enhancements:

- Add an E2E example setup
- Add publish config to a package
