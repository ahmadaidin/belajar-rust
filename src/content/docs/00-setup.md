---
title: Setup & Workflow
---

Toolchain Rust sudah terpasang: `cargo 1.96.1` dan `rustc 1.96.1`.

## Install Rust

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Cek:
```bash
rustc --version
cargo --version
```

## Project Baru

```bash
cargo new hello-rust
cd hello-rust
cargo run
```

## 4 Perintah Utama

| Perintah | Fungsi |
|----------|--------|
| `cargo check` | Cek kode tanpa build (cepat) |
| `cargo build` | Compile |
| `cargo run` | Compile + run |
| `cargo test` | Jalankan test |

Bonus: `cargo fmt` (format), `cargo clippy` (linter), `cargo doc --open` (docs).

## rust-analyzer

Extension editor untuk autocomplete, error inline, goto-definition:

```bash
rustup component add rust-analyzer
```

## Latihan yang sudah dilakukan

1. ✅ Install Rust toolchain
2. ✅ `cargo new` + `cargo run` project pertama
3. ✅ Baca pesan error compiler
4. ✅ Coba `let mut` vs shadowing

