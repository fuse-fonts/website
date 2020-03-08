<script>
  import Hero from "../components/Hero.svelte";
  import Container from "../components/Container.svelte";

  let overviewEl = null;
  let purchaseEl = null;

  function scrollElementIntoView(el) {
    return () => {
      if (el === null) return;
      el.scrollIntoView({ behavior: "smooth" });
    }
  }

  $: scrollOverviewIntoView = scrollElementIntoView(overviewEl);
  $: scrollPurchaseIntoView = scrollElementIntoView(purchaseEl);

</script>

<style>
  h2 {
    font-weight: 600;
    font-size: 2.8em;
  }

  h3 {
    font-weight: 600;
    font-size: 1.8em;
  }

  p {
    margin-bottom: 1em;
  }

  .overview {
    background-color: var(--secondary-background-color);
    padding: 15vh 0;
  }

  .purchase {
    padding: 15vh 0;
    background-color: #cacfcc;
    color: #333;
  }

  @media (min-width: 56em) {
  .two-columns {
      display: flex;
      justify-content: space-between;
    }

    .two-columns .content-block {
      max-width: 24.5em;
      margin-bottom: 1em;
      margin-right: 1em;
    }

    .two-columns .content-block:last-child {
      margin-right: 0em;
    }
  }

  .content-block {
    margin: 2em 0;
  }
</style>

<svelte:head>
  <title>Fuse Fonts</title>
</svelte:head>

<Container>
  <Hero on:learn-more={scrollOverviewIntoView} on:buy={scrollPurchaseIntoView} />
</Container>

<section class="overview" id="overview" bind:this={overviewEl}>
  <Container>
    <h2>Overview</h2>
    <div class="two-columns">
      <div class="content-block">
        <h3>What is <span class="accent">Fuse Fonts</span>?</h3>
        <p>
          Fuse Fonts is an Adobe Photoshop panel, meaning it’s integrated into Photoshop. Install it, enable the panel in Photoshop, then and start organizing your fonts.
        </p>
      </div>
      <div class="content-block">
        <h3>How is it used?</h3>
        <p>
          Create a group, name it, and drag some fonts into it.<br />
          The simple and intuitive interface will help you stay organized however you like.
        </p>
      </div>

    </div>
    <div class="content-block">
      <h3>Why?</h3>
      <p>
        Fuse Fonts is designed to solve one problem with a simple solution. By <em>designing for simplicity</em>, it makes working with fonts in Photoshop easier and more productive. Too often software is bloated, hard-to-use, or is harvesting your data for profit. We're against all of that.
      </p>
      <p>
        Whether you’re a design agency or freelancer with many clients, or
        keeping track of campaigns and projects as an enterprise designer, Fuse
        Fonts will keep you more organized, and productive.
      </p>
      <p class="accent">
        <a href="features">Learn about Fuse Fonts features</a>
      </p>
    </div>
  </Container>
</section>

<section class="purchase" id="purchase" bind:this={purchaseEl}>
  <Container>
    <h2>Purchase Fuse Fonts</h2>

    <div class="purchase-options">
      <div class="option">
        <h4>Creative Market</h4>
        <ul>
          <li>Free Updates</li>
          <li>Manually update whenever you want</li>
          <li>Email Support</li>
        </ul>
        <a href="">Buy on Creative Market</a>
      </div>
      <div class="option">
        <h4>Adobe Marketplace</h4>
        <ul>
          <li>Free Updates</li>
          <li>Automatic Updates</li>
          <li>Email Support</li>
        </ul>
        <a href="">Buy on Adobe Marketplace</a>
      </div>
    </div>
  </Container>
</section>
