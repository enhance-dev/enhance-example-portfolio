export default function ScrollsnapGallery({ html }) {
  return html`
    <style>
      layout-collection {
        aspect-ratio: 3 / 2;
        scrollbar-width: none;
      }

      layout-collection::-webkit-scrollbar {
        display: none;
      }

      img {
        max-inline-size: 90%;
        max-block-size: 80vh;
        object-fit: contain;
      }
    </style>
    <layout-collection
      gap='var(--space-0)'
      snap-align='start'
      snap-type='mandatory'
      class='si-100'
    >
      <slot></slot>
    </layout-collection>
  `
}
