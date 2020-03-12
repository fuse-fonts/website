<script>
  import Container from "./Container.svelte";
  import { sendGridSignupURL } from "../routes/_config.js";

    ;
</script>

<style>
  footer {
    background-color: #111;
    padding: 4rem 0;

    font-size: 0.8em;
  }
</style>

<footer>
  <Container>
    <nav>
      <a href={sendGridSignupURL} target="_blank">
        Subscribe to Fuse Fonts updates
      </a>
    </nav>
  </Container>
</footer>
