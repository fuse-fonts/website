<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    padding: 2em 0;
  }


  :global(html) {
    --background-color: #1e1e1e;
    --text-color: #f3f2f2;
    --accent-color: #ffcf00;
  }

  :global(.accent) {
    color: var(--accent-color);
  }

</style>

<Nav {segment} />

<main>
  <slot />
</main>
