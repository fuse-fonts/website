<script>
import { sendGridSignupURL } from "../_config.js";
</script>

<style>
  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 800;
    margin: 0 0 0.5rem 0;
  }

  .description {
    font-size: 1.6em;
    font-weight: 200;
    line-height: 1.6em;
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
    min-height: 92vh;
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    margin-top: -2em;
  }

  .hero nav {
    padding-top: 1em;
    margin-top: 1em;
  }

  @media (min-width: 56em) {
    h1 {
      font-size: 3.6em;
    }
  }
</style>

<section class="hero">
  <h1 class="logo">Fuse Fonts</h1>
  <p class="description">Organize your fonts into simple collections within Adobe Photoshop</p>
  <nav class="hero-actions">
    <p>Coming Soon.</p>
    <a class="btn-link" href="features">Subscribe to Updates</a>
  </nav>
</section>
