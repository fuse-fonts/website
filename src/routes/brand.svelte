<script>
  import Container from "../components/Container.svelte";
  import { cdnURL, logoURL, promoURL } from "./_config.js";
  
</script>

<style>
  img {
    outline: 1px solid #bbb;
  }
</style>

<svelte:head>
  <title>Brand & Assets</title>
</svelte:head>

<Container>
  <h1>Brand & Assets</h1>
  <p>Below are Fuse Fonts' Brand Assets. They're CDN hosted so feel free to link them directly.</p>
  
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