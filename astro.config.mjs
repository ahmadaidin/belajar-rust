import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import svelte from "@astrojs/svelte";
import catppuccin from "@catppuccin/starlight";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [
    svelte(),
    starlight({
      title: "Belajar Rust",
      sidebar: [
        { label: "0. Setup & Workflow", items: [{ slug: "00-setup" }] },
        {
          label: "1. Fondasi",
          items: [
            { slug: "01-fondasi/variable-mutability" },
            { slug: "01-fondasi/tipe-data" },
            { slug: "01-fondasi/fungsi" },
            { slug: "01-fondasi/control-flow" },
            { slug: "01-fondasi/pattern-matching" },
            { slug: "01-fondasi/option-result" },
            { slug: "01-fondasi/casting" },
            { slug: "01-fondasi/shadowing" },
          ],
        },
        {
          label: "2. Struct, Enum, Trait",
          items: [
            { slug: "02-struct-enum-trait/struct" },
            { slug: "02-struct-enum-trait/enum" },
            { slug: "02-struct-enum-trait/trait" },
            { slug: "02-struct-enum-trait/derive" },
            { slug: "02-struct-enum-trait/trait-bounds" },
          ],
        },
        {
          label: "3. Ownership & Borrowing",
          items: [
            { slug: "03-ownership/move-clone-copy" },
            { slug: "03-ownership/references" },
            { slug: "03-ownership/slices" },
            { slug: "03-ownership/lifetime" },
            { slug: "03-ownership/interior-mutability" },
          ],
        },
        {
          label: "4. Collections & Iterators",
          items: [
            { slug: "04-collections-iterators/vec" },
            { slug: "04-collections-iterators/hashmap" },
            { slug: "04-collections-iterators/iterator" },
          ],
        },
        {
          label: "5. Error Handling",
          items: [
            { slug: "05-error-handling/panic-result" },
            { slug: "05-error-handling/question-mark" },
            { slug: "05-error-handling/custom-error" },
          ],
        },
        {
          label: "6. Generics & Adv Types",
          items: [
            { slug: "06-generics/generics" },
            { slug: "06-generics/advanced-types" },
          ],
        },
        { label: "7. Module System", items: [{ slug: "07-modules" }] },
        { label: "8. Macros", items: [{ slug: "08-macros" }] },
        { label: "9. Smart Pointers", items: [{ slug: "09-smart-pointers" }] },
        { label: "10. Closures", items: [{ slug: "10-closures" }] },
        { label: "11. Concurrency", items: [{ slug: "11-concurrency" }] },
        { label: "12. Async Rust", items: [{ slug: "12-async" }] },
        { label: "13. I/O & File System", items: [{ slug: "13-io" }] },
        { label: "14. Testing", items: [{ slug: "14-testing" }] },
        { label: "15. Cargo & Tooling", items: [{ slug: "15-cargo" }] },
        { label: "16. Unsafe Rust", items: [{ slug: "16-unsafe" }] },
        { label: "17. Practical Patterns", items: [{ slug: "17-patterns" }] },
        {
          label: "Resource & Tips",
          items: [{ slug: "99-resources" }, { slug: "99-tips" }],
        },
        { label: "Lainnya", items: [{ slug: "roadmap" }] },
      ],
      head: [
        {
          tag: "link",
          attrs: {
            href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap",
            rel: "stylesheet",
          },
        },
      ],
      customCss: ["/src/styles/fonts.css"],
      plugins: [
        catppuccin({
          dark: { flavor: "mocha", accent: "sky" },
          light: { flavor: "latte", accent: "lavender" },
        }),
      ],
    }),
  ],

  adapter: cloudflare({
    imageService: "compile",
    prerenderEnvironment: "workerd",
  }),
  vite: {
    optimizeDeps: {
      exclude: ["astro/compiler-runtime", "astro/zod"],
    },
    ssr: {
      external: ["astro/compiler-runtime", "astro/zod"],
    },
  },
});
