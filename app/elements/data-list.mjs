export default function DataList({ html }) {
  return html`
    <style>
      dt {
        color: var(--grey-400);
        font-weight: 600;
      }

      dd + dt {
        margin-block-start: var(--space-0);
      }
    </style>
    <dl>
      <slot></slot>
    </dl>
  `
}
