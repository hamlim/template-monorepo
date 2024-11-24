# Template Monorepo

This is a template repo in GitHub for creating a fresh monorepo for managing code and documentation.

For more details on this setup, refer to this blog post here: https://matthamlin.me/2024/february/library-docs-monorepo-template

## Getting Started:

## Tasks:

Since this is a `turborepo` monorepo, you can run some tasks across the repo with ease by using the configured "tasks" from the root `package.json` and `turbo.json` files. Currently the below tasks are supported:

- `build`
- `type-check`
- `lint`
- `test`

### Root only tasks:

- `one-version:check`
  - Check if all dependencies are using the same version
- `knip`
  - Run [Knip](https://knip.dev/) across the repo
- `format`
  - Run `Biome` formatter across the codebase
- `format:check`
  - Check formatting across the codebase

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
- [hohoro](https://hohoro.vercel.app/)
- [BiomeJS](https://biomejs.dev/)
- [one-version](https://one-version.vercel.app/)

## Workflows:

This template uses GitHub Actions:

- [`.github/workflows/format-lint-check.yml`](./.github/workflows/format-lint-check.yml)
  - For running `biome ci .` across the repo on pull requests
- [`.github/workflows/knip-check.yml`](./.github/workflows/knip-check.yml)
  - For running `knip` across the repo on pull requests
- [`.github/workflows/one-version-check.yml`](./.github/workflows/one-version-check.yml)
  - For running `one-version --check` across the repo on pull requests
- [`.github/workflows/publish-experimental-releases.yml`](./.github/workflows/publish-experimental-releases.yml)
  - For publishing experimental releases of all packages on pull requests + commits using https://pkg.pr.new
- [`.github/workflows/tests.yml`](./.github/workflows/tests.yml)
  - For running `bun run test` across the repo on pull requests
- [`.github/workflows/type-check.yml`](./.github/workflows/type-check.yml)
  - For running `tsc` across the repo on pull requests