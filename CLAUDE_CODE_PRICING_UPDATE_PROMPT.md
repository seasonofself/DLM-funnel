# Pricing & Offer Update — Dream Life Mapping

We are repricing Tier 2 (Dream Life Mapping) and removing the Monthly Q&A Calls offering. Make the following edits exactly. Do not change layout, animations, structure, classNames, or any copy that isn't explicitly listed here. Only change the strings/blocks called out below.

## Files to edit
1. `app/variant-a/page.tsx`
2. `lib/data.ts`

## Pricing constants (use these everywhere consistently)
- Founding member price: **$197** one-time, or **3 × $77**
- Regular price (anchor / strikethrough): **$497**
- Savings vs regular: **Save $300**
- Total value of components: **$1,374**

---

## EDITS in `app/variant-a/page.tsx`

### 1. Announcement bar — desktop (around line 98-104)
Replace:
```
✦ Founding Member Pricing: <strong>$497</strong> · Save $500 ·
Pricing available for{" "}
```
With:
```
✦ Founding Member Pricing: <strong>$197</strong> · Save $300 ·
Pricing available for{" "}
```

### 2. Announcement bar — mobile (around line 106)
Replace:
```
<span>✦ <strong>$497</strong></span>
```
With:
```
<span>✦ <strong>$197</strong></span>
```

### 3. Hero CTA caption (around line 192)
Replace:
```
$497 USD · Founding member price · Full value $997 · Money-back guarantee
```
With:
```
$197 USD · Founding member price · Usually $497 · 30-day money-back guarantee
```

### 4. Value Anchor section — stack items array (around lines 770-794)
Replace the entire 4-item array with this 3-item array (remove the Monthly Q&A Calls object entirely):
```ts
[
  {
    title: "Dream Life Mapping Course",
    description:
      "A complete process to help you get clear on your direction and start building it",
    value: "$797",
  },
  {
    title: "12-Month Community Access",
    description:
      "A space to stay in momentum, ask questions, and be surrounded by people who are also building aligned lives — with async support from your guides",
    value: "$480",
  },
  {
    title: "Somatic Toolkit",
    description:
      "Practices to help you move through fear, regulate your nervous system, and stay connected to your intuition",
    value: "$97",
  },
]
```

Note: the grid is currently `md:grid-cols-2` — leave the grid classes as-is (3 items will lay out fine; one card will sit alone on the second row on md+).

### 5. Value Anchor totals block (around lines 822-830)
Replace:
```
<p className="font-display text-3xl sm:text-4xl mb-2">
  Total Value: $2,874
</p>
<p className="font-display text-4xl sm:text-5xl mb-2">
  Today: $497
</p>
<p className="font-sans text-base sm:text-lg text-white/80">
  or 3 payments of $177
</p>
```
With:
```
<p className="font-display text-3xl sm:text-4xl mb-2">
  Total Value: $1,374
</p>
<p className="font-display text-4xl sm:text-5xl mb-2">
  Today: $197
</p>
<p className="font-sans text-base sm:text-lg text-white/80">
  or 3 payments of $77
</p>
```

### 6. Value Anchor CTA buttons (around lines 849 and 856)
Replace:
```
Join Now — $497 →
```
With:
```
Join Now — $197 →
```

Replace:
```
Choose 3 Payments of $177 →
```
With:
```
Choose 3 Payments of $77 →
```

### 7. Pricing cards — "Pay in full" card (around lines 990-1006)

Strikethrough price — replace `$997` with `$497`.

Headline price — replace `$497` with `$197`.

Sub-line — replace `USD — Save $500` with `USD — Save $300`.

Button text — replace `Join Now — $497 →` with `Join Now — $197 →`.

### 8. Pricing cards — "Payment plan" card (around lines 1019-1029)
Replace:
```
3 × $177
```
With:
```
3 × $77
```

Replace button text:
```
Join Now — 3 × $177 →
```
With:
```
Join Now — 3 × $77 →
```

### 9. Pricing trust line (around line 1039)
Replace:
```
Founding member price · Full value $997 · You save $500 · Full money-back guarantee
```
With:
```
Founding member price · Usually $497 · You save $300 · 30-day money-back guarantee
```

### 10. "What happens next" section — third paragraph (around line 912)
Replace:
```
You&rsquo;ll also get access to the community space for the next 12 months, where we host Q&amp;A calls every month.
```
With:
```
You&rsquo;ll also get access to the community space for the next 12 months, where you can ask questions any time and get async support from us as your guides.
```

### 11. Final CTA — button + subtext (around lines 1145 and 1148)
Replace:
```
Join Dream Life Mapping — $497 →
```
With:
```
Join Dream Life Mapping — $197 →
```

Replace:
```
Or 3 × $177 · 30-day money-back guarantee · Instant access
```
With:
```
Or 3 × $77 · 30-day money-back guarantee · Instant access
```

---

## EDITS in `lib/data.ts`

### 12. FAQ — "Do I get support during the process?"
Replace the answer:
```
Yes. You\u2019ll have access to the community for 12 months, plus monthly Q&As where you can ask questions, get guidance, and stay in momentum.
```
With:
```
Yes. You\u2019ll have access to the community for 12 months, where you can ask us questions directly and get async support from your guides as you move through the process \u2014 alongside a community of like-minded women on the same journey.
```

### 13. FAQ — "Do I get 1:1 support?"
Replace the answer:
```
This isn\u2019t a 1:1 coaching container. You\u2019ll get support inside the Circle community, where you can ask questions and receive guidance, as well as on our monthly calls where we answer submitted questions. You\u2019re supported throughout the process, just not through private one-on-one calls.
```
With:
```
This isn\u2019t a 1:1 coaching container. You\u2019ll get async support from us inside the Circle community for the full 12 months \u2014 you can ask questions and receive guidance whenever you need it. You\u2019re supported throughout the process, just not through private one-on-one calls.
```

---

## After making the edits

1. Run `grep -rn "\$497\|\$997\|\$177\|\$500\|monthly Q\|Monthly Q" app/ lib/` to confirm no stale references remain (other than intentional ones like the regular-price anchor `$497` we just added back, and the `$997` strikethrough — wait, `$997` should be GONE; the new strikethrough is `$497`).
2. Visually scan the diff for `$2,874` and `$1,200` — both should be gone.
3. Run `npm run build` (or `npm run dev`) and load `/dream-life` to confirm everything renders without TypeScript errors.
4. Verify all CTAs still link to the same `checkoutUrl` (do not modify the URL).

## Do NOT change
- Hero subheading copy
- Module data
- Resonance cards
- Founders bios
- Give-back section
- Guarantee section copy (already says 30-day)
- The `checkoutUrl` constant
- The 48hr countdown logic
- Any classNames, animations, or layout
