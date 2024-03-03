# `pkg-a`

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
