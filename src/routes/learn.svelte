<script>
  
  import Container from "../components/Container.svelte";
  import HelpDefinition from "../components/HelpDefinition.svelte";
  import InstructionVideo from "../components/InstructionVideo.svelte";

  import instructions from "./_learn.js";
  import { cdnURL } from "./_config.js";

  let collapsed = true;

  function expandAll() {
    collapsed = false;
  }

  function collapseAll() {
    collapsed = true;
  }
</script>

<style>

  .help-defs {
    list-style: none;
    padding: 0 0;
    margin: 1em 0em;
  }

  p {
    margin-bottom: 1em;
  }

  .btn {
    font-size: 0.65em;
    padding: 0.5em 1.5em;
    border: none;
    background: #111;
    margin-right: 0.5em;
    color: #ddd;
    cursor: pointer;
    text-transform: uppercase;
  }

  .two-columns {
    display: flex;
    justify-content: space-between;
  }
</style>

<svelte:head>
  <title>Learn</title>
</svelte:head>

<Container>
  <h1>Learn</h1>
  <p class="content-block">
    Below, there are instructions and steps for using Fuse Fonts effectively.
    <br />
    Note that Fuse Fonts aims to be simple to use. But, if you ever need to learn or remember how to do something, check here first!
  </p>

  <div class="two-columns">
    <h2>How do I&hellip;</h2>

    <div class="actions">
      <button class="btn" on:click={expandAll}>Expand All</button>
      <button class="btn" on:click={collapseAll}>Collapse All</button>
    </div>
  </div>

  <div class="content-block">
    <ul class="help-defs">
      {#each instructions as instruction (instruction.title)}
        <li>
          <HelpDefinition title={instruction.title} {collapsed}>
            {#each instruction.paragraphs as paragraph}
              <p>
                {@html paragraph}
              </p>
            {/each}

            <div slot="video">
              {#if instruction.video}
                <InstructionVideo url={`${cdnURL}/learn/${instruction.video}`} title={`Watch how to ${instruction.title}`} />
              {/if}
            </div>
          </HelpDefinition>
        </li>
      {/each}
    </ul>
  </div>

</Container>
