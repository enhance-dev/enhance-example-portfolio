export default function NavBar({ html }) {
  return html`
    <style>
      :host {
        display: block;
      }

      a {
        text-decoration: underline 1px;
      }
    </style>
    <nav class='flex gap0'>
      <h1 class='font-semibold tracking-1'>a.d.c</h1>
      <ul class='mis-auto flex gap0 list-none'>
        <li><a href='/'>Home</a></li>
        <li><a href='/work'>Work</a></li>
        <li><a href='/about'>About</a></li>
      </ul>
    </nav>
  `
}
