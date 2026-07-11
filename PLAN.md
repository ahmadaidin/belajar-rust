# Rencana Optimasi SEO — Belajar Rust

> Tanggal dibuat: 2026-07-11  
> Tujuan: Meningkatkan keterlihatan website dokumentasi Rust ini di mesin pencari.

---

## Temuan Saat Ini

| Aspek SEO | Kondisi | Catatan |
|---|---|---|
| `site` URL di `astro.config.mjs` | ❌ Belum diatur | Dibutuhkan untuk canonical URL dan sitemap. |
| Sitemap (`@astrojs/sitemap`) | ❌ Belum terpasang | Mesin pencari butuh peta situs untuk indexing. |
| `robots.txt` | ❌ Belum ada | Perlu mengarahkan crawler ke sitemap. |
| Meta deskripsi per halaman | ⚠️ Terbatas | Hanya `index.md` dan `roadmap.md` yang punya `description`. |
| Open Graph / Twitter Card | ❌ Belum ada | Kurang optimal saat dibagikan di sosial media. |
| Canonical URL | ❌ Tidak pasti | Bergantung pada pengaturan `site`. |
| `html lang` | ⚠️ `en` default | Konten berbahasa Indonesia, sebaiknya diset ke `id`. |
| Halaman placeholder | ⚠️ 32 halaman | Konten tipis (`⏳ Belum dipelajari`) perlu di-*noindex*. |

---

## Fase Pengerjaan

### Fase 1 — Konfigurasi Dasar
- [ ] Tambahkan properti `site` di `astro.config.mjs` dengan domain produksi.
- [ ] Pasang dan konfigurasi `@astrojs/sitemap`.
- [ ] Buat `public/robots.txt` yang mengizinkan crawl serta menunjuk ke `sitemap-index.xml`.
- [ ] Set bahasa default ke Indonesia (`defaultLocale: 'id'`) di konfigurasi Starlight.

### Fase 2 — Metadata Per Halaman
- [ ] Tambahkan `description` di frontmatter setiap halaman yang sudah memiliki konten.
- [ ] Beri tanda `noindex` pada halaman placeholder sampai kontennya ditulis.
- [ ] Pastikan setiap halaman memiliki `<title>` yang unik dan deskriptif.

### Fase 3 — Custom Head Component
- [ ] Buat `src/components/Head.astro` yang membungkus Starlight `Head` bawaan.
- [ ] Tambahkan tag Open Graph dinamis (`og:title`, `og:description`, `og:url`, `og:type`, `og:image`).
- [ ] Tambahkan tag Twitter Card dinamis (`twitter:title`, `twitter:description`, `twitter:image`).
- [ ] Tambahkan canonical URL otomatis berdasarkan `Astro.site` dan path halaman.
- [ ] Tambahkan JSON-LD minimal (`WebSite` dan `WebPage`).
- [ ] Dukungan `noindex` dinamis untuk halaman placeholder.

### Fase 4 — Konten & Struktur
- [ ] Pastikan heading H1 unik per halaman (Starlight otomatis, tetap diverifikasi).
- [ ] Pertimbangkan `pagefind: false` untuk halaman placeholder agar tidak muncul di pencarian internal.
- [ ] Periksa kembali struktur URL dan slug agar konsisten.

### Fase 5 — Audit Performa (Opsional)
- [ ] Jalankan audit Core Web Vitals menggunakan Chrome DevTools MCP jika tersedia.
- [ ] Jika MCP belum tersedia, lakukan review manual terhadap:
  - Preload font Google Fonts.
  - Lazy loading gambar.
  - Ukuran bundle JS/CSS.
  - Layout shift potensial.

---

## Pertanyaan yang Perlu Dijawab Sebelum Eksekusi

1. **Domain produksi** yang akan dipakai apa?  
   Contoh: `https://belajar-rust.aidin.my.id`

2. **Apakah 32 halaman placeholder** ingin di-*noindex* dulu sampai kontennya selesai?

3. **Apakah ada Open Graph image default?**  
   Jika belum, bisa dibuatkan yang sederhana atau dilewati dulu.

4. **Apakah ingin mengaktifkan audit performa dengan `chrome-devtools` MCP**, atau fokus pada SEO on-page saja?

---

## Referensi

- [Astro Sitemap Integration](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Starlight Custom Head](https://starlight.astro.build/guides/overriding-components/#reuse-a-built-in-component)
- [Starlight i18n Configuration](https://starlight.astro.build/guides/i18n/)
- [Google Search Central — SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
