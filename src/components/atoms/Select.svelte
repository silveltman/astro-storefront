<script lang="ts">
  // config props
  let className = ''
  export { className as class }

  // content props
  export let name: string = ''
  export let label: string = ''
  export let placeholder: string = ''
  export let options: string[] = ['Option A', 'Option b', 'Option B']
</script>

<div class="flex flex-col gap-y-1 {className}">
  {#if label}
    <label
      for={name}
      class="text-sm font-medium text-neutral-700">{label}</label
    >
  {/if}
  <select
    id={name}
    {name}
    class="block w-full py-2 pr-10 text-base border-neutral-400 sm:text-sm

    {label
      ? 'rounded-md pl-3'
      : 'rounded-full pl-4 font-medium text-neutral-900'}
    "
  >
    {#if placeholder}
      <option
        disabled
        selected>{placeholder}</option
      >
    {/if}
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>
