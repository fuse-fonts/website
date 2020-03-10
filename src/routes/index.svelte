<script>
  import Hero from "./_index/Hero.svelte";
  import Overview from "./_index/Overview.svelte";
  import Purchase from "./_index/Purchase.svelte";
  import Container from "../components/Container.svelte";


  let overview = null;
  let purchase = null;

</script>

<svelte:head>
  <title>Fuse Fonts</title>
</svelte:head>

<Container>
  <Hero
    on:learn-more={() => overview.scrollIntoView()}
    on:buy={() => purchase.scrollIntoView()} />
</Container>

<Overview bind:this={overview} />

<Purchase bind:this={purchase} />

