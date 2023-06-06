export default function UnorderedList({ html }) {
  return html`
    <style>
      ul li:before {
        content: '・';
        padding-inline-end: 0.5ch;
      }
    </style>
    <ul class='list-none'>
      <slot></slot>
    </ul>
  `
}
