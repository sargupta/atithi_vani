# AtithiVani

**Website: [atithivani.com](https://atithivani.com)** · Instagram: [@atithivani](https://www.instagram.com/atithivani/)

AtithiVani is a guest assistant for hotels and homestays in Darjeeling, Sikkim, Kalimpong
and the Dooars. Guests use it on their phone in Bengali, Hindi or English, and can also
chat in Nepali. A couple of hours after checkout, it phones each guest who agreed, on the
property's behalf, to ask how the stay went.

The name is one word — Bengali অতিথিবাণী, Hindi अतिथिवाणी, "the guest's voice". It is a
product of SARGVISION Intelligence Pvt. Ltd.

This repository holds supporting sources for it: Google Apps Script and brand and
design-system notes.

## Repository layout

| Path | What lives here |
|---|---|
| `apps-script/` | Google Apps Script sources, deployed by hand to script.google.com |
| `docs/` | Brand, design-system and product notes that belong with the code |

## Brand and design system

The visual identity is **finalized** and lives outside this repo as a design-system
artifact. It is the source of truth for colour, type, motion, logos and components —
do not re-derive any of it from screenshots or from older collateral.

See [`docs/design-system.md`](docs/design-system.md) for the pointer, the four theme
names and the rules that are easiest to get wrong.

> **⚠ The name is not trademark-cleared.** The bare word "Atithi" is crowded in Indian
> hospitality (AtithiAI, My Atithi Hotels & Resorts, Atithi Cloud, CBIC's ATITHI app). The
> compound AtithiVani should clear past them, but Classes 39, 42 and 43 must be cleared before
> any signage, filing or irreversible brand spend. See `docs/design-system.md`.

## Conventions

- `main` is the only long-lived branch. Small, self-describing commits, pushed promptly.
- Nothing secret goes in the tree — this repository is **public**. IDs, keys and tokens
  belong in Script Properties, environment variables or a local file that `.gitignore`
  already covers.
- Generated collateral (brochures, decks, exported PDFs) stays in Google Drive. Git holds
  sources, not outputs.
