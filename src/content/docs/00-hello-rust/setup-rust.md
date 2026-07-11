---
title: Setup Rust
---

Halaman ini menjelaskan cara memasang toolchain Rust dan mengenalkan workflow `cargo` sebelum masuk ke topik bahasa.

## Prasyarat

- Shell atau terminal (PowerShell, Bash, Zsh, Fish)
- Koneksi internet untuk mengunduh `rustup`

## Install Rust

Rust dipasang menggunakan `rustup`, yaitu installer sekaligus pengelola versi Rust dan tool pendukungnya. Pastikan komputer terhubung ke internet selama proses instalasi.

Kalau tidak ingin memakai `rustup`, ada alternatif lain di [Other Rust Installation Methods](https://forge.rust-lang.org/infra/other-installation-methods.html).

### Linux & macOS

Buka terminal, lalu jalankan:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Perintah di atas mengunduh script installer dan menjalankannya. Ikuti pertanyaan di terminal; pilihan default umumnya sudah cukup. Setelah selesai, muat ulang environment agar perintah Rust dikenali:

```bash
source $HOME/.cargo/env
```

Atau cukup tutup dan buka ulang terminal.

Rust juga membutuhkan *linker* untuk menyatukan hasil compile. Pada sistem modern linker biasanya sudah tersedia. Jika menemukan error linker, pasang compiler C:

- macOS:

```bash
xcode-select --install
```

- Linux (contoh Ubuntu/Debian):

```bash
sudo apt install build-essential
```

Jika kamu menggunakan **WSL** (Windows Subsystem for Linux), cukup ikuti langkah Linux di atas dari dalam distro WSL yang sudah terpasang. Rust akan berjalan di lingkungan Linux tersebut, bukan langsung di Windows.

### Windows

Di Windows, ikuti metode install berdasarkan [Other Rust Installation Methods](https://forge.rust-lang.org/infra/other-installation-methods.html). 

### Memastikan Instalasi Berhasil

Jalankan:

```bash
rustc --version
cargo --version
rustup --version
```

Output yang muncul mirip seperti:

```text
rustc 1.96.1 (abcabcabc 2026-07-11)
cargo 1.96.1 (abcabcabc 2026-07-11)
rustup 1.27.1 (abcabcabc 2026-07-11)
info: This is the version for the rustup toolchain manager, not the rustc compiler.
info: the currently active `rustc` version is `rustc 1.96.1 (abcabcabc 2026-06-26)`
```

Jika muncul nomor versi, selamat — Rust sudah terpasang.

### Memperbarui dan Menghapus Rust

Setelah terpasang, memperbarui Rust ke versi terbaru sangat mudah:

```bash
rustup update
```

Untuk menghapus Rust dan `rustup` sepenuhnya:

```bash
rustup self uninstall
```

### Dokumentasi Lokal

Instalasi Rust menyertakan dokumentasi offline. Gunakan perintah ini untuk membukanya di browser:

```bash
rustup doc
```

Sangat berguna ketika sedang bekerja tanpa koneksi internet.


## 4 Perintah Utama

Biasakan menggunakan perintah-perintah ini dalam siklus development:

| Perintah | Fungsi |
|----------|--------|
| `cargo check` | Cek kode tanpa build (paling cepat) |
| `cargo build` | Compile project |
| `cargo run` | Compile + jalankan |
| `cargo test` | Jalankan test |

Ada juga perintah bantu yang sering dipakai:

| Perintah | Fungsi |
|----------|--------|
| `cargo fmt` | Format kode secara otomatis |
| `cargo clippy` | Linter bawaan Rust; memberi saran idiomatic |
| `cargo doc --open` | Bangkitkan dan buka dokumentasi lokal |
| `cargo clean` | Hapus folder `target/` untuk memulai build dari awal |

## Setup Editor

Rust paling nyaman ditulis dengan `rust-analyzer`. Komponen ini tidak diinstall otomatis saat menjalankan `rustup` dari command curl, jadi perlu disiapkan sesuai editor.

`rust-analyzer` akan memberikan autocomplete, error inline, goto definition, serta refactoring.

### [Zed](https://zed.dev)

Zed punya dukungan Rust bawaan. Cukup buka project Rust, editor akan otomatis mengaktifkan `rust-analyzer`.

### [VS Code](https://code.visualstudio.com)

Install extension [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer). Extension ini akan otomatis mengunduh binary `rust-analyzer` yang sesuai.

### Lainnya

Untuk Helix, Neovim, Emacs, dan Sublime Text, install LSP server secara manual:

```bash
rustup component add rust-analyzer
```

Kemudian konfigurasikan editor untuk menjalankan binary `rust-analyzer` tersebut.

## Tips Workflow

1. Mulai dari `cargo check`, bukan `cargo build`. Jauh lebih cepat karena tidak memproduksi binary. `cargo check` otomatis dijalankan oleh rust analyzer.
2. Jalankan `cargo fmt` dan `cargo clippy` sebelum commit. Ini membuat kode konsisten.
3. Baca error dari atas ke bawah. Pesan pertama biasanya sudah cukup untuk memperbaiki masalah.
4. Gunakan Rustlings untuk latihan mandiri. Kumpulan latihan kecil yang langsung dikoreksi.

## Resources

- [Rust Book: Installation](https://doc.rust-lang.org/book/ch01-01-installation.html)
- [Rustlings](https://rustlings.rust-lang.org/) — latihan interaktif
- [Cargo guide](https://doc.rust-lang.org/cargo/)
