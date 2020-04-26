<script>
  import Container from "./Container.svelte";
  import {
    sendGridSignupURL,
    contactEmailAddress,
    supportEmailAddress,
    facebookURL,
    instagramURL,
    githubURL,
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

  .link-item {
    display: block;
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
        <a class="link-item" href={sendGridSignupURL} target="_blank">Email Updates</a>
        <span class="muted">
          Subscribe to Fuse Fonts product updates and special offers
        </span>
      </p>
    </div>

    <div>
      <h4>Contact</h4>
      <p>
        <a class="link-item" href={`mailto:${contactEmailAddress}`} target="_blank" rel="noopener">
          {contactEmailAddress}
        </a>
        <a class="link-item" href={`mailto:${supportEmailAddress}`} target="_blank" rel="noopener">
          {supportEmailAddress}
        </a>
      </p>
    </div>
    <div>
      <h4>Social</h4>
      <p>
        <a href={facebookURL} class="link-item" target="_blank" rel="noopener" >Facebook</a>
        <a href={instagramURL} class="link-item" target="_blank" rel="noopener" >Instagram</a>
        <a href={githubURL} class="link-item" target="_blank" rel="noopener" >Github</a>
      </p>
    </div>
  </nav>

  <div class="logo-container">
    <Logo />
    <p>
      ❤
      <a class="open-source" href={githubURL} rel="noopener" target="_blank">
        Open Source
      </a>
    </p>
  </div>

</footer>
