<script lang="ts">
  // types
  type Width = 320 | 640 | 1024 | 1280 | 1920

  // config props
  export let sizes = '100vw'
  export let widths: Width[] = [320, 640, 1024, 1280, 1920]
  export let loading: 'eager' | 'lazy' = 'lazy'
  export let decoding: 'async' | 'auto' | 'sync' = 'async'
  let className = ''
  export { className as class }

  // content props
  export let src: string = ''
  export let alt: string = ''

  // computed props
  const originalType = () => src.split('.').pop()
  const webpSrc = () => src.replace(`.${originalType()}`, '.webp')

  // functions
  function getResizedSrc(src: string, width: number) {
    const maxHeight = 9999

    let imageType = src.split('.').pop()
    let resizedSrc = src.replace(
      `.${imageType}`,
      `${width}_${maxHeight}.${imageType}`
    )
    return resizedSrc
  }

  function getSrcset(src: string, widths: Width[]) {
    let srcset = []
    widths.forEach((width) => {
      let resizedSrc = getResizedSrc(src, width)
      let resizedSrcString = `${resizedSrc} ${width}w`
      srcset.push(resizedSrcString)
    })
    return srcset.toString()
  }
</script>

{#if src}
  <picture>
    <!-- WebP image for modern browsers -->
    <source
      type="image/webp"
      srcset={getSrcset(webpSrc(), widths)}
      media={sizes}
    />
    <!-- Original type for older browsers -->
    <source
      type="image/{originalType()}"
      srcset={getSrcset(src, widths)}
      media={sizes}
    />
    <!-- Fallback image for browsers that don't support picture -->
    <img
      {alt}
      {src}
      {loading}
      {decoding}
      class={className}
    />
  </picture>
{/if}
