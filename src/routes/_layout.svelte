<script>
  import {  beforeUpdate, onMount, setContext } from "svelte";

  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
  let logPageView = () => {};
  let logPurchaseOption = () => {};

  beforeUpdate(() => {
    logPageView(segment);
  });

  onMount(async () => {
    const module = await import("../client/analytics.js");
    logPageView = module.logPageView;
    logPageView(segment); // initial pageview
    logPurchaseOption = module.logPurchaseOption;

  });

  setContext("logPurchaseOption", () => logPurchaseOption);


</script>

<style>
  main {
    padding: 2em 0;
    min-height: 100vh;
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

<Footer />