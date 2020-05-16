<script>
  import { messengerURL } from "../routes/_config.js";
  import Messenger from "./icons/Messenger.svelte";
  export let text = "Send us a Message";
  export let iconSize = 24;

</script>
<style>

  .messenger-support {
    display: block;
    padding: 0.25em 0;
    --messenger-color: #00B2ff;
    --messenger-lower-color: #006AFF;
  }

  .messenger-support:hover {
    background-color: var(--messenger-gradient);
  }

  .messenger-support a {
    color: var(--messenger-color);
    border: 1px solid var(--messenger-color);
    display: inline-block;
    padding: 0.75em 1em;
    border-radius: 6px;
    transition: 0.2s ease-in all;
  }

  .messenger-support a:hover {
    --messenger-color: var(--messenger-lower-color);
    text-decoration: none;
  }

  .items {
    display: flex;
    align-items: center;
  }

  .message {
    margin: 0 1em 0 0;
  }
</style>

<aside class="messenger-support">
  <a href={messengerURL} target="_blank">
    <div class="items">
      <p class="message">
        <slot>
          {text}
        </slot>
      </p>
      <Messenger width={iconSize} height={iconSize} />
    </div>
  </a>
</aside>