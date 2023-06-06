export default function ProjectData({ html }) {
  return html`
    <style>
      :host > div {
        background-color: #f0f0f0;
      }
    </style>
    <div class='p0'>
      <data-list class='text-1 leading3'>
        <slot></slot>
      </data-list>
    </div>
  `
}
