# AtithiVani

Voice-first guest-experience platform for the Himalayan hospitality belt — Darjeeling,
Kalimpong, Sikkim, the Dooars and Siliguri — operating in Bengali, Hindi and English.

The flagship interaction is an AI voice call placed to the guest within 12 hours of
checkout. Three surfaces sit on top of that: the public site, the property console for
homestay and hotel owners, and a district view for a tourism department.

By SARGVISION INTELLIGENCE.

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

> **⚠ The name is not trademark-cleared.** Other businesses have traded as AtithiVani in
> Indian hospitality since 2025 and earlier. Classes 39, 42 and 43 must be cleared before
> any signage, filing or irreversible brand spend. See `docs/design-system.md`.

## Conventions

- `main` is the only long-lived branch. Small, self-describing commits, pushed promptly.
- Nothing secret goes in the tree — this repository is **public**. IDs, keys and tokens
  belong in Script Properties, environment variables or a local file that `.gitignore`
  already covers.
- Generated collateral (brochures, decks, exported PDFs) stays in Google Drive. Git holds
  sources, not outputs.
