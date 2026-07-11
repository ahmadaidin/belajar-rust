---
title: Sekilas Rust
description: "Rust adalah bahasa pemrograman sistem yang dirancang untuk menulis perangkat lunak cepat, andal, dan aman. Bahasa ini pertama kali dibuat oleh Graydon…"
---

Rust adalah bahasa pemrograman sistem yang dirancang untuk menulis perangkat lunak cepat, andal, dan aman. Bahasa ini pertama kali dibuat oleh Graydon Hoare di Mozilla Research sekitar tahun 2006, lalu rilis versi stabil 1.0 pada tahun 2015.

## Sekilas Tentang Bahasa Rust

Rust berada di posisi menarik: performanya mendekati C/C++, tapi dengan jaminan keamanan memori yang jauh lebih kuat. Rust tidak menggunakan mekanisme <span class="tooltip" data-tooltip="Garbage Collection - mekanisme otomatis pembersihan memori yang tidak lagi digunakan">garbage collection (GC)</span>, sehingga cocok untuk sistem operasi, embedded, game engine, browser engine, database, dan *runtime* yang membutuhkan kontrol sumber daya ketat.

Karakteristik utama Rust:

- **Memory safety tanpa GC**: borrow checker mencegah <span class="tooltip" data-tooltip="Kondisi masih adanya pointer yang mengacu ke memori yang sudah dibebaskan atau dihapus">*dangling pointer*</span>, <span class="tooltip" data-tooltip="Membaca atau menulis ke dangling pointer">*use-after-free*</span>, dan <span class="tooltip" data-tooltip="Mengakses memori secara bersamaan tanpa kontrol">*data race*</span> saat compile time.
- **Zero-cost abstractions**: fitur tingkat tinggi seperti iterator, pattern matching, dan trait tidak mengorbankan performa.
- **Ownership system**: setiap nilai punya pemilik tunggal yang jelas; akses bersamaan dikendalikan aturan *borrow*.
- **Type inference yang kuat**: compiler bisa menebak tipe variabel otomatis, tapi tetap bisa ditulis eksplisit saat perlu.

## Kenapa Rust Dibuat

C dan C++ telah mendominasi pemrograman sistem selama puluhan tahun. Keduanya cepat dan memberi kontrol penuh, tetapi juga rentan terhadap bug memori. Microsoft melaporkan bahwa **sekitar 70% dari CVE (celah keamanan)** yang mereka perbaiki setiap tahun berasal dari kesalahan memori, dan tim keamanan Chromium menemukan angka serupa: **sekitar 70% bug serius** di codebase Chrome juga disebabkan oleh masalah memory safety. Contoh kesalahan memori yang umum: *buffer overflow*, *use-after-free*, *null pointer dereference*, dan sebagainya.

Rust hadir untuk menjawab pertanyaan: **bagaimana caranya memiliki performa C/C++ tanpa rentan bug memori yang sama?** Caranya adalah dengan memindahkan banyak pemeriksaan memory dari runtime ke *compile time* melalui sistem ownership dan borrow checker.

Hasilnya: bug memori yang biasanya baru ketahuan saat runtime atau produksi, jadi terdeteksi lebih awal saat kompilasi.

## Kelebihan Dibanding Bahasa Lain

Berikut perbandingan kasar Rust dengan bahasa lain di bidang sistem:

| Bahasa | Performa | Memory Safety | Concurrency Safety | Garbage Collector |
|--------|----------|---------------|--------------------|-------------------|
| Rust | Tinggi | Ya, compile-time | Ya | Tidak |
| C/C++ | Tinggi | Tidak otomatis | Tidak otomatis | Tidak |
| Go | Cukup tinggi | Ya, runtime | Ya | Ya |
| Java | Cukup tinggi | Ya, runtime | Ya | Ya |
| Python | Lambat | Ya, runtime | Tidak otomatis | Ya |

Kelebihan kunci Rust:

1. **Keamanan memori tanpa GC**: tidak ada pause GC, cocok untuk *real-time* dan embedded.
2. **Concurrency yang aman**: compiler menolak kode yang berpotensi *data race*.
3. **Pesan error yang jelas**: `rustc` terkenal memberi penjelasan error panjang dan actionable.
4. **Ekosistem modern**: `cargo` menggabungkan build tool, package manager, linter, formatter, dan test runner.
5. **Cross-platform**: mendukung banyak target, dari desktop hingga WebAssembly dan embedded.

## Rust di Linux Kernel

Sebuah tonggak penting dalam sejarah Rust adalah adopsi di Linux kernel. Pada Linux 6.1 (rilis Desember 2022), infrastruktur Rust resmi digabungkan ke kernel. Ini membuat Rust menjadi bahasa kedua yang diizinkan untuk menulis kode kernel, selain C.

Proyek ini dikenal sebagai **Rust for Linux**. Tujuannya bukan mengganti seluruh kernel C, melainkan:

- Menulis *driver* dan subsistem baru dengan garansi keamanan memori lebih baik.
- Mengurangi kerentanan keamanan yang berasal dari kesalahan memori di kernel.
- Memberi contoh bagaimana Rust bisa bekerja di *codebase* sistem yang sangat besar dan kritis.

Linux kernel adalah proyek dengan jutaan baris kode C dan proses review yang sangat ketat. Adopsi Rust di sana menunjukkan bahwa Rust sudah dianggap matang untuk sistem yang benar-benar kritis.

## Ringkasan

- Rust = performa C/C++ + keamanan memori modern.
- Sistem ownership dan borrow checker adalah inti keamanannya.
- Rust dipakai di tempat kritis: browser engine (Firefox, Servo), game engine, database, dan kini Linux kernel.

Selanjutnya kita akan memasang Rust toolchain dan membuat project pertama.

## Referensi
- [The Rust Book - Introduction](https://doc.rust-lang.org/book/ch00-00-introduction.html)
- [Rust Official Website](https://www.rust-lang.org/)
- [Rust for Linux Project](https://rust-for-linux.com/)
- [Understanding Ownership](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html)
- [CWE-416: Use After Free](https://cwe.mitre.org/data/definitions/416.html)
- [Sejarah Rust (Wikipedia)](https://en.wikipedia.org/wiki/Rust_(programming_language)) — asal-usul Rust, Graydon Hoare, Mozilla Research, dan timeline rilis
- [Microsoft Security Response Center: A proactive approach to more secure code (2019)](https://msrc.microsoft.com/blog/2019/07/a-proactive-approach-to-more-secure-code/) — data ~70% kerentanan keamanan Microsoft berasal dari memory safety issues
- [Chromium Project: Memory Safety](https://www.chromium.org/Home/chromium-security/memory-safety/) — studi serupa dari tim keamanan Chrome, ~70% bug serius disebabkan memory safety issues
