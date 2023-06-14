export default function NavBar({ html }) {
  return html`
    <style>
      :host {
        display: block;
        backdrop-filter: blur(3px);
        background: hsla(0deg 0% 100% / 0.9);
      }
    </style>
    <site-container>
      <nav class='flex gap0'>
        <h1 class='font-semibold tracking-1'><a href='/' class='no-underline'>a.d.c</a></h1>
        <ul class='mis-auto flex gap0 list-none'>
          <li><a href='/'>Home</a></li>
          <li><a href='/work'>Work</a></li>
          <li><a href='/about'>About</a></li>
        </ul>
      </nav>
    </site-container>
  `
}
