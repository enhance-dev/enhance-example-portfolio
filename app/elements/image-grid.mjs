export default function ImageGrid({ html }) {
  return html`
    <style>
      :host {
        display: block;
        container-type: inline-size;
      }

      section {
        grid-template-columns: repeat(auto-fit, minmax(max(20cqi, 250px), 1fr));
      }
    </style>
    <section class='grid gap0'>
      <slot></slot>
    </section>
  `
}
