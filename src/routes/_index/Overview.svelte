<script>
  import Container from "../../components/Container.svelte";

  let overviewEl = null;
</script>

<style>
  .overview {
    background-color: var(--secondary-background-color);
    padding: 15vh 0;
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
</style>

<section class="overview" id="overview" bind:this={overviewEl}>
  <Container>
    <h2 class="h2">Overview</h2>
    <div class="two-columns">
      <div class="content-block">
        <h3 class="h3">
          What is <span class="accent">Fuse Fonts</span>?
        </h3>
        <p>
          Fuse Fonts is an Adobe Photoshop panel, meaning it’s integrated into
          Photoshop. Install it, enable the panel in Photoshop, then and start
          organizing your fonts.
        </p>
      </div>
      <div class="content-block">
        <h3 class="h3">How is it used?</h3>
        <p>
          Create a group, name it, and drag some fonts into it.
          <br />
          The simple and intuitive interface will help you stay organized
          however you like.
        </p>
      </div>

    </div>
    <div class="content-block">
      <h3 class="h3">Why?</h3>
      <p>
        Fuse Fonts is designed to solve one problem with a simple solution. By
        <em>designing for simplicity</em>
        , it makes working with fonts in Photoshop easier and more productive.
        Too often software is bloated, hard-to-use, or is harvesting your data
        for profit. We're against all of that.
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
