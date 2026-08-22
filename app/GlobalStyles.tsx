"use client"
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'Lobster';
    src: url('/fonts/Lobster-Regular.ttf');
    font-weight: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/inter-optimized-font.woff2');
    font-weight: normal;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/inter-optimized-font.woff2');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/inter-optimized-font.woff2');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Eudoxus Sans';
    src: url('/fonts/EudoxusSans-Regular.woff2');
    font-weight: 400;
  }
  html {
    --lobster-font: 'Lobster', cursive;
    --inter-font: 'Inter', sans-serif;
    --eudoxus-font: 'Eudoxus Sans', sans-serif;

    /*
      Every page-level horizontal inset and vertical rhythm step reads from
      these, so gutters stay in sync across pages and full-bleed sections can
      cancel the gutter with calc(-1 * var(--page-gutter)) instead of
      hardcoding a matching negative margin.
    */
    --page-gutter: clamp(1rem, 5vw, 5rem);
    --section-gap: clamp(4rem, 9vw, 10rem);
    --section-gap-lg: clamp(4.5rem, 11vw, 11.875rem);

    font-family: var(--inter-font);
    /* Stop iOS Safari inflating text when a phone is rotated to landscape. */
    -webkit-text-size-adjust: 100%;
  }

  body {
    /* Below this, content is squeezed rather than laid out. */
    min-width: 320px;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* Form controls don't inherit the page font by default. */
  input, button, textarea, select {
    font: inherit;
  }

  /* A long unbroken string (a URL, say) shouldn't force a scrollbar. */
  p, h1, h2, h3, h4, h5, h6, span, li {
    overflow-wrap: break-word;
  }
`

export default GlobalStyles
