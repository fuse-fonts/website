<script>
  import Container from "../components/Container.svelte";
  import { cdnURL, logoURL, promoURL } from "./_config.js";
  
</script>

<style>
  img {
    outline: 1px solid #bbb;
  }
</style>
<Container>
  <h1>Fuse Fonts Brand</h1>
  <h2>Assets</h2>

  <h4>Fuse Fonts Logo</h4>
  <p>
    <a href={logoURL} target="_blank">
      <img src={logoURL} alt="Fuse Fonts Logo" />
    </a>
  </p>

  <h4>Fuse fonts Promotional Image </h4>
    <p>
      <a href={promoURL} target="_blank">
        <img src={promoURL} alt="Fuse Fonts Promo" />
      </a>
    </p>

</Container>