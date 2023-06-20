const images = [
  '/_public/images/architecture/ricardo-gomez-angel-9AjwOAIdsII-unsplash.webp',
  '/_public/images/furniture/mahmoud-azmy-iFVuDQZAxFc-unsplash.webp',
  '/_public/images/lighting/reinaldo-kevin-EQz1tZWS1hM-unsplash.webp',
]

export default function CoverImage({ html }) {
  const imageElements = images.map(image => `
    <enhance-image
      src='${image}'
      defaultWidth='800'
      variant1='(min-width: 90em) 2000'
      variant2='(min-width: 36em) 1400'
      alt=''
      class='absolute object-cover'
    ></enhance-image>
  `).join('')

  return html`
    <style>
      :host {
        display: block;
      }

      figure {
        width: 100%;
        aspect-ratio: var(--aspect-ratio, 3 / 2); /* Supplied aspect ratio, or 3/2 by default */
      }

      img {
        transition: opacity var(--transition-duration, 0.5s) linear;
      }

      [slot='content'] {
        position: absolute;
      }
    </style>

    <figure class='relative flex align-items-center justify-content-center overflow-hidden'>
      ${imageElements}

      <!-- An optional slot for content to be rendered over top of the images -->
      <slot name='content'></slot>
    </figure>

    <script type='module'>
      // Duration to show each image for, in milliseconds
      const imageIntervalDuration = 3000
      const images = document.querySelectorAll('cover-image img')
      const imageCount = images.length - 1
      let currentIndex = 0

      // Zero out opacities of all images except the image at the current index
      function toggleOpacities(image, index) {
        image.style.opacity = index === currentIndex ? 1 : 0
      }

      // Initialize
      images.forEach(toggleOpacities)
      
      function onInterval() {
        // Increment currentIndex, or reset if it's already at the last index
        currentIndex = currentIndex === imageCount ? 0 : currentIndex + 1

        // Toggle with new index
        images.forEach(toggleOpacities)
      }

      // Off to the races!
      setInterval(onInterval, imageIntervalDuration)
    </script>
  `
}
