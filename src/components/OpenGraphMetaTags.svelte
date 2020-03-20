<script>
  import { productDescription, productionURL, logoURL } from "../routes/_config.js";
</script>

<meta property="og:title" content="Fuse Fonts" />
<meta property="og:site_name" content="Fuse Fonts" />
<meta property="og:url" content={productionURL} />
<meta property="og:description" content={productDescription} />
<meta property="og:type" content="product" />
<meta property="og:image" content={logoURL} />
<slot />
