# Brand fonts (self-hosted)

The site is wired to use two licensed brand fonts. Drop the `.woff2` files in
this folder with these exact names and they load automatically (no code change
needed). Until they're here, the site falls back to Instrument Serif (for
titles) and DM Sans (for body), which approximate the look.

## Body — Neue Montreal (Pangram Pangram)
- `NeueMontreal-Regular.woff2`
- `NeueMontreal-Medium.woff2`
- `NeueMontreal-Italic.woff2`

## Titles — Gaya (Out of the Dark)
- `Gaya-Regular.woff2`
- `Gaya-Italic.woff2`

Tip: if you only have `.otf`/`.ttf` files, convert them to `.woff2` first
(e.g. with an online converter or `fonttools`) for much smaller downloads.

The `@font-face` declarations live in `app/globals.css`.
