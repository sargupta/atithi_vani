# AtithiVani Design System — pointer and house rules

**Source of truth:** https://claude.ai/artifact/9ePKyJPuxgaUiE4ppLhSPf

Finalized 2026-09-20. The artifact carries the real tokens (`project/tokens.json`), the
motion spec (`project/motion.md`), 19 logo SVGs (`project/assets/Logos/`) and 18
components (`project/components/<Name>/`), including two full-page references —
`SitePrototype` (public site) and `MinistryPrototype` (district console).

This file is a summary so the rules are readable next to the code. **Where the two
disagree, the artifact wins.** Do not re-derive the identity from screenshots, from the
brochure PDFs, or from the older indigo/gold/cream palette — that palette is superseded.

Register to write and design in: *a seal, not a startup.*

---

## Themes

Four themes, 25 tokens each. They are **themes, not accents — a surface never mixes two.**

| Theme | When |
|---|---|
| **Sondhya** · dusk | Default. Public site, owner console, anything with the masthead. |
| **Neel** · night | District / ministry view and every government-facing deck. |
| **Bhor** · first light | Pre-arrival, morning states, print. |
| **Sabuj** · Dooars | Forest properties. |

| token | sondhya | neel | bhor | sabuj |
|---|---|---|---|---|
| surface-page | `#fdf4ee` | `#0e1b28` | `#fff8ec` | `#f4faf0` |
| surface-card | `#ffffff` | `#16283a` | `#ffffff` | `#ffffff` |
| surface-sunken | `#fbede4` | `#0a141e` | `#fbeed6` | `#e6f2e0` |
| surface-inverse | `#4a2340` | `#071220` | `#3a2618` | `#14352a` |
| surface-wash | `#ffe4d5` | `#132b3d` | `#ffe9c0` | `#e2f0dc` |
| ink | `#2a1226` | `#eaf2f8` | `#241608` | `#0e2a1f` |
| ink-soft | `#5b3a54` | `#bccedc` | `#5a4225` | `#33523f` |
| ink-muted | `#7a5a72` | `#8aa3b8` | `#7b5f35` | `#4e7159` |
| ink-inverse | `#fff3ea` | `#eaf2f8` | `#fff8ec` | `#f2faee` |
| ink-inverse-soft | `#e6c9d9` | `#bccedc` | `#f0dcb8` | `#cbe3c4` |
| ink-on-accent | `#fff7f1` | `#3a1226` | `#fff8ec` | `#f4faf0` |
| line | `#ebd6c9` | `#27405a` | `#eedcbe` | `#d4e6cc` |
| line-soft | `#f5e6dc` | `#1c2f44` | `#f7ebd6` | `#e8f2e2` |
| line-strong | `#9e7288` | `#5f8bad` | `#a8845a` | `#679371` |
| brand-frame | `#4a2340` | `#18324a` | `#3a2618` | `#14352a` |
| brand-sky | `#ffd9c4` | `#d5e8f5` | `#ffe9c0` | `#e2f0dc` |
| ridge-far | `#ff9b78` | `#7fb3d4` | `#f2b85c` | `#83b47c` |
| ridge-near | `#f2603f` | `#3d7ca6` | `#de8a2a` | `#46804f` |
| accent | `#c0492b` | `#ff9b78` | `#a85f13` | `#2f6b3c` |
| accent-strong | `#a33b21` | `#ffb89d` | `#8a4c0c` | `#235430` |
| focus-ring | `#4a2340` | `#ffb89d` | `#3a2618` | `#14352a` |
| signal-live | `#2e7d57` | `#5fd08a` | `#2e7d57` | `#2e7d57` |
| signal-warn | `#9a6410` | `#e0ae55` | `#8a5a0a` | `#9a6410` |
| signal-crit | `#b3301f` | `#ff8570` | `#b3301f` | `#b3301f` |
| signal-info | `#2c6a8c` | `#7fb3d4` | `#2c6a8c` | `#2c6a8c` |

Rules that are easy to get wrong:

- `accent` is the **only** action colour.
- `ridge-near` / `ridge-far` are for data and illustration. Never a button, never text
  under 24px — they fail 4.5:1.
- `brand-frame` is the deepest thing in any composition and is **never** tinted toward
  `brand-sky`. That is the one move that kills the mark.
- Fills take `ink-on-accent`, never hard white. Neel's accent is a light coral and needs
  dark ink on it.
- A status is a colour **and** a word.
- Gradients only `ridge-far`→`ridge-near` or `accent`→`accent-strong`, at 135deg, no
  third stop.
- Cards never sit directly on `surface-sunken` — band the page, put the card on the band.

## Type

`display` Cormorant Garamond · `sans` Space Grotesk · `bengali` Noto Serif Bengali ·
`devanagari` Noto Serif Devanagari · `mono` system stack (deliberately unbranded,
readouts only). Load the first three from Google Fonts.

