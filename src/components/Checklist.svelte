<script>
  import { onMount } from "svelte";

  let { id, items = [] } = $props();

  let checked = $state({});
  let hydrated = $state(false);

  const storageKey = $derived(`checklist:${id}`);

  onMount(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) checked = JSON.parse(raw);
    } catch {}
    hydrated = true;
  });

  $effect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {}
  });

  function reset() {
    checked = {};
  }
</script>

<div class="checklist">
  <div class="header">
    <span class="progress">
      {Object.values(checked).filter(Boolean).length} / {items.length} selesai
    </span>
    <button type="button" class="reset" onclick={reset} disabled={Object.values(checked).every((v) => !v)}>
      Reset
    </button>
  </div>
  <ul>
    {#each items as item, i}
      {@const k = String(i)}
      <li>
        <label>
          <input
            type="checkbox"
            checked={!!checked[k]}
            onchange={(e) => (checked = { ...checked, [k]: e.currentTarget.checked })}
          />
          <span class:checked={checked[k]}>{item}</span>
        </label>
      </li>
    {/each}
  </ul>
</div>

<style>
  .checklist {
    border: 1px solid var(--sl-color-gray-5);
    border-radius: 8px;
    padding: 1rem 1.25rem;
    background: var(--sl-color-bg-nav);
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }
  .progress {
    font-size: 0.85rem;
    color: var(--sl-color-text-accent);
    font-weight: 500;
  }
  .reset {
    font-family: var(--sl-font);
    font-size: 0.8rem;
    padding: 0.3rem 0.7rem;
    background: transparent;
    color: var(--sl-color-text);
    border: 1px solid var(--sl-color-gray-5);
    border-radius: 6px;
    cursor: pointer;
  }
  .reset:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .reset:not(:disabled):hover {
    border-color: var(--sl-color-accent);
    color: var(--sl-color-accent);
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin: 0.35rem 0;
  }
  label {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    cursor: pointer;
    line-height: 1.5;
  }
  input[type="checkbox"] {
    margin: 0;
    flex-shrink: 0;
    accent-color: var(--sl-color-accent);
    cursor: pointer;
  }
  .checked {
    text-decoration: line-through;
    color: var(--sl-color-gray-3);
  }
</style>
