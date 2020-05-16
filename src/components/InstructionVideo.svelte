<script>
  import PlayIcon from "./icons/PlayIcon.svelte";
  import { fade } from "svelte/transition";

  export let url = "";
  export let title = "";
  export let showVideo = false;

  const toggleVideo = () => (showVideo = !showVideo);
</script>

<style>
  .video-container {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .video-action {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    padding: 2em 2em;
    color: var(--accent-color);
    line-height: 2em;
  }

  .video-actions {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .instructions-video {
    margin-top: 2em;
  }
</style>

<div class="instructions-video">
  {#if showVideo}
    <div class="video-container" in:fade={{ duration: 1000 }}>
      <video controls width="100%" autoplay loop="loop">
        <source src={url} type="video/mp4" />
        Your device doesn't support this video type.
      </video>
    </div>
  {:else}
    <div class="video-actions">
      <button type="button" class="video-action btn-link" on:click={toggleVideo}>
        <PlayIcon color="var(--accent-color)" /> {title}
      </button>
      <a class="video-action btn-link" href={url} target="_blank">Watch in new tab</a>
    </div>
  {/if}
</div>
