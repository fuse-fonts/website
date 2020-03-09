<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    padding-top: 2em;
  }


  :global(html) {
    --background-color: #1e1e1e;
    --secondary-background-color: #121b16;
    --text-color: #f3f2f2;
    --accent-color: #ffcf00;
  }

  :global(.accent) {
    color: var(--accent-color);
  }

  :global(.content-block) {
    margin: 2em 0;
  }

</style>

<Nav {segment} />

<main>
  <slot />
</main>
