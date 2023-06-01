const images = [
  'ricardo-gomez-angel-9AjwOAIdsII-unsplash.jpg',
  'michal-matlon-LeDdprHE9h4-unsplash.jpg',
  'michal-matlon-ogCW7jwHpLY-unsplash.jpg',
]

export default function CoverImage({ html }) {
  const imageElements = images.map(image => `<img src='/_public/images/${image}' alt='' class='absolute object-cover' />`).join('')

  return html`
    <style>
      :host {
        display: block;
      }

      figure {
        width: 100%;
        aspect-ratio: var(--aspect-ratio, 3 / 2);
      }

      img {
        transition: opacity 0.5s linear;
      }

      [slot='content'] {
        position: absolute;
      }
    </style>
    <figure class='relative flex align-items-center justify-content-center overflow-hidden'>
      ${imageElements}
      <slot name='content'></slot>
    </figure>

    <script type='module'>
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
      setInterval(onInterval, 3000)
    </script>
  `
}
