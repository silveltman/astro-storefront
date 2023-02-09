<script lang="ts">
  import site from '@data/site.yaml'

  // config props
  export let variant: 'full' | 'square' = 'square'
  let className = ''
  export { className as class }
  export let href: string = ''
</script>

<svelte:element
  this={href ? 'a' : 'div'}
  {href}
  class="flex items-center h-8 {className}"
>
  <img
    class="w-auto h-full"
    src={site.logo[variant].src}
    alt={site.logo[variant].alt}
  />
</svelte:element>
