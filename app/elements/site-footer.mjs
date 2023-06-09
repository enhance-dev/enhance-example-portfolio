export default function SiteFooter({ html }) {
  return html`
    <style>
      text-container {
        border-color: #ccc;
      }
    </style>
    <footer class='pbe6'>
      <site-container>
        <text-container class='mi-auto text-center border-solid border-bs1 pbs3'>
          <p class='text-1'>
            <span class='line-through'>&copy;</span> 2023 <span class='font-semibold'>a.d.c</span>
          </p>
          <p class='text-1'>
            Built with <a href='https://enhance.dev'>Enhance</a>
          </p>
        </text-container>
      </site-container>
    </footer>
  `
}