- **Display** — `hero-xl` 92/88 w600 · `hero` 64/62 · `display-lg` 46/48 ·
  `display-md` 32/36 · `display-sm` 24/30 · `quote` 26/36 italic w400
- **Text** — `lede` 20/31 · `body` 16/26 · `body-sm` 14/22 · `label` 13/18 w500 ·
  `eyebrow` 11/14 w600 `.16em` (the only capitals) · `caption` 12/17 · `button` 14/16 w600
- **Indic** — `bn-display` 40/52 · `bn-body` 16/**28** · `bn-label` 13/22 ·
  `dv-display` 30/44 · `dv-body` 16/28
- **Data** — `data-xl` 34/36 w500 · `data` 15/20 · `data-sm` 12/16

Bengali and Devanagari never borrow `body` — the 28px line is required or ascenders clip.
A figure in `display` is decoration; a figure in `mono` is data. One `hero-xl` per page,
on `surface-inverse`. One `lede` and one `eyebrow` per section.

## Space, edges, depth

4px base. Section padding `space-20` (80px) desktop, `space-12` (48px) below 760px. Page
measure **1160px** with a `space-5` gutter. `space-6` inside a card, `space-5` on dense
console panels.

Radii are carried from the shipped site and deliberately not rounded off: `radius-sm` 9px
chips · `radius-md` 11px buttons · `radius-lg` 14px cards · `radius-xl` 20px ·
`radius-2xl` 28px · `radius-pill` 999px · `radius-disc` 50%.

Two depth steps only. Resting = `surface-card` + 1px `line` + `shadow-sm`; **the shadow is
never the only edge.** `shadow-lift` for hover, for cards overlapping a hero, and for open
menus. Nothing else lifts.

## Motion

If an animation does not represent work, cut it.

`120ms` hover/press · `220ms` chip, tab, theme swap · `420ms` panel open, transcript line,
KPI count · `700ms` scroll reveal · `1.1–2.6s` looping ambients.

House curve `cubic-bezier(.2,.7,.2,1)` for everything entering; `ease-in-out` for loops;
`linear` for progress only. **No spring, no bounce, no overshoot.**

Scroll reveal: opacity 0 + translateY 24px over 700ms at 16% visibility, siblings
staggered 70ms, max five in a row. Every animation must survive
`prefers-reduced-motion: reduce` by resolving to its **finished** state — never freezing
mid-way.

## Logos

The mark is a bare pointed arch in a disc, holding a three-summit range and an eight-ray
padma. Full-colour artwork placed with `<img>` and **never recoloured in CSS** — an
`<img>` cannot inherit `currentColor`.

Pick the size rung by **rendered size, not context**:

| File | Use at |
|---|---|
| `atithivani-mark.svg` | 48px and above |
| `atithivani-mark-medium.svg` | 24–48px |
| `atithivani-favicon.svg` | below 24px (aperture widened so it stays open) |

Plus avatar, appicon, `-dark` variants, four colourway marks, four `-free` variants (arch
without the disc, for wide lockups), and four lockups: plain, dark, bengali, endorsed.

- Clear space = ¼ the disc's diameter.
- **No bar above or below the arch.** Below reads as a plinth or headstone; above dies
  under 24px.
- Never redraw the arch by eye — both curves are circular arcs struck from centres 26
  units either side of the axis, radius 54.
- Don't scale the lockup below 120px wide.
- The disc never changes across the ladder. That is what keeps the mark recognisable when
  nothing inside it is.
- Convert the wordmark to outlines before print.

## Components

18 in the artifact, each with a `README.md` and a `preview.html`:

Button · Badge · Card · Cover · Mark · Masthead · Waveform · VoiceCall · JourneyStepper ·
KpiTile · StatBand · Heatmap · SentimentGauge · CapabilityGrid · A2ANetwork ·
DistrictPanel · SitePrototype · MinistryPrototype

Signature patterns worth knowing before you build anything:

- **VoiceCall** is the hero screen. The transcript arrives one line at a time (~1.4s
  apart), Bengali first with English beneath, the sentiment knob travels last, and the
  timer stops when the outcome lands.
- **CapabilityGrid** tiles must each end in a checkable *proof line*. A tile with no proof
  line is marketing — delete it or find the fact.
- **A2ANetwork** curves its edges, because a straight-line star reads as an org chart.
- **StatBand** is exactly four cells, overlapping the hero by `space-10`.

---

## ⚠ Trademark — not cleared

The name is **not** trademark-cleared.

- AtithiVaniAI (Balaji Apex Technologies Pvt. Ltd.) has operated in Indian hospitality
  since July 2025.
- My AtithiVani Hotels & Resorts has traded under the name in Kerala for years.

**Clear Classes 39, 42 and 43 before committing to signage or a filing.**
