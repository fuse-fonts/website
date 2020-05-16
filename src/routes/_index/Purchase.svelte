<script>
  import { getContext } from "svelte";
  import Container from "../../components/Container.svelte";
  import SupportRegion from "../../components/SupportRegion.svelte";
  import { contactEmailAddress, creativeMarketPrice, adobeExchangePrice, sendGridSignupURL, storeURLs  } from "../_config.js";

  let el = null;

  export const scrollIntoView = () => {
    if (el === null) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

const getLogPurchaseOption = getContext("logPurchaseOption");

const storeLinkClicked = (e) => {

  const linkClicked = e.currentTarget.href;
  const item = Object.keys(storeURLs).find(key => storeURLs[key] === linkClicked);

  if (!item || !linkClicked) return;
  const logPurchaseOption = getLogPurchaseOption();
  logPurchaseOption(item);
};
</script>

<style>

  .price {
    font-size: 3.6em;
    line-height: 1.6em;
    margin-bottom: 1rem;
  }

  .price::before {
    content: "$";
    font-size: 0.5em;
    vertical-align: super;
  }

  .price::after {
    content: "USD";
    font-size: 0.25em;
    margin-left: 0.5em;
    line-height: 2em;
    color: #666;
  }

  .purchase {
    padding: 1em 0;
    min-height: 92vh;
    display: flex;
    justify-content: center;
    flex-flow: column nowrap;
    background-color: #cacfcc;
    color: #333;
  }

  .purchase-options {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .purchase .option {
    border: 1px solid #c0c0c0;
    border-radius: 6px;
    margin: 1em 0;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: top;
  }

  .purchase .option footer {
    padding: 1em 1em;
    border-top: 1px solid #c0c0c0;
    text-align: center;
  }


  .purchase .option header {
    padding: 1em 1em;
    text-align: center;
    border-bottom: 1px solid #c0c0c0;
  }

  .purchase .option ul {
    text-align: center;
    list-style: none;
    margin: 1em auto;
  }

  .option h3 {
    font-weight: 200;
    color: #000;
    font-size: 1.6em;
    margin: 0 0;
  }


  @media (min-width: 56em) {
    .purchase .option {
      width: 22.5em;
    }
  }
</style>


<section class="purchase" id="purchase" bind:this={el}>
  <Container>
    <h2 class="h2">Purchase Fuse Fonts</h2>

    <div class="purchase-options">

      <div class="option">
        <header>
          <h3>Adobe Marketplace</h3>
        </header>
        <ul>
          <li class="price">{adobeExchangePrice}</li>
          <li>Individual License / 4 Devices</li>
          <li>Email & Chat Support</li>
          <li>Full Features</li>
          <li>Free Updates</li>
          <li>Automatically Updates via Creative Cloud</li>
        </ul>
        <footer>
          <a href={storeURLs.ADOBE_EXCHANGE}
             on:click={storeLinkClicked}
             target="_blank"
             class="btn-link btn-link--buy">Buy on Adobe Marketplace</a>
        </footer>
      </div>

      <div class="option">
        <header>
          <h3>Creative Market</h3>
        </header>

        <ul>
          <li class="price">{creativeMarketPrice}</li>
          <li>Personal License / Unlimited Devices</li>
          <li>Email & Chat Support</li>
          <li>Full Features</li>
          <li>Free Updates</li>
          <li>Manual Updates, Self-installer</li>
        </ul>
        <footer>
          <a href={storeURLs.CREATIVE_MARKET}
             on:click={storeLinkClicked}
             target="_blank"
             class="btn-link btn-link--buy">Buy on Creative Market</a>
        </footer>
      </div>
    </div>

    <SupportRegion inline={false} />

  </Container>
</section>
