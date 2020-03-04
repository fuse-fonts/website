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
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
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
    background-color: rgb(255, 62, 0);
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
    content: " ";
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
        home
      </a>
    </li>
    <li>
      <a aria-current={segment === 'about' ? 'page' : undefined} href="about">
        about
      </a>
    </li>
  </ul>
</nav>

</header>
