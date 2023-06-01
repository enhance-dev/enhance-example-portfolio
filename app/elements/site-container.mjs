export default function SiteContainer({ html }) {
  return html`
    <style>
      :host {
        display: block;
        inline-size: var(--site-width);
        max-inline-size: var(--site-max-width);
        margin-inline: auto;
      }
    </style>
    <slot></slot>
  `
}
