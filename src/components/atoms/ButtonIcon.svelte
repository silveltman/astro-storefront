<script lang="ts">
  import Icon from '@components/atoms/Icon.svelte'

  // config props
  export let size: 'sm' | 'md' | 'lg' = 'md'
  export let color: 'primary' | 'secondary' | 'black' | 'white' = 'primary'
  export let disabled: boolean = false
  let className = ''
  export { className as class }

  // icon props
  export let filled: boolean = false
  export let weight:
    | 'thin'
    | 'extralight'
    | 'light'
    | 'regular'
    | 'medium'
    | 'semibold'
    | 'bold' = 'regular'
  export let grade: 'low' | 'medium' | 'high' = 'medium'

  // content props
  export let icon: string = 'shopping_cart'
  export let text: string = ''
  export let href: string = ''
</script>

<svelte:element
  this={href ? 'a' : 'button'}
  on:click
  {href}
  {disabled}
  class="inline-flex items-center justify-center disabled focus gap-1.5 rounded-full p-2

      {disabled && '!pointer-events-none !opacity-50 !text-neutral'}

      {size === 'sm' && 'text-sm'}
      {size === 'md' && 'text-base'}
      {size === 'lg' && 'text-lg'}

      {color == 'primary' &&
    'text-primary-800 hover:bg-primary/10 border-primary-800'}
      {color == 'secondary' &&
    'text-secondary-800 hover:bg-secondary/5 border-secondary-800'}
      {color == 'black' &&
    'text-neutral-900 hover:bg-neutral-900/5 border-neutral-900'}
      {color == 'white' && 'text-white hover:bg-white/5 border-white'}

      {className}
    "
  {...$$restProps}
>
  <Icon
    name={icon}
    {size}
    {filled}
    {weight}
    {grade}
  />
  {text}
</svelte:element>
