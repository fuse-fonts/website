<script>
  import Container from "./Container.svelte";
  import {
    sendGridSignupURL,
    contactEmailAddress,
    supportEmailAddress,
    facebookURL,
    instagramURL,
    githubURL
  } from "../routes/_config.js";

  import Logo from "./Logo.svelte";
</script>

<style>
  footer {
    background-color: #111;
    padding: 4rem 2em 0rem 2rem;
    font-size: 0.8em;
  }

  @media (min-width: 40em) {
    nav {
      display: flex;
      flex: 1 0 auto;
    }
  }

  .col {
    padding: 1em 1em;
    margin: 0 auto;
  }

  .muted {
    color: #888;
    font-size: 0.8em;
  }

  .footer-links {
    list-style: none;
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
    <div class="col">
      <h4>News</h4>
      <ul class="footer-links">
        <li>
          <a href={sendGridSignupURL} target="_blank">Email Updates</a>
        </li>
        <li>
          <a href="brand">Brand & Assets</a>
        </li>
      </ul>

    </div>

    <div class="col">
      <h4>Contact</h4>
      <ul class="footer-links">
        <li>
          <a href={`mailto:`} target="_blank" rel="noopener">
            {contactEmailAddress}
          </a>
        </li>
        <li>
          <a href={`mailto:`} target="_blank" rel="noopener">
            {supportEmailAddress}
          </a>
        </li>
      </ul>
    </div>
    <div class="col">
      <h4>Social</h4>
      <ul class="footer-links">
        <li>
          <a href={facebookURL} target="_blank" rel="noopener">Facebook</a>
        </li>
        <li>
          <a href={instagramURL} target="_blank" rel="noopener">Instagram</a>
        </li>
        <li>
          <a href={githubURL} target="_blank" rel="noopener">Github</a>
        </li>
      </ul>
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
