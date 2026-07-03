<script>
  import { onMount } from "svelte";

  let {
    code = "",
    height = 200,
    expected = "",
    placeholder = "Tulis kode Rust di sini...",
  } = $props();

  let editor = $state(null);
  let source = $state(code);
  let output = $state("");
  let running = $state(false);
  let checked = $state(false);
  let passed = $state(false);

  onMount(() => {
    if (editor) {
      editor.style.height = `${height}px`;
    }
  });

  function handleInput() {
    source = editor.value;
    if (checked) {
      checked = false;
    }
  }

  function handleTab(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.value =
        editor.value.substring(0, start) + "    " + editor.value.substring(end);
      editor.selectionStart = editor.selectionEnd = start + 4;
      source = editor.value;
    }
  }

  async function run() {
    running = true;
    output = "Menjalankan...";
    checked = false;
    try {
      const res = await fetch("https://play.rust-lang.org/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          channel: "stable",
          mode: "debug",
          edition: "2021",
          code: source,
        }),
      });
      const data = await res.json();
      let result = "";
      if (data.stderr) result += data.stderr;
      if (data.stdout) result += data.stdout;
      output = result || "Tidak ada output.";
    } catch (e) {
      output = `Error: ${e.message}`;
    }
    running = false;
  }

  function check() {
    const trimmed = output.trim();
    passed = trimmed === expected.trim();
    checked = true;
  }
</script>

<div class="runner">
  <textarea
    bind:this={editor}
    lang="rust"
    spellcheck="false"
    oninput={handleInput}
    onkeydown={handleTab}
    placeholder={placeholder}
  >{code}</textarea>

  <div class="controls">
    <button class="run-btn" onclick={run} disabled={running}>
      {running ? "▶ Menjalankan..." : "▶ Run"}
    </button>
    {#if expected}
      <button class="check-btn" onclick={check} disabled={!output || output === "Menjalankan..."}>
        ✓ Periksa
      </button>
    {/if}
    {#if checked}
      <span class="result {passed ? 'pass' : 'fail'}">
        {passed ? "✅ Benar!" : "❌ Coba lagi"}
      </span>
    {/if}
  </div>

  {#if output}
    <pre class="output">{output}</pre>
  {/if}
</div>

<style>
  .runner {
    border: 1px solid var(--sl-color-gray-5);
    border-radius: 8px;
    overflow: hidden;
    background: var(--sl-color-bg-nav);
  }
  textarea {
    width: 100%;
    border: none;
    background: var(--sl-color-bg-inline-code);
    color: var(--sl-color-text);
    font-family: var(--sl-font-mono);
    font-size: 0.9rem;
    padding: 1rem;
    resize: vertical;
    outline: none;
    tab-size: 4;
  }
  .controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-top: 1px solid var(--sl-color-gray-5);
  }
  button {
    font-family: var(--sl-font);
    font-size: 0.85rem;
    padding: 0.4rem 0.9rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: opacity 0.15s;
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .run-btn {
    background: var(--sl-color-accent);
    color: #fff;
  }
  .check-btn {
    background: var(--sl-color-gray-5);
    color: var(--sl-color-text);
  }
  .result {
    font-size: 0.85rem;
    font-weight: 500;
  }
  .pass {
    color: #a6e3a1;
  }
  .fail {
    color: #f38ba8;
  }
  .output {
    margin: 0;
    padding: 1rem;
    background: var(--sl-color-black);
    color: var(--sl-color-text);
    font-family: var(--sl-font-mono);
    font-size: 0.85rem;
    border-top: 1px solid var(--sl-color-gray-5);
    white-space: pre-wrap;
    overflow-x: auto;
  }
</style>
