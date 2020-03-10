
<script>
  import Container from "./Container.svelte";

  const newsletterSignupLink = "https://cdn.forms-content.sg-form.com/1e965d7f-62a1-11ea-b917-aa5a30c70ab5";
</script>
<style>
  footer {
    background-color: #111;
    padding: 4em 0;
    text-transform: lowercase;
  }
</style>

<footer>
  <Container>
     <nav>
      <a href={newsletterSignupLink} target="_blank">subscribe by email</a>
     </nav>
  </Container>
</footer>