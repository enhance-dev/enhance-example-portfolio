export default function AdaptiveTwoCols({ html, state }) {
  const { attrs } = state
  const { breakpoint = 'min-width: 48em' } = attrs

  return html`
    <style>
      @media (${breakpoint}) {
        :host > div {
          display: grid;
          grid-template-columns: 1fr min(33vw, 32ch);
          gap: var(--space-6);
        }
        
        :host > div :first-child { order: 2; }
        :host > div :nth-child(2) { order: 1; }
      }
    </style>
    <div>
      <slot></slot>
    </div>
  `
}
