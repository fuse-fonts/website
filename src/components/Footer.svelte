<script>
  import Container from "./Container.svelte";
  import {
    sendGridSignupURL,
    contactEmailAddress,
    supportEmailAddress
  } from "../routes/_config.js";

  import Logo from "./Logo.svelte";
</script>

<style>
  footer {
    background-color: #111;
    padding: 4rem 2em 0rem 2rem;
    font-size: 0.8em;
  }

  nav {
    display: flex;
    justify-content: space-evenly;
  }

  .muted {
    color: #888;
  }

  h4 {
    font-weight: 600;
    margin-bottom: 1em;
  }

  .logo-container {
    margin-top: 1em;
    text-align: center;
  }

  .logo-container .open-source {
    color: #bbb;
    display: inline-block;
    margin: 1em auto;
  }
</style>

<footer>

  <nav>
    <div>
      <h4>News</h4>
      <p>
        <a href={sendGridSignupURL} target="_blank">Email Updates</a>
        <br />
        <span class="muted">
          Subscribe to Fuse Fonts product updates and special offers
        </span>
      </p>
    </div>

    <div>
      <h4>Contact</h4>
      <p>
        <a href={`mailto:${contactEmailAddress}`} target="_blank">
          {contactEmailAddress}
        </a>
        <br />
        <a href={`mailto:${supportEmailAddress}`} target="_blank">
          {supportEmailAddress}
        </a>
      </p>
    </div>

  </nav>

  <div class="logo-container">
    <Logo />
    <p>
      ❤
      <a class="open-source" href="https://github.com/fuse-fonts/website" target="_blank">
        Open Source
      </a>
    </p>
  </div>

</footer>
