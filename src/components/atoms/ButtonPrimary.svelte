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
  class="text-center rounded-full font-medium shadow-md shadow-neutral-500/10

    {disabled && '!pointer-events-none !opacity-50 !bg-neutral'}

    {size === 'sm' && 'text-sm h-8 px-4'}
    {size === 'md' && 'text-base h-11 px-6'}
    {size === 'lg' && 'text-lg h-14 px-8'}

    {color == 'primary' &&
    'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-700'}
    {color == 'secondary' &&
    'bg-secondary-600 text-white hover:bg-secondary-700'}
    {color == 'black' && 'bg-neutral-900 text-white hover:bg-neutral-800'}
    {color == 'white' && 'bg-white text-black hover:bg-neutral-100'}

    {className}
    "
  {...$$restProps}
>
  {text}
</svelte:element>
