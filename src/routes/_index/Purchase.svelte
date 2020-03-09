<script>
  import Container from "../../components/Container.svelte";
  let purchaseEl = null;
</script>

<style>

  .purchase {
    padding: 15vh 0;
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
    min-height: 20em;
    justify-content: space-between;
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
    width: 12em;
    margin: 0 auto;
  }

  .option h3 {
    font-weight: 200;
    color: #000;
    font-size: 1.6em;
  }

  @media (min-width: 56em) {
    .purchase .option {
      width: 22.5em;
    }
  }
</style>


<section class="purchase" id="purchase" bind:this={purchaseEl}>
  <Container>
    <h2 class="h2">Purchase Fuse Fonts</h2>

    <div class="purchase-options">
      <div class="option">
        <header>
          <h3>Creative Market</h3>
        </header>

        <ul>
          <li>Free Updates</li>
          <li>Email Support</li>
          <li>Manually Updated</li>
        </ul>
        <footer>
          <a href="" class="btn-link btn-link--buy">Buy on Creative Market</a>
        </footer>
      </div>

      <div class="option">
        <header>
          <h3>Adobe Marketplace</h3>
        </header>
        <ul>
          <li>Free Updates</li>
          <li>Email Support</li>
          <li>Automatically Updates</li>
        </ul>
        <footer>
          <a href="https://exchange.adobe.com/creativecloud.html" target="_blank" class="btn-link btn-link--buy">Buy on Adobe Marketplace</a>
        </footer>
      </div>
    </div>
  </Container>
</section>
