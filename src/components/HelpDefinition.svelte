<script>

  import { slide } from 'svelte/transition';


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

  .toggle-icon path {
    fill: #eee;
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
  <svg class="toggle-icon" class:open={!collapsed} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="6 6 24 24"><path d="M23.12 11.12L21 9l-9 9 9 9 2.12-2.12L16.24 18z"/></svg>
</h3>

{#if !collapsed}
  <div class="help-text" transition:slide={{ duration: 200 }}>
    <slot />
  </div>
{/if}