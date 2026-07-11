---
title: Control Flow
description: "Pelajari control flow di Rust: if expression, loop, while, for, dan pattern matching dasar."
---

## if — expression

`if` adalah **expression**, bukan statement — bisa di-assign ke variabel:

```rust
let angka = if is_even(10) { "genap" } else { "ganjil" };

// TIDAK bisa begini — kedua cabang harus return tipe sama
// let x = if true { 5 } else { "lima" }; ❌
```

Tidak ada ternary operator (`?:`) di Rust, pakai `if` langsung.

## loop

```rust
let mut count = 0;
let result = loop {
    count += 1;
    if count == 10 {
        break count * 2; // break bisa return value!
    }
};
// result = 20
```

## while

```rust
let mut n = 3;
while n != 0 {
    println!("{n}");
    n -= 1;
}
```

## for — paling sering dipakai

```rust
for i in 0..5 {         // 0, 1, 2, 3, 4 (exclusive)
    println!("{i}");
}

for i in 0..=5 {        // 0, 1, 2, 3, 4, 5 (inclusive)
    println!("{i}");
}

for ch in "🦀rust".chars() {
    println!("{ch}");
}
```
