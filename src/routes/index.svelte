<script>
  import Hero from "./_index/Hero.svelte";
  import Overview from "./_index/Overview.svelte";
  import Purchase from "./_index/Purchase.svelte";
  import Container from "../components/Container.svelte";


  let overviewEl = null;
  let purchaseEl = null;

  function scrollElementIntoView(el) {
    return () => {
      if (el === null) return;
      el.scrollIntoView({ behavior: "smooth" });
    };
  }

  $: scrollOverviewIntoView = scrollElementIntoView(overviewEl);
  $: scrollPurchaseIntoView = scrollElementIntoView(purchaseEl);
</script>

<svelte:head>
  <title>Fuse Fonts</title>
</svelte:head>

<Container>
  <Hero
    on:learn-more={scrollOverviewIntoView}
    on:buy={scrollPurchaseIntoView} />
</Container>

<Overview />

<Purchase />

