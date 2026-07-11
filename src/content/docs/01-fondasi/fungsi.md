---
title: Fungsi
description: "fn nama_fungsi(param1: Tipe1, param2: Tipe2) -> ReturnType {"
---

```rust
fn nama_fungsi(param1: Tipe1, param2: Tipe2) -> ReturnType {
    // body
}
```

```rust
fn tambah(a: i32, b: i32) -> i32 {
    a + b   // tanpa titik koma = return value (implicit return)
}

fn sapa(nama: &str) -> String {
    format!("Halo, {nama}!")
}
```

## Aturan penting

- Tiap parameter **wajib** punya tipe
- `-> Tipe` untuk return value
- Baris tanpa `;` = expression yang di-return (implicit return)
- `return` keyword ada tapi jarang dipakai, kecuali early return

## Expression vs Statement

```rust
let x = 5;           // statement — tidak menghasilkan nilai
5 + 3;               // expression — menghasilkan nilai 8
let y = {            // block adalah expression
    let a = 3;
    a + 1            // 4 — nilai terakhir tanpa titik koma
};
```

Di Rust hampir semuanya expression. `if`, `loop`, bahkan block `{}` bisa menghasilkan nilai.
