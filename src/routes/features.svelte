<script>
  import Container from "../components/Container.svelte";
</script>

<style>
  .content-block {
    margin: 2em auto;
  }

  .spacer {
    display: inline-block;
    margin: 0 1em;
  }
</style>

<svelte:head>
  <title>Features</title>
</svelte:head>

<Container>
  <h1>Features</h1>
  <h2>You can use Fuse Fonts to&hellip;</h2>
  <ul>
    <li>Create, Edit, and Delete Groups</li>
    <li>Select one or many Fonts or Typefaces</li>
    <li>Drag-and-Drop to add Fonts to a Group</li>
    <li>Apply Selected font to current text layer</li>
    <li>Preview Fonts and Typefaces</li>
    <li>List View and Grid View</li>
    <li>Matches Photoshop Theme</li>
    <li>Search and Filter fonts via “fuzzy searching”</li>
    <li>Wide and Narrow Screen Support</li>
    <li>Re-sizable panes and text sizes</li>
    <li>Clear your data anytime</li>
  </ul>
  <div class="content-block">
    <h2>What Fuse Fonts doesn't do&hellip;</h2>

    <ul>
      <li>Change your system fonts</li>
      <li>Change your system folders</li>
      <li>Change Fonts within Photoshop</li>
      <li>
        Fine-grained control over fonts. The Character Panel already does that
      </li>
    </ul>
  </div>

  <div class="content-block">

    <h2>Want to learn how to use these features?</h2>
    <p class="content-block">
      <a href="/#purchase" class="btn-link--buy">Buy Fuse Fonts</a>
      <span class="spacer">and then</span>
      <a href="learn/" class="btn-link">Learn to use Fuse Fonts</a>
    </p>
  </div>
</Container>
