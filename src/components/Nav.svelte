<script>
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

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: var(--accent-color);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    text-transform: lowercase;
  }

  .logo {
    font-weight: 800;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    margin-left: -1rem;
  }

  .logo::before {
    content: "";
    display: inline-block;
    width: 0.8em;
    height: 0.8em;
    margin-right: 0.5em;
    background-color: var(--accent-color);
    border-radius: 2px;
  }

  @media (min-width: 36em) {
    .logo {
      text-align: left;
      width: auto;
      margin: 0 1rem 0 0;
    }

    header {
      display: flex;
    }
  }
</style>

<header>
  <div class="logo-container">
    <a class="logo" href=".">Fuse Fonts</a>
  </div>
  <nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        Home
      </a>
    </li>
    <li>
      <a aria-current={segment === 'features' ? 'page' : undefined} href="features">
        Features
      </a>
    </li>
    <li>
      <a aria-current={segment === 'learn' ? 'page' : undefined} href="about">
        Learn
      </a>
    </li>
  </ul>
</nav>

</header>
