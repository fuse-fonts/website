<script>

  import { slide } from 'svelte/transition';
  import Chevron from "./icons/Chevron.svelte";


  export let collapsed = true;
  export let title = "";

  $: id = title.toLowerCase().replace(/ /gi, "-");

  function toggleCollapse() {
    collapsed = !collapsed;
  }
</script>

<style>
  .toggle-point {
    cursor: pointer;
    padding: 1em 2em;
    border-radius: 3px;
    font-weight: 200;
    position: relative;
    background-color: var(--secondary-background-color);
  }

  .toggle-icon {
    position: absolute;
    top: 1em;
    right: 1em;
    transform: rotate(0deg);
    transition: 0.1s ease-in transform;
  }

  .toggle-icon.open {
    transform: rotate(-90deg);
  }

  .help-text {
    margin: 1em 0em 1em 0em;
    padding: 1em 2em;
  }

</style>


<h3 class="toggle-point" on:click={toggleCollapse} {id}>
  {title}
  <div class="toggle-icon" class:open={!collapsed}>
    <Chevron />
  </div>
</h3>

{#if !collapsed}
  <div class="help-text" transition:slide={{ duration: 200 }}>
    <slot />
    <slot name="video" />
  </div>
{/if}