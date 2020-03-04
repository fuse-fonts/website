<script>
  export let segment;

</script>

<style>

  header {
    display: flex;
    width: 100%;
    padding: 0rem 1rem;
    background-color: #000;
  }

  nav {
    font-weight: 300;
    margin-left: auto;
  }

  ul {
    display: flex;
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
  }

  .logo {
    font-weight: 800;
    text-transform: uppercase;
    margin-right: 1em;
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
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        About
      </a>
    </li>
  </ul>
</nav>

</header>
