<script>
  import Hero from "../components/Hero.svelte";
  import Container from "../components/Container.svelte";

  let overviewEl = null;

  function scrollOverViewIntoView() {
    if (overviewEl === null) return;

    overviewEl.scrollIntoView({ behavior: "smooth" });
  }
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
    padding: 20vh 0;
  }

  @media (min-width: 56em) {
  .flex-columns {
      display: flex;
      justify-content: space-between;
    }

    .flex-columns .content-block {
      max-width: 24.5em;
      margin-bottom: 1em;
      margin-right: 1em;
    }

    .flex-columns .content-block:last-child {
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
  <Hero on:learn-more={scrollOverViewIntoView} />
</Container>

<section class="overview" id="overview" bind:this={overviewEl}>
  <Container>
    <h2>Overview</h2>
    <div class="flex-columns">
      <div class="content-block">
        <h3>What is <span class="accent">Fuse Fonts</span>?</h3>
        <p>
          Fuse Fonts is an Adobe Photoshop panel, meaning it’s integrated into Photoshop. Install it, enable the panel in Photoshop, then and start organizing your fonts.
        </p>
      </div>
      <div class="content-block">
        <h3>How is it used?</h3>
        <p>
          Create a group, name it whatever, and drag some fonts into the group.
          It's simple and intuitive interface will help you stay organized however you like.
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
