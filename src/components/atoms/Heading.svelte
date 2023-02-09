<script lang="ts">
  // maps
  const sizeMap = {
    h1: '3xl',
    h2: '2xl',
    h3: 'xl',
    h4: 'lg',
    h5: 'md',
    h6: 'sm',
    span: 'xs',
    p: 'xs',
  }
  const getSize = (element: string) => {
    return sizeMap[element]
  }

  // config props
  export let element: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'string' = 'h1'
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' =
    getSize(element)
  let className = ''
  export { className as class }
</script>

<svelte:element
  this={element}
  class="leading-tight

    {size === '3xl' && 'font-bold text-4xl sm:text-5xl md:text-6xl text-black'}
    {size === '2xl' && 'font-bold text-3xl sm:text-4xl text-black'}
    {size === 'xl' && 'font-bold text-2xl sm:text-3xl text-black'}

    {size === 'lg' && 'font-semibold text-xl text-neutral-800'}
    {size === 'md' && 'font-semibold text-lg text-neutral-800'}
    {size === 'sm' && 'font-medium text-md text-neutral-800'}
    {size === 'xs' && 'font-medium text-sm text-neutral-800'}
    
    {className}
    "
  {...$$restProps}
>
  <slot />
</svelte:element>
