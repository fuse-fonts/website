<style>
  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 800;
    margin: 0 0 0.5rem 0;
  }

  .logo {
    font-weight: 800;
    text-transform: uppercase;
    width: 100%;
    margin-left: -0rem;
  }

  .logo::before {
    content: "";
    display: inline-block;
    width: 0.7em;
    height: 0.7em;
    margin-right: 0.25em;
    background-color: var(--accent-color);
    border-radius: 2px;
  }

  .hero {
    padding: 10vh 0;
  }

  .btn-link {
    display: inline-block;
    background: transparent;
    border: 1px solid #b2b2b2;
    padding: 0.5em 1.5em;
    color: #ddd;
    text-decoration: none;
    font-size: 1em;
    line-height: 1.6em;
    cursor: pointer;
    border-radius: 3px;
  }

  .btn-link:hover {
    background-color: #332;
  }

  .btn-link + .btn-link {
    margin-left: 0.5em;
  }

  .btn-link--buy {
    padding: 0.5em 1em;
    background: var(--accent-color);
    color: #222;
    border: 1px solid var(--accent-color);
    border-radius: 3px;
    transition: 0.1s ease-out all;
    transform: scale(1);
  }

  .btn-link:active {
    transform: scale(0.98);
  }

  .btn-link--buy:hover {
    background-color: #ffd941;
    color: #000;
  }

  .hero nav {
    padding-top: 1em;
    margin-top: 1em;
  }

  @media (min-width: 56em) {
    h1 {
      font-size: 3.6em;
    }

    .hero {
      padding: 25vh 0 45vh 0;
    }
  }
</style>

<section class="hero">
  <h1 class="logo">Fuse Fonts</h1>
  <h2>Organize your fonts into simple collections within Adobe Photoshop.</h2>
  <nav class="hero-actions">
    <button class="btn-link btn-link--buy">Buy</button>
    <button class="btn-link" on:click={learnMoreClicked}>Learn More</button>
    <a class="btn-link" href="features">Features</a>
  </nav>
</section>

<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function learnMoreClicked() {
    dispatch("learn-more");
  }

</script>
