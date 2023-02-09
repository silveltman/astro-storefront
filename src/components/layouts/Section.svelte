<script lang="ts">
  export let element: string = 'section'
  let className = ''
  export { className as class }
</script>

<svelte:element
  this={element}
  class="w-full py-24 sm:py-28 md:py-32 relative {className}"
  {...$$restProps}
>
  <slot />
</svelte:element>
