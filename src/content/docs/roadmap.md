---
title: Rust Learning Roadmap
description: "Checklist progress belajar Rust dari nol sampai advanced"
---

# 🦀 Rust Learning Roadmap

## 0. Setup & Workflow
- ✅ Install `rustup`, stable toolchain, dan `rust-analyzer`
- ✅ Pahami `cargo check`, `cargo test`, `cargo fmt`, `cargo clippy`
- ✅ Biasakan baca error compiler sebelum buka referensi
- ✅ Kerjakan Rustlings untuk latihan kecil yang langsung dikoreksi

## 1. Dasar-Dasar (Fundamentals)
- ⏳ Ownership, Borrowing, dan Lifetime
- ⏳ Stack vs Heap
- ✅ `let`, `let mut`, `const`
- ✅ Tipe data: `i32`, `u32`, `f64`, `bool`, `char`, `&str`, `String`
- ⏳ Pattern matching (`match`, `if let`, `while let`)
- ✅ Control flow (`if`, `loop`, `while`, `for`)
- ✅ Fungsi dan return type
- ⏳ `Option<T>` dan `Result<T, E>`
- ✅ Shadowing
- ⏳ Casting (`as`, `From`, `Into`)

## 2. Struct, Enum, Trait
- ⏳ Struct biasa, tuple struct, unit struct
- ⏳ `impl` block (methods dan associated functions)
- ⏳ `enum` dan variants (termasuk data di dalam variant)
- ⏳ Trait definition dan implementation
- ⏳ Derive macros (`#[derive(Debug, Clone, Copy, PartialEq)]`)
- ⏳ `Display` vs `Debug`
- ⏳ `Default` trait
- ⏳ Trait bounds (`T: Trait`, `where` clause)
- ⏳ Trait objects (`Box<dyn Trait>` / `&dyn Trait`)
- ⏳ Associated types

## 3. Ownership & Borrowing (Deep Dive)
- ⏳ Move semantics
- ⏳ Clone vs Copy
- ⏳ References: `&T` (shared) vs `&mut T` (mutable)
- ⏳ Slices (`&[T]`, `&str`)
- ⏳ Lifetime elision rules
- ⏳ Explicit lifetime annotations (`<'a>`)
- ⏳ `'static` lifetime
- ⏳ Interior mutability (`Cell`, `RefCell`, `Mutex`, `RwLock`)
- ⏳ `Cow<T>` (Clone on Write)

## 4. Collections & Iterators
- ⏳ `Vec<T>`, `VecDeque<T>`
- ⏳ `HashMap<K, V>`, `BTreeMap<K, V>`
- ⏳ `HashSet<T>`, `BTreeSet<T>`
- ⏳ `Iterator` trait (`iter()`, `into_iter()`, `iter_mut()`)
- ⏳ Iterator adaptors: `map`, `filter`, `fold`, `collect`, `enumerate`, `flat_map`, `take`, `skip`
- ⏳ `FromIterator`
- ⏳ `Entry` API untuk HashMap
- ⏳ `slice::windows` dan `slice::chunks`

## 5. Error Handling
- ⏳ `panic!` vs `Result`
- ⏳ `unwrap()`, `expect()`, `?` operator
- ⏳ Custom error types
- ⏳ `Error` trait (`std::error::Error`)
- ⏳ `thiserror` crate (untuk derive Error)
- ⏳ `anyhow` crate (untuk application-level error)
- ⏳ Propagating errors dengan `?`
- ⏳ `map_err`, `or`, `or_else`

## 6. Generics & Advanced Types
- ⏳ Generic struct, enum, function
- ⏳ Monomorphization (apa yang terjadi di compile-time)
- ⏳ Const generics
- ⏳ Newtype pattern
- ⏳ Type aliases (`type Nama = ...`)
- ⏳ Never type (`!`)
- ⏳ Zero-sized types (ZST)
- ⏳ PhantomData
- ⏳ Marker traits (`Send`, `Sync`, `Sized`, `Unpin`)
- ⏳ Dynamic dispatch vs static dispatch

## 7. Module System
- ⏳ `mod`, `use`, `pub`
- ⏳ `crate`, `self`, `super`
- ⏳ File system vs inline modules
- ⏳ `mod.rs` sebagai legacy knowledge; prefer Rust 2018 path convention
- ⏳ Re-exporting (`pub use`)
- ⏳ Visibility: `pub`, `pub(crate)`, `pub(super)`, `pub(in path)`
- ⏳ `extern crate` (jarang dipakai di 2018+)

## 8. Macros
- ⏳ Declarative macros (`macro_rules!`)
- ⏳ Fragment specifiers: `expr`, `ty`, `ident`, `tt`, `path`, `block`, `stmt`
- ⏳ Repetition: `$(...)*`, `$(...),*`, `$(...);*`
- ⏳ Procedural macros (konsep saja)
- ⏳ Attribute-like, derive, function-like proc macros (konsep saja)
- ⏳ Hygiene pada macro

## 9. Smart Pointers
- ⏳ `Box<T>`
- ⏳ `Rc<T>` (reference counting, single threaded)
- ⏳ `Arc<T>` (atomic reference counting, thread-safe)
- ⏳ `Weak<T>` (mencegah reference cycle)
- ⏳ `Deref` dan `DerefMut` trait
- ⏳ `Drop` trait
- ⏳ Reference cycles dan memory leak

