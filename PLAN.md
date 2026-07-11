# Rencana Optimasi SEO — Belajar Rust

> Tanggal dibuat: 2026-07-11  
> Update terakhir: 2026-07-11  
> Tujuan: Meningkatkan keterlihatan website dokumentasi Rust ini di mesin pencari, terutama untuk kata kunci "Belajar Rust", "tutorial Rust", dan "belajar bahasa rust".

---

## Ringkasan Implementasi

- **Technical SEO:** 10/10 item selesai.
- **Konten placeholder:** 0/12 topik selesai.
- **GSC verifikasi:** Siap, menunggu verifikasi manual.
- **Authority & backlink:** Belum dimulai.
- **Optimasi lanjutan:** Belum dimulai.

> Technical SEO sudah solid. Bottleneck selanjutnya adalah **produksi konten**.

---

## Status Implementasi SEO Teknis

| Aspek SEO | Status | Catatan |
|---|---|---|
| `site` URL di `astro.config.mjs` | ✅ | `https://belajar-rust.aidin.my.id` |
| Sitemap (`@astrojs/sitemap`) | ✅ | Generate otomatis saat build (`sitemap-index.xml` + `sitemap-0.xml`). |
| `robots.txt` | ✅ | `public/robots.txt` mengarahkan ke sitemap. |
| Meta deskripsi per halaman | ✅ | Semua halaman non-placeholder sekarang punya `description`. |
| Open Graph / Twitter Card | ✅ | Dibuat otomatis oleh Starlight (`og:title`, `og:url`, `og:description`, `og:locale`, `og:site_name`, `twitter:card`). |
| Canonical URL | ✅ | `<link rel="canonical">` absolut di setiap halaman. |
| `html lang` | ✅ | `<html lang="id" dir="ltr">` di seluruh halaman. |
| Halaman placeholder | ✅ | 32 halaman di-*noindex* (`noindex: true`) dan dikecualikan dari Pagefind (`pagefind: false`). |
| Google Search Console support | ✅ | `Head.astro` siap menerima `PUBLIC_GOOGLE_SITE_VERIFICATION`. Panduan ada di `GSC_SETUP.md`. |
| Verifikasi Google Search Console | ❌ | Belum dilakukan di akun Google kamu. |

---

## Fase Berikutnya: Konten & Authority

### Fase 1 — Isi Konten Placeholder

Target: 1 topik per minggu, teks saja.

| Minggu | Topik | Status |
|---|---|---|
| 1 | Variable & Mutability | ❌ Belum ditulis |
| 2 | Tipe Data | ❌ Belum ditulis |
| 3 | Fungsi | ❌ Belum ditulis |
| 4 | Control Flow | ❌ Belum ditulis |
| 5 | Pattern Matching | ❌ Belum ditulis |
| 6 | Option & Result | ❌ Belum ditulis |
| 7 | Struct | ❌ Belum ditulis |
| 8 | Enum | ❌ Belum ditulis |
| 9 | Trait | ❌ Belum ditulis |
| 10 | Move, Clone, Copy | ❌ Belum ditulis |
| 11 | References & Borrowing | ❌ Belum ditulis |
| 12 | Slices / Lifetimes | ❌ Belum ditulis |

Format standar tiap halaman:
- Intro yang jelas.
- Penjelasan konsep dengan bahasa sendiri.
- Minimal 2–3 contoh kode Rust.
- Kesalahan umum + cara memperbaiki.
- Best practice.
- Latihan atau checklist singkat.
- Internal link ke topik terkait.
- Referensi ke Rust Book.

### Fase 2 — Setup & Monitor Google Search Console

- [ ] Verifikasi domain di GSC (DNS TXT atau HTML tag).
- [ ] Submit sitemap: `https://belajar-rust.aidin.my.id/sitemap-index.xml`.
- [ ] Pantau menu Performance, Pages, dan Core Web Vitals.
- [ ] Identifikasi halaman dengan impression tinggi tapi CTR rendah, lalu perbaiki title/description.

Panduan lengkap ada di `GSC_SETUP.md`.

### Fase 3 — Bangun Authority & Backlink

- [ ] Buat halaman **Tentang** dengan bio penulis.
- [ ] Tambahkan halaman **Kontak** terpisah.
- [ ] Tambahkan **Disclaimer / Kebijakan Privasi** jika ada analytics.
- [ ] Bagikan ke komunitas WhatsApp setelah minimal 5 topik fondasi selesai.
- [ ] Tulis artikel di Medium/Dev.to dalam bahasa Indonesia yang mengarah ke situs ini.
- [ ] Berikan jawaban berkualitas di Stack Overflow / Reddit r/rust / r/indonesia, cantumkan link jika relevan.

### Fase 4 — Optimasi Lanjutan

- [ ] Tambahkan **BreadcrumbList** structured data.
- [ ] Tambahkan **HowTo** schema untuk artikel tutorial langkah-demi-langkah.
- [ ] Pertimbangkan artikel pilar seperti "Panduan Lengkap Belajar Rust untuk Pemula".
- [ ] Audit Core Web Vitals berkala.

---

## Strategi Komunitas WhatsApp

- **Jangan bagikan dulu** sampai 5–10 topik fondasi selesai.
- Bagikan **topik spesifik**, bukan homepage.
- Tulis caption yang menjelaskan manfaat, bukan promosi keras.
- Minta feedback untuk perbaikan konten.

---

## Target Realistis

| Waktu | Target |
|---|---|
| 3 bulan | Ranking halaman 1–2 untuk long-tail keyword spesifik. |
| 6 bulan | Masuk halaman 1 untuk kata kunci menengah. |
| 12 bulan | Bersaing di "tutorial rust" / "belajar bahasa rust". |
| 18–24 bulan | Mendekati top 3 untuk "Belajar Rust". |

---

## Catatan Penting

Top 3 untuk kata kunci besar sangat bergantung pada:
1. **Kualitas dan kelengkapan konten** — ini prioritas utama.
2. **Backlink dari website lain** — membangun authority.
3. **Konsistensi publikasi** — 1 topik per minggu harus dijaga.

Technical SEO sudah solid. Sekarang semua bergantung pada eksekusi konten.

---

## Referensi

- [Astro Sitemap Integration](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Starlight Custom Head](https://starlight.astro.build/guides/overriding-components/#reuse-a-built-in-component)
- [Starlight i18n Configuration](https://starlight.astro.build/guides/i18n/)
- [Google Search Central — SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
