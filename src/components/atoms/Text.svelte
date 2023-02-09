<script lang="ts">
  export let theme: 'dark' | 'light' = 'light'
  export let element: 'p' | 'string' = 'p'
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md'
  let className = ''
  export { className as class }
</script>

<svelte:element
  this={element}
  class="leading-relaxed

      {theme === 'light' && 'text-neutral-500'}
      {theme === 'dark' && 'text-neutral-300'}
  
      {size === 'xl' && 'text-xl'}
      {size === 'lg' && 'text-lg'}
      {size === 'md' && 'text-base'}
      {size === 'sm' && 'text-sm '}
      {size === 'xs' && 'text-xs'}

      {className}
      "
  {...$$restProps}
>
  <slot />
</svelte:element>
