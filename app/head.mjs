import titlesByPath from './lib/titlesByPath.mjs'
import { getStyles }  from '@enhance/arc-plugin-styles'

const { linkTag } = getStyles

export default function Head(state) {
  const { req } = state
  const { path } = req

  const title = titlesByPath[path] || ''

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="image" content="/_public/adc-open-graph.jpg" />
      <meta name="og:image" content="/_public/adc-open-graph.jpg" />
      <meta name="og:type" content="website" />
      <link rel="icon" href="/_public/favicon.svg">
      <title>a.d.c — ${title}</title>
      <meta name="description" content="An example of a design portfolio built with Enhance — the HTML first full stack web framework" />
      ${linkTag()}
      <style>
        @font-face {
          font-family: "HK Grotesk";
          font-weight: 300;
          src: url("/_public/fonts/HKGrotesk-Light.woff2") format("woff2")
        }

        @font-face {
          font-family: "HK Grotesk";
          font-weight: 400;
          src: url("/_public/fonts/HKGrotesk-Regular.woff2") format("woff2")
        }

        @font-face {
          font-family: "HK Grotesk";
          font-weight: 600;
          src: url("/_public/fonts/HKGrotesk-SemiBold.woff2") format("woff2")
        }

        body {
          color: var(--dark);
          text-rendering: optimizeLegibility;
        }

        a {
          text-decoration: underline;
          text-decoration-thickness: 0.0625em;
          text-underline-offset: 0.0625em;
        }
      </style>
    </head>
    <body class='font-sans'>
`
}