## 10. Closures
- ⏳ `|args| body` syntax
- ⏳ `Fn`, `FnMut`, `FnOnce` trait hierarchy
- ⏳ Capturing by reference vs by value
- ⏳ `move` keyword
- ⏳ Returning closures dari fungsi
- ⏳ Closures sebagai argumen generic

## 11. Concurrency & Parallelism
- ⏳ `std::thread`
- ⏳ `JoinHandle`
- ⏳ `Send` dan `Sync` trait
- ⏳ `Mutex<T>` dan `RwLock<T>`
- ⏳ `Arc<Mutex<T>>`
- ⏳ Channels: `mpsc::channel()`, `Sender`, `Receiver`
- ⏳ `crossbeam` crate (konsep)
- ⏳ `parking_lot` crate (konsep)
- ⏳ Data races di Rust — kenapa hampir mustahil

## 12. Async Rust
- ⏳ `async fn` dan `.await`
- ⏳ `Future` trait
- ⏳ `tokio` runtime
- ⏳ `async-std` runtime (alternatif)
- ⏳ `tokio::spawn`
- ⏳ `JoinSet` dan `join!`
- ⏳ `Stream` dan `StreamExt`
- ⏳ `select!` macro
- ⏳ Async channels (`tokio::sync::mpsc`)
- ⏳ `Pin` dan `Unpin` (kenapa diperlukan)
- ⏳ Async traits (dan kenapa susah tanpa `async_trait` crate)
- ⏳ `futures` crate utilities
- ⏳ Lifetime di async code

## 13. I/O & File System
- ⏳ `std::fs` (read, write, metadata, dir traversal)
- ⏳ `std::io::{Read, Write, BufRead}` traits
- ⏳ `BufReader` / `BufWriter`
- ⏳ `std::path::{Path, PathBuf}`
- ⏳ `File::open`, `File::create`
- ⏳ `serde` + `serde_json` (serialization)
- ⏳ `csv`, `toml`, `yaml` crates
- ⏳ Standard streams: `stdin()`, `stdout()`, `stderr()`

## 14. Testing
- ⏳ Unit tests (`#[test]`, `#[cfg(test)]`)
- ⏳ Integration tests (`tests/` folder)
- ⏳ `assert!`, `assert_eq!`, `assert_ne!`
- ⏳ `should_panic`
- ⏳ Test organization
- ⏳ Doc tests (contoh kode di doc comment)
- ⏳ `cargo test` command options
- ⏳ `proptest` crate (property-based testing, konsep)
- ⏳ Benchmarking (`cargo bench`)

## 15. Cargo & Tooling
- ⏳ `Cargo.toml` dan `Cargo.lock`
- ⏳ Dependencies (`[dependencies]`, `[dev-dependencies]`, `[build-dependencies]`)
- ⏳ Features dan feature flags
- ⏳ Workspaces
- ⏳ `cargo build`, `cargo run`, `cargo test`, `cargo check`
- ⏳ `cargo fmt` (Rustfmt)
- ⏳ `cargo clippy` (Linter)
- ⏳ `cargo doc --open`
- ⏳ Build profiles (`[profile.release]`)
- ⏳ `cargo add` / `cargo remove`
- ⏳ `cargo update`
- ⏳ Publishing ke crates.io

## 16. Unsafe Rust
- ⏳ Kapan perlu unsafe (FFI, raw pointer, mutable static)
- ⏳ `unsafe { }` block
- ⏳ `unsafe fn`, `unsafe trait`, `unsafe impl`
- ⏳ Raw pointers: `*const T`, `*mut T`
- ⏳ Dereferencing raw pointers
- ⏳ Unsafe abstractions — bungkus unsafe jadi safe API
- ⏳ `MaybeUninit<T>`
- ⏳ `Union`
- ⏳ Rustonomicon (buku resmi untuk unsafe)

## 17. Practical Patterns
- ⏳ Builder pattern
- ⏳ RAII (Resource Acquisition Is Initialization)
- ⏳ Type-state pattern
- ⏳ Extension traits
- ⏳ Error accumulating pattern
- ⏳ Actor model dengan channels

## Rekomendasi Resource

| Resource | Link |
|----------|------|
| Rust Book | https://doc.rust-lang.org/book/ |
| Rust by Example | https://doc.rust-lang.org/rust-by-example/ |
| Rustlings (latihan interaktif) | https://github.com/rust-lang/rustlings |
| Rust Cookbook | https://rust-lang-nursery.github.io/rust-cookbook/ |
| Async Book | https://rust-lang.github.io/async-book/ |
| Rustonomicon (unsafe) | https://doc.rust-lang.org/nomicon/ |
| Easy Rust (simpel) | https://dhghomon.github.io/easy_rust/ |

## Tips Belajar

1. **Jangan skip Ownership.** Ini konsep paling penting dan paling bikin frustrasi di awal. Luangkan waktu di sini.
2. **Jalankan `cargo fmt`, `cargo check`, dan `cargo test` dari awal.** Biar feedback loop cepat dan konsisten.
3. **Baca error message compiler.** Rust compiler biasanya sudah kasih arah perbaikan yang tepat.
4. **Mulai dari Rustlings.** Latihan kecil yang langsung fix di kode.
5. **Bikin project kecil.** CLI tool, web server sederhana, parser, atau utility yang benar-benar dipakai.
6. **Jangan belajar async sebelum paham sync.** Async Rust itu advanced, dasar-dasarnya harus kuat dulu.
7. **Gunakan `cargo clippy`.** Clippy ngajarin idiomatic Rust.
