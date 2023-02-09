<script lang="ts">
  // config props
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
  export let size: 'sm' | 'md' | 'lg' | 'xl' = 'md'
  let className = ''
  export { className as class }

  // content props
  export let name: string = 'circle'
  export let title: string | null = null

  // maps
  const weightMap = {
    thin: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  }
  const gradeMap = {
    low: -25,
    medium: 1,
    high: 200,
  }
  const sizeMap = {
    sm: 16,
    md: 24,
    lg: 40,
    xl: 48,
  }
</script>

<i
  {title}
  class="inline-flex overflow-visible items-center justify-center material-symbols-rounded box-content {className}"
  style="
  height:{sizeMap[size]}px;
  width:{sizeMap[size]}px;
  font-size:{sizeMap[size]}px;
  font-variation-settings: 
  'FILL' {filled ? 1 : 0}, 
  'wght' {weightMap[weight]}, 
  'GRAD' {gradeMap[grade]}, 
  'opsz' {sizeMap[size]};"
>
  {name}
</i>
