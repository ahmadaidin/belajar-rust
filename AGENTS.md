# AGENTS.md

> Untuk info umum project (stack, struktur, scripts, roadmap) lihat [README.md](./README.md).

## Aturan Wajib

## Update Rule
- Never Commit untill I confirm the changes are ready

### Slug Convention

- `01-fondasi/tipe-data.md` → slug `01-fondasi/tipe-data`
- `07-modules.md` (di root) → slug `07-modules`
- JANGAN pakai `path/index` — Starlight slug otomatis = path tanpa ekstensi

### Frontmatter

- Tiap `.md` wajib punya minimal `title`
- Pakai `quotes` untuk title dengan karakter khusus (`?`, `:`, dll) agar YAML valid
- Slug di sidebar HARUS ada di `astro.config.mjs`

### Jangan Hapus

- `src/content.config.ts` — wajib untuk Astro 7 + Starlight 0.41
- `customCss: ["/src/styles/fonts.css"]` — font override
- File di `node_modules/`

### CSS / Styling

- Pakai Starlight variables: `--sl-color-accent`, `--sl-color-bg-nav`, `--sl-color-bg-inline-code`, `--sl-font-mono`
- JANGAN hardcode warna hex di Svelte components
- JANGAN pakai `@import` di CSS untuk Vite-resolved packages (Vite gagal resolve)

### Bahasa Konten

- **Bahasa Indonesia** untuk semua penjelasan
- Penekanan pakai `**bold**`, bukan `__bold__`
- Code block selalu tulis bahasa: ` ```rust `, ` ```bash `, ` ```toml `

## Alur Kerja (Workflow)


### Tambah Topik Baru

1. Ikuti urutan [`src/content/docs/roadmap.md`](./src/content/docs/roadmap.md) untuk menambah topik baru. Beritahu saya apa yang akan dipelajari
2. Bikin file `.md` di `src/content/docs/<section>/<topic>.md`
2. Isi frontmatter: `title`
4. Tambah slug di sidebar config `astro.config.mjs`
5. Placeholder: `⏳ **Belum dipelajari**`


### Update Topik
1. Lakukan interaksi dengan saya untuk memastikan saya paham materi yang akan ditambahkan.
2. Untuk setiap section harus berisi penjelasan apa akan yang dipelajar pada section tersebut
3. Update file topik sesuai dengan penjelasan yang telah diberikan
4. Tulis materi dengan heading `##` untuk section, `###` untuk sub
5. Code block wajib ada bahasa
6. Cek sidebar masih konsisten

### Restart Dev Server

- Edit `astro.config.mjs` → Astro auto-restart, biasanya cukup
- Tambah dependencies → cukup beritahu saya untuk restart dev server. JANGAN LAKUKAN SENDIRI

## Gotchas (Pelajaran dari Build Errors)

- Sidebar slug **harus sama** dengan file path tanpa ekstensi
- `content.config.ts` wajib ada untuk Astro 7
- Catppuccin v2 API: light accent valid options, `"default"` bukan salah satunya (pakai `latte + accent: lavender`)
- File `index.md` di dalam folder = slug folder itu sendiri, bukan `folder/index`

## Stack Reference

- Astro 7 + Starlight 0.41 + Svelte 5
- Catppuccin Starlight (mocha/latte)
- IBM Plex Sans + IBM Plex Mono via Google Fonts
- Bun sebagai runtime & package manager
