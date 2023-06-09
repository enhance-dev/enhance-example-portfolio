# enhance-example-portfolio

**An example of a portfolio built with [Enhance](https://enhance.dev) — the HTML first full stack web framework.**

## What is this?
This example application demonstrates how Enhance can be used to build a portfolio style website, using well known standards like HTML and CSS, and just a sprinkling of JavaScript.

## Who is this for?
Just like web standards, Enhance is designed to be easy to approach, while offering a lot of depth for those who want to dive in. Similarly, we hope this example will be easily approachable to anyone with an intermediate level of experience with just HTML and CSS. While the majority of the code in this example is written in JavaScript files, you’ll notice that the actual content of those files is mostly HTML and CSS.

A basic primer on Enhance will further help you understand how this project's codebase comes together — so be sure to [check out the Enhance docs](https://enhance.dev/docs)!

## What’s included?
- Fully responsive layouts, including layouts based on [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries)
- Two different gallery styles — a horizontally scrolling gallery featuring [CSS snap scrolling](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap), and an image grid featuring lightboxes powered by [native `dialog` elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
- A variety of custom elements authored as Single File Components, which can be used separately or composed together
- Progressive enhancement strategies to provide functionality if/when JavaScript fails to load
- Fluid typography and spacing, powered by [Enhance’s fluid modular scales](https://enhance.dev/docs/learn/concepts/styling/modular-scales)
- Parametric CSS classes, powered by [Enhance’s utility class system](https://enhance.dev/docs/learn/concepts/styling/utility-classes)

## Usage
While this code is provided as an example rather than a fully flexible template, you're free to use the code in this example app however you’d like — including using it to build your own portfolio website, or cribbing any of the custom elements, styles, etc. Attribution is always appreciated, but is not required.

Here’s a brief overview on what you’ll need to do to run this code locally:

1. [Install NodeJS](https://nodejs.org/en) (preferably version 18) if you haven’t already
1. Clone the repo or download it as a ZIP using the Code dropdown menu above the repo’s file listing
1. Navigate to your local copy of the repo and install its dependencies using the command `npm install`
1. Start the local development server by running `npm start`

### File structure
The bulk of the code you might want to play with lives in the `app/` directory:

```shell
app/
  browser/   # JavaScript files to be loaded in the browser
  elements/  # Custom elements, written as Enhance Single File Components
  lib/       # Assorted code used throughout the project
  pages/     # HTML files with file based routing
    work/    # More HTML files, to be served under the 'work/' directory in the browser
```

Another point of interest will be the `styleguide.json` file, which lives at the root of the project. Learn more about using this file to generate parametric CSS classes in [the styling section of the Enhance docs](https://enhance.dev/docs/learn/concepts/styling/)!

### Deploy
If you’d like to deploy your own version of this app, check out [Begin](https://begin.com)! You can get started for free in a matter of minutes.

## Questions? Feedback? Let us know!
If you have any questions or feedback about this example — or about Enhance in general — feel free to [join us on Discord](https://enhance.dev/discord)!
