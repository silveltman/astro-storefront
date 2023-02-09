<script lang="ts">
  export let ratio: number = 1
  const padding = `${(1 / ratio) * 100}%`
</script>

<div
  class="w-full relative"
  style="padding-top: {padding};"
>
  <div class="absolute inset-0">
    <slot />
  </div>
</div>
