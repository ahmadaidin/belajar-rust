# Belajar Rust

A learning site for studying Rust, built with [Astro](https://astro.build/) + [Starlight](https://starlight.astro.build/) and styled with the [Catppuccin](https://github.com/catppuccin/starlight) theme.

> 🦀 Roadmap belajar Rust dari nol — dari fondasi bahasa sampai concurrency, async, dan smart pointers.

## Tech Stack

- **Astro 7** — static site generator
- **Starlight** — documentation framework
- **Svelte 5** — interactive components (e.g. `CodeRunner.svelte`)
- **Catppuccin Starlight** — Mocha (dark) / Latte (light) theme
- **IBM Plex Sans & Mono** — typography

## Getting Started

Requires [Bun](https://bun.sh/) (or Node.js with `npm`/`pnpm`).

```bash
bun install
bun run dev
```

The dev server starts at <http://localhost:4321>.

### Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `bun run dev`   | Start dev server         |
| `bun run build` | Build static site        |
| `bun run preview` | Preview production build |

## Project Structure

```
src/
├── content/
│   ├── config.ts            # Starlight content collection config
│   └── docs/                # Markdown/MDX learning material
│       ├── index.md         # Landing page
│       ├── 00-setup.md
│       ├── 01-fondasi/      # Variables, types, control flow, ...
│       ├── 02-struct-enum-trait/
│       ├── 03-ownership/    # Move, borrow, lifetimes
│       ├── 04-collections-iterators/
│       ├── 05-error-handling/
│       ├── 06-generics/     # + advanced types
│       ├── 06-solid/        # Shadowing (placed here in sidebar)
│       ├── 07-modules.md
│       ├── 08-macros.md
│       ├── 09-smart-pointers.md
│       ├── 10-closures.md
│       ├── 11-concurrency.md
│       ├── 12-async.md
│       ├── 13-io.md
│       ├── 14-testing.md
│       ├── 15-cargo.md
│       ├── 16-unsafe.md
│       ├── 17-patterns.md
│       ├── 99-resources.md
│       ├── 99-tips.md
│       └── playground-test.mdx
├── components/
│   └── CodeRunner.svelte    # In-browser Rust code runner
└── styles/
    └── fonts.css
```

The sidebar grouping is configured in `astro.config.mjs`.

## Content Roadmap

Topics currently covered (18 sections, 30+ pages):

1. **Setup & Workflow** — toolchain, `cargo`, IDE
2. **Fondasi** — variables, mutability, types, functions, control flow, pattern matching, `Option`/`Result`, casting, shadowing
3. **Struct, Enum, Trait** — defining and deriving, trait bounds
4. **Ownership & Borrowing** — move/clone/copy, references, slices, lifetimes, interior mutability
5. **Collections & Iterators** — `Vec`, `HashMap`, iterator chains
6. **Error Handling** — `panic!`, `Result`, `?` operator, custom error types
7. **Generics & Advanced Types** — generics, newtype, DSTs
8. **Module System** — packages, crates, `use`
9. **Macros** — declarative & procedural
10. **Smart Pointers** — `Box`, `Rc`, `RefCell`, etc.
11. **Closures** — capture, traits (`Fn`, `FnMut`, `FnOnce`)
12. **Concurrency** — threads, channels, `Send`/`Sync`
13. **Async Rust** — `async`/`await`, executors
14. **I/O & File System** — `std::fs`, reading/writing
15. **Testing** — unit, integration, doctests
16. **Cargo & Tooling** — workspaces, profiles, `clippy`, `rustfmt`
17. **Unsafe Rust** — raw pointers, `unsafe` superpowers
18. **Practical Patterns** — idiomatic Rust patterns

See [`src/content/docs/roadmap.md`](./src/content/docs/roadmap.md) for the source plan.

## Adding Content

1. Add a new `.md` (or `.mdx`) file under `src/content/docs/`.
2. Register it in the `sidebar` array in `astro.config.mjs` so it appears in the navigation.
3. Use `<CodeRunner>` (from `src/components/CodeRunner.svelte`) inside MDX for an interactive code playground.

## License

Personal learning project. Content written in Bahasa Indonesia.
