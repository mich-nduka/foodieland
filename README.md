# Foodieland

A recipe and food-blog site built with the Next.js App Router and styled-components.

Routes: a home page, a recipe index with a page per recipe, a blog index with a page
per post, and a contact page.

## Requirements

- **Node.js 20.9+** (required by Next 16)
- **pnpm** — the repo has a `pnpm-lock.yaml`

## Getting started

```bash
pnpm install
pnpm dev
```

Then open <http://localhost:3000>.

## Scripts

| Script           | What it does                                       |
| ---------------- | -------------------------------------------------- |
| `pnpm dev`       | Dev server (Turbopack, the default in Next 16)      |
| `pnpm build`     | Production build; type-checks and prerenders        |
| `pnpm start`     | Serve the production build                          |
| `pnpm lint`      | ESLint flat config (`next lint` was removed in v16) |
| `pnpm typecheck` | `tsc --noEmit`                                      |

## Stack

- **Next.js 16** (App Router) and **React 19**
- **TypeScript** in `strict` mode
- **styled-components 6**, with the SWC transform enabled in `next.config.ts` and an
  SSR registry in `lib/registry.tsx` so styles are server-rendered
- **react-feather** for icons
- Fonts are self-hosted from `public/fonts` via `@font-face` in `app/GlobalStyles.tsx`
  (Lobster, Inter, Eudoxus Sans) — this project does not use `next/font`

## Layout

```
app/
  page.tsx                       home
  recipes/page.tsx               recipe index
  recipes/[recipe]/page.tsx      server component: slug lookup + generateStaticParams
  recipes/[recipe]/RecipeDetailView.tsx   the client view
  blog/page.tsx                  blog index
  blog/[blogpost]/page.tsx       blog post
  contact/page.tsx               contact form
  GlobalStyles.tsx               reset, @font-face, design tokens
components/
  Layout/       page scaffolding shared across routes
  Typography/   fluid heading and body-text primitives
  Card/ Badges/ Hero/ Header/ Footer/ ...
lib/
  registry.tsx  styled-components SSR registry
  contact.ts    contact-form submission
data.ts         all site content
types.ts        content types
constants.ts    breakpoints and media queries
```

Shared styled components live in `components/Layout` and `components/Typography`.
Route modules should not import from each other — pages used to pull styled components
out of `app/recipes/page.tsx`, which meant a route could not be restructured without
breaking unrelated pages.

## Content

**`data.ts` is the single source of truth.** `RECIPES` holds every recipe; the
home-page grids (`GRID_INFO`, `MORE_RECIPES`) are built from it with a `tile(slug)`
helper rather than being a second copy of the same titles and cook times, so a card
and its detail page cannot disagree. `tile()` throws on an unknown slug.

### Adding a recipe

1. Append a `RecipeDetail` to `RECIPES` in `data.ts`. The `slug` becomes its URL.
2. Put images in `public/images` and reference them from `cardImage`, `heroImage` and
   any step images.
3. Optionally add `tile("your-slug")` to `GRID_INFO` or `MORE_RECIPES` to feature it
   on the home page.

`generateStaticParams` picks it up, so it prerenders on the next build — no routing
changes needed.

## Responsive conventions

Worth knowing before editing any styles:

- **Design tokens** in `app/GlobalStyles.tsx` — `--page-gutter`, `--section-gap`,
  `--section-gap-lg`. Use these for page insets and vertical rhythm. A full-bleed
  block cancels the gutter with `calc(-1 * var(--page-gutter))` rather than a
  hardcoded negative margin.
- **Media queries** come from `QUERIES` in `constants.ts`. They are all `max-width`,
  hence the `…AndSmaller` names: `phoneAndSmaller` (600px), `tabletAndSmaller`
  (1080px), `laptopAndSmaller` (1300px).
- **Type scales with `clamp()`**, via the `components/Typography` primitives. Prefer
  those over an inline `fontSize`. Keep `line-height` unitless — a fixed px
  line-height stops tracking a fluid font.
- **Grids** use `minmax(0, …)` and step their column count down at breakpoints. A
  track floor such as `minmax(400px, 1fr)` forces the row to demand
  `columns × floor + gaps` regardless of available width, which overflows the page.
- **Media queries add no specificity.** A base declaration written *after* a media
  query that sets the same property wins by source order — keep responsive overrides
  last in a styled-component block.

## Contact form

The form validates and submits without reloading, but **delivery needs a backend that
this project does not include.** Set `NEXT_PUBLIC_CONTACT_ENDPOINT` to an API route,
a server action or a form service (Formspree, Basin, Formspark):

```bash
# .env.local
NEXT_PUBLIC_CONTACT_ENDPOINT=https://example.com/your-endpoint
```

`lib/contact.ts` POSTs the `FormData` there. With no endpoint configured the form
tells the visitor it is not connected rather than showing a false success message.

## Known gaps

- **Social links** in the header and footer point at relative paths (`/facebook.com`)
  and need real URLs.
- **Blog posts are addressed by title**, not by a slug like recipes are — the route
  relies on URL-encoded spaces round-tripping, so a title containing an apostrophe or
  an ampersand would break it.
- **Two `jsx-a11y/alt-text` warnings** in `components/Card/BlogCard.tsx`; the styled
  `img` elements need alt text.
- **`motion`** is in `dependencies` but imported nowhere, and the `RadioButton` in
  `components/Input/Input.tsx` is unused. Both are safe to remove.
- The recipe index renders all recipes in one grid — it will want pagination or
  filtering as the list grows.

## Deploying

Any host that runs a Next.js 16 build works. On [Vercel](https://vercel.com/new),
import the repo and set `NEXT_PUBLIC_CONTACT_ENDPOINT` in the project's environment
variables if you want the contact form to deliver.
