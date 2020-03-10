<script>
  import Container from "./Container.svelte";

  const newsletterSignupLink =
    "https://cdn.forms-content.sg-form.com/1e965d7f-62a1-11ea-b917-aa5a30c70ab5";
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
      <a href={newsletterSignupLink} target="_blank">
        Subscribe to Fuse Fonts updates
      </a>
    </nav>
  </Container>
</footer>
