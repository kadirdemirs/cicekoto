# ProjectDetail Specification

## Overview

- Screenshot: `docs/design-references/forged-desktop-project-detail.png`
- Interaction model: click to open/close, scroll inside media column, hover/click media

## Desktop structure

- Left metadata/content column: 50%, maximum 760 px, margin-left 64 px, padding-right 64 px.
- Right media column: fixed right, width 50%, height 100vh, padding 80 px 130 px 80 px 70 px above 760 px.
- Dark overlay gradient and a left-panel gradient capped at `min(760px,52vw)`.
- Metadata uses 16 px Manrope at 150% line height, 22 px vertical gaps, and 1 px translucent dividers.
- Close control: fixed at top 100 px; 114 × 42 px; translucent black, 1 px white-alpha border.

## Behavior

- Media images scale to 1.02 over 300 ms on hover.
- Clicked media opens a 75%-black lightbox with a 200 ms opacity transition.
- At ≤1200 px the two columns become a vertically flowing detail view.
