export default function CaseSummary({ html, state }) {
  const { attrs } = state
  const { image, alt, title, description, href } = attrs

  return html`
    <style>
      img {
        aspect-ratio: var(--aspect-ratio, 3 / 2);
        scale: var(--initial-scale, 1);
        opacity: var(--initial-opacity, 0.75);
        transition: scale var(--transition-duration, 0.5s) var(--timing-function, ease-out),
          opacity var(--transition-duration, 0.5s) var(--timing-function, ease-out);
      }

      a:focus {
        outline-offset: 0.5em;
      }

      :host:hover img,
      a:focus img {
        scale: var(--hover-scale, 1.125);
        opacity: var(--hover-opacity, 1);
      }
    </style>
    <a href='${href}' class='no-underline'>
      <figure>
        <div class='overflow-hidden mbe-1'>
          <img src='${image}' alt='${alt}' class='object-cover' />
        </div>
        <figcaption>
          <h1 class='font-semibold mbe-4'>${title}</h1>
          <p class='text-1 leading3'>${description}</p>
        </figcaption>
      </figure>
    </a>
  `
}
