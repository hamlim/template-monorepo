# `template-library`

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run ./src/index.ts
```

## Building:

This library uses [`swc`](https://swc.rs/) and [`TypeScript`](https://www.typescriptlang.org/docs/) to build the source code and generate types.

To build the library, run `bun run build` from the root, or from this workspace!

## Code Quality:

### Type Checking:

This library uses TypeScript to perform type checks, run `bun run type-check` from the root or from this workspace!

### Linting

This library uses [BiomeJS](https://biomejs.dev/) for linting, run `bun run lint` from the root or from this workspace!

### Tests

This library uses Bun for running unit tests, run `bun run test` from the root or from this workspace!
