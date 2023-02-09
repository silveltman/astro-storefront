<script lang="ts">
  // config props
  export let type: string = 'text'
  export let required: boolean = false
  let className = ''
  export { className as class }

  // content props
  export let name: string = ''
  export let label: string = ''
  export let placeholder: string = ''
</script>

<div class="flex flex-col gap-y-1 {className}">
  {#if label}
    <label
      for={name}
      class="text-sm font-medium text-neutral-700">{label}</label
    >
  {/if}
  <input
    {type}
    id={name}
    {name}
    {placeholder}
    {required}
    class="block w-full py-2 text-base border-neutral-400 sm:text-sm
    
    {label ? 'rounded-md px-3' : 'rounded-full px-4'}
    "
  />
</div>
