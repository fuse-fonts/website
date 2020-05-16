<script>
  import { demoURL } from "../routes/_config.js";
  import Chevron from "./icons/Chevron.svelte";
  import Logo from "./Logo.svelte";
  export let segment;
</script>

<style>
  header {
    display: block;
    width: 100%;
    padding: 0rem 1rem;
    background-color: #060b04;
  }

  nav {
    font-weight: 300;
    margin-left: auto;
  }

  ul {
    display: flex;
    justify-content: space-evenly;
  }

  li {
    display: block;
    margin: 0 0.5em;
  }

  .try-demo {
    display: none;
    position: fixed;
    right: 1.5em;
    top: 4.5em;
    float: right;
  }


  .try-demo .icon {
    display: inline-block;
    transform: translateX(0);
    transition: 0.1s ease-in transform;
    transition-delay: 0.1s;
  }
  .try-demo:hover .icon {
    transform: translateX(0.25em);
    transition-delay: 0s;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #333b33;
    display: block;
    bottom: -1px;
  }

  header a {
    color: var(--text-color);
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    text-transform: lowercase;
  }

  .logo-container {
    width: 100%;
    text-align: center;
    margin-left: -1rem;
    padding: 1.5em 0;
  }

  @media (min-width: 36em) {
    .logo-container {
      text-align: left;
      width: auto;
      padding: 0 0;
      margin: auto 1rem;
    }

    header {
      display: flex;
      position: sticky;
      top: 0;
      z-index: 2;
    }
  }

  @media (min-width: 72em) {
    .try-demo {
      display: block;
    }
  }
</style>

<header>
  <div class="logo-container">
    <Logo />
  </div>
  <nav>
    <ul>
      <li>
        <a aria-current={segment === undefined ? 'page' : undefined} href=".">
          Home
        </a>
      </li>
      <li>
        <a
          aria-current={segment === 'features' ? 'page' : undefined}
          href="features">
          Features
        </a>
      </li>
      <li>
        <a aria-current={segment === 'learn' ? 'page' : undefined} href="learn">
          Learn
        </a>
      </li>
    </ul>
  </nav>
</header>

<aside class="try-demo">
  <a target="_blank" class="btn-link btn-link--buy" href={demoURL}>
    Try Web Demo
    <span class="icon">
      <Chevron color="#000" direction="right" width="12" height="12" />
    </span>
  </a>
</aside>
