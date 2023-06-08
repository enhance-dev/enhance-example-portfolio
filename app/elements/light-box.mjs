export default function LightBox({ html, state }) {
  const { attrs, instanceID } = state
  const { thumbnail, image,  alt = '' } = attrs

  return html`
    <style>
      a img {
        aspect-ratio: var(--aspect-ratio, 3 / 2);
        transition: scale var(--transition-duration, 0.5s) var(--timing-function, ease-out);
      }

      a img:hover {
        scale: 1.125;
      }

      dialog {
        background: transparent;
        padding-inline: var(--space-0);
      }

      .close-button {
        background-color: white;
        block-size: 2em;
        inline-size: 2em;
        box-shadow: 0 4px 12px hsla(0deg 0% 0% / 0.2);
        translate: 1em 1em;
      }

      dialog img {
        max-block-size: var(--max-height, 80vh);
        border: var(--space-0) solid white;
      }

      dialog::backdrop {
        background-color: var(--background-color, hsla(0deg 0% 0% / 0.5));
      }
    </style>

    <a href='${image}' data-instance='${instanceID}' class='block overflow-hidden'>
      <img src='${thumbnail}' alt='${alt}' class='object-cover object-c' />
    </a>
    <dialog data-instance='${instanceID}' class='m-auto overflow-visible'>
      <form method='dialog' class='text-end relative z1'>
        <button class='close-button radius-100 font-semibold'>&times;</button>
      </form>
      <img src='${image}' alt='${alt}' class='m-auto' />
    </dialog>
  `
}
