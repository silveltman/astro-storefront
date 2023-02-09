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
  class="text-center rounded-full font-medium border

    {disabled && '!pointer-events-none !opacity-50 !border-neutral'}
          
    {size === 'sm' && 'text-sm h-8 px-4'}
    {size === 'md' && 'text-base h-11 px-6'}
    {size === 'lg' && 'text-lg h-14 px-8'}

    {color == 'primary' &&
    'text-primary-800 hover:bg-primary/5 border-primary-800'}
    {color == 'secondary' &&
    'text-secondary-800 hover:bg-secondary/5 border-secondary-800'}
    {color == 'black' &&
    'text-neutral-900 hover:bg-neutral-900/5 border-neutral-900'}
    {color == 'white' && 'text-white hover:bg-white/5 border-white'}

    {className}
  "
  {...$$restProps}
>
  {text}
</svelte:element>
