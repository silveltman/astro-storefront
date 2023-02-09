<script lang="ts">
  // config props
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let color: 'primary' | 'secondary' | 'black' | 'white' = 'primary'
  export let disabled: boolean = false
  let className = ''
  export { className as class }

  // content props
  export let text: string = 'Click me'
  export let href: string = ''
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  on:click
  {href}
  {disabled}
  class="font-medium gap-xs rounded-md hover:underline
  
      {disabled && '!pointer-events-none !opacity-50 !text-neutral'}
            
      {size === 'sm' && 'text-sm'}
      {size === 'md' && 'text-base'}
      {size === 'lg' && 'text-lg'}
  
      {color == 'primary' && 'text-primary-800'}
      {color == 'secondary' && 'text-secondary-800'}
      {color == 'black' && 'text-neutral-900'}
      {color == 'white' && 'text-white'}
  
      {className}
    "
  {...$$restProps}
>
  {text}
</svelte:element>
