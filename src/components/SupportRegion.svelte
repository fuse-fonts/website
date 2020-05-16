<script>
  import MessengerSupport from "./MessengerSupport.svelte";
  import Container from "./Container.svelte";
  export let title = "Have questions?";
  export let text;
  export let color = "#666";
  export let inline = true;


</script>

<style>
  .support-region {
    padding: 5vh 0 0 0;
    text-align: center;
  }


  h5 {
    font-size: 1.2em;
    font-weight: 200;
  }

  .inline {
    display: flex;
    text-align: left;
    align-items: center;
    flex-flow: row wrap;
    justify-content: space-between;
  }

</style>

<div class="support-region">
  <Container>
    <div class:inline>
      <slot>
        <h5 style={`color: ${color}`}>{title}</h5>
      </slot>
      <MessengerSupport {text} />
    </div>
  </Container>
</div>