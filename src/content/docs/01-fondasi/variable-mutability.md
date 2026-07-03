---
title: Variable & Mutability
---

Di Rust, setiap variabel secara default **immutable** — nilainya tidak bisa diubah setelah di-set.

```rust
let x = 5;       // immutable, x tidak bisa diubah lagi
let mut y = 10;  // mutable, y bisa diubah
y = 15;          // ✅ boleh karena mut
// x = 6;        // ❌ ERROR: cannot assign twice to immutable variable
```

## Kenapa immutable by default?

Karena cara Rust menjamin memory safety tanpa garbage collector. Compiler perlu tahu kapan nilai bisa berubah.

## Shadowing

```rust
let x = 5;
let x = x + 1;   // bikin variabel BARU dengan nama sama, nilai 6
let x = "halo";  // bahkan bisa ganti tipe! ini variabel baru lagi
```

Shadowing = mendeklarasikan ulang variabel dengan nama sama. Beda dengan `let mut` karena:

- Variabel baru dibuat, yang lama "tertutupi"
- Bisa ganti tipe data
- Tetap immutable

## Block Scope

`{}` bikin scope baru. Variabel yang di-declare dalam block hanya hidup selama block itu.

```rust
let x = 5;
let x = x + 3;
{
    let x = x * 2;
    println!("Di dalam scope: {x}"); // 16
}
println!("Di luar scope: {x}");      // 8
```
