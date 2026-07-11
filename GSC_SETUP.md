# Panduan Setup Google Search Console

> Google Search Console (GSC) gratis dan wajib dipasang untuk memantau performa SEO website.

## 1. Tambahkan Properti

1. Buka [Google Search Console](https://search.google.com/search-console).
2. Klik **Start now** dan login dengan akun Google kamu.
3. Pilih **Add property**.
4. Pilih opsi **Domain**.
5. Masukkan domain: `belajarrust.aidin.my.id`.
6. Klik **Continue**.

## 2. Verifikasi Domain

Google akan meminta verifikasi. Pilih metode yang paling mudah:

### Opsi A — DNS TXT Record (Direkomendasikan)

1. Di halaman verifikasi GSC, salin nilai **TXT record**.
2. Buka panel DNS domain kamu (misalnya Cloudflare).
3. Tambahkan record baru:
   - **Type:** TXT
   - **Name:** `@`
   - **Content:** *(tempel kode dari GSC)*
   - **TTL:** Auto
4. Kembali ke GSC dan klik **Verify**.

### Opsi B — HTML Tag

1. Di halaman verifikasi GSC, salin nilai atribut `content` dari tag meta.
   Contoh: `abc123...xyz`.
2. Tambahkan ke file `.env` di root project:
   ```env
   PUBLIC_GOOGLE_SITE_VERIFICATION=abc123...xyz
   ```
3. Deploy ulang website.
4. Kembali ke GSC dan klik **Verify**.

## 3. Submit Sitemap

1. Di sidebar GSC, pilih **Sitemaps**.
2. Masukkan URL: `https://belajarrust.aidin.my.id/sitemap-index.xml`
3. Klik **Submit**.

## 4. Pantau Secara Berkala

Setelah beberapa hari, cek menu berikut:

- **Performance** — query dan halaman yang mendapat impression/klik.
- **Pages** — status indexing setiap halaman.
- **Core Web Vitals** — metrik kecepatan halaman.
- **Mobile Usability** — masalah tampilan di perangkat mobile.

## 5. Tips

- Verifikasi DNS biasanya lebih stabil karena tidak bergantung pada kode di website.
- Jika mengganti domain nanti, proses verifikasi harus diulang di GSC.
