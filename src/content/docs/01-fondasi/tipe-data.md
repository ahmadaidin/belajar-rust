---
title: Tipe Data
description: "Rust punya dua kelompok tipe data:"
---

Rust punya dua kelompok tipe data:

## Scalar (satu nilai)

```rust
let a: i32 = 42;      // signed integer 32-bit (default)
let b: u8 = 255;      // unsigned 8-bit, 0..255
let c: f64 = 3.14;    // float 64-bit (default)
let d: bool = true;
let e: char = '🦀';   // char 4-byte, bisa Unicode
```

| Tipe | Range | Default |
|------|-------|---------|
| `i8`..`i128` | signed integer | — |
| `u8`..`u128` | unsigned integer | — |
| `isize`, `usize` | pointer-sized | — |
| `f32`, `f64` | float | `f64` |
| `i32` | integer | `i32` |

## Compound (gabungan nilai)

```rust
// Tuple — fixed-size, bisa beda tipe
let tup: (i32, f64, bool) = (10, 2.5, false);
let (x, y, z) = tup;            // destructure
let first = tup.0;              // akses pakai titik + index

// Array — fixed-size, tipe harus sama
let arr: [i32; 5] = [1, 2, 3, 4, 5];
let arr2 = [0; 10];             // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let first = arr[0];             // akses pakai bracket
```

## String vs &str

Rust punya dua jenis string:

```rust
// &str — string slice, panjang tetap
let s1: &str = "halo";

// String — owned, bisa bertambah panjang
let s2: String = String::from("halo");
let s3: String = "halo".to_string();   // cara lain bikin String
```

**Bedanya:**

| `&str` | `String` |
|--------|----------|
| Panjang tetap | Bisa nambah panjang |
| Tipe primitif | Tipe data |
| Default di function parameter | Untuk data yang mutable |

Untuk sekarang cukup tahu `&str` dipakai untuk string literal dan parameter, `String` untuk string yang bisa berubah. Detail soal heap, ownership, dan move dibahas di section 3.

## Yang harus diingat

- Integer default: `i32`
- Float default: `f64`
- Array fixed-size, kalau mau dinamis pakai `Vec<T>`
- Array out-of-bounds = **panic** di runtime, bukan undefined behavior
- `&str` untuk string literal, `String` untuk string yang bisa dimodifikasi
