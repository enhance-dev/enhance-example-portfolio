export default function CaseStudies({ html }) {
  return html`
    <style>
      :host {
        display: block;
        container-type: inline-size;
      }

      section {
        grid-template-columns: 1fr;
      }

      @container (min-inline-size: 420px) {
        section {
          grid-template-columns: 1fr 1fr;
        }
      }

      @container (min-inline-size: 600px) {
        section {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    </style>
    <section class='grid gap2'>
      <slot></slot>
    </section>
  `
}
