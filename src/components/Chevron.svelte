<script>
  export let color = "#eee";
  export let width = 24;
  export let height = 24;
  export let viewBox = "6 6 24 24"
  export let direction = "left";
</script>

<style>
  .right {
    transform: rotate(180deg);
  }
</style>

<svg xmlns="http://www.w3.org/2000/svg"
  {width} {height} {viewBox} class:right={direction === "right"}>
  <path fill={color} d="M23.12 11.12L21 9l-9 9 9 9 2.12-2.12L16.24 18z" />
</svg>
