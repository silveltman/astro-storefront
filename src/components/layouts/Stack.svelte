<script lang="ts">
  export let element: string = 'div'
  export let gap: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none' = 'md'
  let className = ''
  export { className as class }
</script>

<svelte:element
  this={element}
  class="flex flex-col   
    {gap == 'xs' && 'gap-y-xs'}
    {gap == 'sm' && 'gap-y-sm'}
    {gap == 'md' && 'gap-y-base'}
    {gap == 'lg' && 'gap-y-lg'}
    {gap == 'xl' && 'gap-y-xl'}
    {gap == '2xl' && 'gap-y-2xl'}
  
    {className}
    "
  {...$$restProps}
>
  <slot />
</svelte:element>
