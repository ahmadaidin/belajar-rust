---
title: Hello Rust
description: "Halaman ini membahas pembuatan project Rust pertama dan memahami struktur project Cargo. Jika Rust belum terpasang, mulai dari Setup Rust."
---

Halaman ini membahas pembuatan project Rust pertama dan memahami struktur project Cargo. Jika Rust belum terpasang, mulai dari [Setup Rust](/00-hello-rust/setup-rust).

## Membuat Project Baru

`cargo` menyediakan cara cepat untuk membuat project. Perintah di bawah ini membuat folder `hello-rust` dengan struktur standar:

```bash
cargo new hello-rust
cd hello-rust
cargo run
```

Kalau berhasil, outputnya:

```text
   Compiling hello-rust v0.1.0
    Finished `dev` profile [unoptimized + debuginfo]
     Running `target/debug/hello-rust`
Hello, world!
```

## Struktur Project Cargo

Buka project yang baru dibuat dan perhatikan file dan folder ini:

```text
hello-rust/
├── Cargo.toml          # Metadata project dan daftar dependencies
├── Cargo.lock          # Snapshot dependency yang dipakai; muncul setelah build pertama
├── .gitignore          # Daftar file/folder yang diabaikan Git
├── src/
│   └── main.rs         # Entry point untuk binary (cargo run)
└── target/             # Hasil build; bisa diabaikan, biasanya masuk .gitignore
```

> **Catatan tentang `Cargo.lock`:** File ini dibuat secara otomatis oleh `cargo` berdasarkan `[dependencies]` di `Cargo.toml`. Jangan diedit manual — biarkan `cargo` yang mengelolanya. Lebih detailnya akan dipelajari di bagian [Cargo & Tooling](/15-cargo).

Contoh `Cargo.toml` minimal:

```toml
[package]
name = "hello-rust"
version = "0.1.0"
edition = "2024"

[dependencies]
```

Penjelasan tiap bagian:

- `[package]` — Section yang berisi metadata project.
- `name` — Nama package (di Rust dinamakan crate). Nama ini yang muncul di `Cargo.lock` dan digunakan saat publish ke [crates.io](https://crates.io).
- `version` — Versi package mengikuti [Semantic Versioning](https://semver.org), format `MAJOR.MINOR.PATCH`.
- `edition` — Versi aturan bahasa Rust yang dipakai.
- `[dependencies]` — Section untuk daftar library eksternal yang dibutuhkan project.

## Perintah Cargo Dasar

Beberapa perintah yang langsung dipakai di halaman ini:

- `cargo new <nama>` — Membuat project baru.
- `cargo run` — Compile dan jalankan project.
- `cargo check` — Cek kode tanpa menghasilkan binary (paling cepat).

Perintah lengkap dan pengaturan editor dibahas di [Setup Rust](/00-hello-rust/setup-rust).

## Membaca Error Compiler

Salah satu kekuatan Rust adalah pesan error yang jelas. Cobalah ubah `src/main.rs` jadi kode yang sengaja salah:

```rust
fn main() {
    let x = 5;
    x = 6;
    println!("{x}");
}
```

Lalu jalankan:

```bash
cargo check
```

Rust akan memberitahu bahwa `x` tidak bisa diassign ulang karena tidak mutable. Biasanya compiler langsung menyarankan menambahkan `mut`.

> **Catatan:** Jika menggunakan editor seperti Zed atau VS Code, pesan error biasanya muncul langsung di editor karena `rust-analyzer` menjalankan `cargo check` di latar belakang. Meski begitu, tetap penting untuk memahami cara menjalankannya dari terminal.

## Next Steps

Setelah project pertama berjalan, lanjutkan ke topik [Variable & Mutability](/01-fondasi/variable-mutability) untuk memahami sistem ownership Rust.
