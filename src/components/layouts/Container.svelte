<script lang="ts">
  export let element: string = 'div'
  export let maxWidth: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' = '2xl'
  export let fixed: boolean = false
  export let disablePadding:
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | false
    | true = false

  let className = ''
  export { className as class }
</script>

<svelte:element
  this={element}
  class=" 
        mx-auto px-4 sm:px-8 relative md:px-10 lg:px-16 w-full 

        {disablePadding === true && '!px-0'}
        {disablePadding == 'sm' && 'max-sm:!px-0'}
        {disablePadding == 'md' && 'max-md:!px-0'}
        {disablePadding == 'lg' && 'max-lg:!px-0'}
        {disablePadding == 'xl' && 'max-xl:!px-0'}
        {disablePadding == '2xl' && 'max-2xl:!px-0'}
        {disablePadding == '3xl' && 'max-3xl:!px-0'}

        {fixed && 'container'}

        {maxWidth == 'sm' && 'max-w-screen-sm'}
        {maxWidth == 'md' && 'max-w-screen-md'}
        {maxWidth == 'lg' && 'max-w-screen-lg'}
        {maxWidth == 'xl' && 'max-w-screen-xl'}
        {maxWidth == '2xl' && 'max-w-screen-2xl'}
        {maxWidth == '3xl' && 'max-w-screen-3xl'}

        {className}
    "
  {...$$restProps}
>
  <slot />
</svelte:element>
