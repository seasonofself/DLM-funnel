# Season of Self — Brand & Design System

The source of truth for the site's look. Keep the site inside these rules.
Vibe reference: elegant, editorial, soul-centered. High-contrast serif titles,
clean grotesque body, warm neutral palette, lots of whitespace, calm (never
loud or heavy). Think warm minimal editorial, not corporate.

## Colors — use ONLY these

| Token           | Hex       | Use                                             |
|-----------------|-----------|-------------------------------------------------|
| `cream`         | `#f6f4ef` | Default page background                         |
| `ink`           | `#222222` | Headlines and body text (primary)               |
| `sage`          | `#939e7a` | The logo green — accents, tints, backgrounds    |
| `dusty-blue`    | `#9caec1` | Cool accent, large display words, backgrounds   |
| `terracotta`    | `#c19673` | Warm accent (small emphasis, links)             |
| `linen`         | `#d7cfac` | Soft tan — highlights, marker fills             |
| `deep-brown`    | `#4b3427` | Deep warm neutral — button hovers, dark accents |

Section-background tints in use (light washes, on-brand): `#dde2d2` (pale sage),
`#cdd8e1` (pale blue).

**Do NOT use** the old off-palette colors: `#3d5230` (deep-sage), `#a07854`
(terracotta-dark), `#2a3d1e` (forest). These are being removed.

Guidance: default text is `ink` (or an ink opacity like `ink/80`, `ink/55`).
Reach for a color accent sparingly — a single italic/emphasis word, a small
label, or a big display word. Don't color whole headlines.

## Type

- **Body font: Neue Montreal** (Pangram Pangram). Self-hosted — see
  `public/fonts/README.md`. Falls back to DM Sans until the files are added.
- **Title font: Gaya** (Out of the Dark) — the preferred display serif.
  Alternative the team likes: the "Opening Ceremony" serif. Falls back to
  **Instrument Serif** until the Gaya files are added.
- **Weights:** keep titles **regular weight** — the brand is elegant, not bold.
  Avoid heavy/bold headlines. Emphasis comes from *italics*, not weight or color.
- **Labels/eyebrows:** small uppercase, letter-spaced (rendered in JetBrains
  Mono via a global rule), in a muted `ink/55`.

Fonts are configured in `app/globals.css` (`@font-face`, `:root` variables,
`.font-display` / `.font-subtitle`) and mapped in `tailwind.config.ts`
(`font-display`, `font-sans`, `font-subtitle`, `font-mono`).
