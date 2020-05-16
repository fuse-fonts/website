<script>
  import Hero from "./_index/Hero.svelte";
  import Overview from "./_index/Overview.svelte";
  import Purchase from "./_index/Purchase.svelte";
  import Container from "../components/Container.svelte";
  import OpenGraphMetaTags from "../components/OpenGraphMetaTags.svelte";
  

  import { productDescription, productionURL } from "./_config.js";

  let overview = null;
  let purchase = null;
</script>

<style>
  .maximized {
    margin-top: -2em;
    margin-bottom: -2em;
  }

</style>

<svelte:head>
  <title>Fuse Fonts</title>
  <meta name="description" content={productDescription} />
  <meta name="keywords" content="Fuse Fonts, Photoshop Plugin, font management, font plugin" />
  <meta name="url" content={productionURL} />
  <link rel="canonical" href={productionURL} />
  <OpenGraphMetaTags />

</svelte:head>

<div class="maximized">
  <Container>
    <Hero
      on:learn-more={() => overview.scrollIntoView()}
      on:buy={() => purchase.scrollIntoView()} />
  </Container>

  <Overview bind:this={overview} />

  <Purchase bind:this={purchase} />

</div>