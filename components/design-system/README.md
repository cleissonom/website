# Design System

This project uses a lightweight design system built from:

- Global design tokens and visual styles in `app/globals.css`
- Reusable UI primitives in `components/design-system/primitives.tsx`

## Primitives

- `Container`: standard centered content width wrapper.
- `SiteMain`: page main shell (`site-main container`).
- `SectionStack`: vertical spacing layout primitive.
- `Surface`: shared elevated panel treatment.
- `PageHeader`: standard page header rhythm.
- `Eyebrow`, `Lead`, `MutedText`: typography primitives.
- `Grid`: standard responsive grid (`projects` variant available).
- `Card`: card primitive (`enableWalletHover` variant available).
- `ChipRow`, `Chip`, `ChipButton`: label/filter chip primitives.
- `InlineLink`: inline call-to-action links.
- `ButtonLink`: button-styled links with `primary`, `secondary`, and `ghost` variants.

## Usage

Import from the barrel:

```tsx
import { SectionStack, Surface, PageHeader, ButtonLink } from "@/components/design-system"
```

Keep new layout/UI work on these primitives first, and only add new raw classes when a primitive cannot express the required pattern.
