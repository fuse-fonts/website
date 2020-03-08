<script>
  import Hero from "../components/Hero.svelte";

  let overviewEl = null;

  function scrollOverViewIntoView() {
    if (overviewEl === null) return;

    overviewEl.scrollIntoView({ behavior: "smooth" });
  }
</script>

<style>

</style>

<svelte:head>
  <title>Fuse Fonts</title>
</svelte:head>

<Hero on:learn-more={scrollOverViewIntoView} />

<section class="overview" id="overview" bind:this={overviewEl}>
  <h2>How it works</h2>
</section>
