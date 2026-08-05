# HeaderNavigation Specification

## Overview

- Screenshot: `docs/design-references/forged-desktop-home.png`
- Interaction model: click and hover driven

## Computed styles

- Header: fixed; top 24 px; left/right 64 px; height 30 px; flex with space-between; z-index 100.
- Logo: 120 × 36 px; SVG mask sized 120 × 30 px; white, or `#bbf6e2` when Home is active.
- Nav list: flex; gap 20 px.
- Separators: 22 × 1 px; `rgba(255,255,255,.1)`.
- Button text: Akira Expanded 16 px, line-height 150%, white; active accent `#bbf6e2`.

## Behavior

- Hover opacity: 1 → .8 in 200 ms. Active press: .6.
- Clicks tween the hidden scroll controller to About, Work, or Contact.
- At ≤1024 px header insets become 32 px; at ≤768 px they become 16 px and top 16 px.
