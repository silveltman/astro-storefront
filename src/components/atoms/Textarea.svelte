<script lang="ts">
  // config props
  export let rows: number = 4
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
  <textarea
    id={name}
    {name}
    {placeholder}
    {rows}
    {required}
    class="block w-full px-3 py-2 text-base rounded-md border-neutral-400 sm:text-sm"
  />
</div>
