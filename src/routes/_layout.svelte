<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
  }

  :global(html) {
    --background-color: #151413;
    --text-color: #f3f2f2;
    --accent-color: #f2bbaa;
  }

</style>

<Nav {segment} />

<main>
  <slot />
</main>
