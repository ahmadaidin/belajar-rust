---
title: Shadowing
description: "Shadowing = mendeklarasikan ulang variabel dengan nama sama. Variabel baru dibuat, yang lama \"tertutupi\"."
---

Shadowing = mendeklarasikan ulang variabel dengan nama sama. Variabel baru dibuat, yang lama "tertutupi".

```rust
let x = 5;
let x = x + 1;   // x sekarang 6 (variabel baru)
let x = "halo";  // tipe bisa berubah
```

Beda dengan `let mut`:

| `let mut` | Shadowing |
|-----------|-----------|
| Satu variabel, nilai berubah | Banyak variabel dengan nama sama |
| Tipe tetap | Bisa ganti tipe |
| Bisa diubah di mana saja | Hanya saat deklarasi `let` baru |

## Shadowing + Block Scope

```rust
let x = 5;              // x = 5
let x = x + 3;          // x = 8
{
    let x = x * 2;      // x dalam block = 16
    println!("{x}");    // 16
}
println!("{x}");        // 8 — x luar tidak terpengaruh
```
