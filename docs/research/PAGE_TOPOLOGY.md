# Forged page topology

## Global shell

- One fixed viewport (`#Stage`) with a WebGL canvas, a masked frame border, an HTML UI overlay, and a hidden native scroll controller.
- The document itself does not scroll. `.RTScroll` is a fixed full-viewport element containing five virtual scroll ranges totaling roughly 2,835 viewport heights.
- Akira Expanded is used for display/nav copy; Manrope is used for body/interface copy.
- Background token: `#010508`. Accent token: `#bbf6e2` / loader `#bef2de`.

## Visual order

1. Loader: logo plus a 150 × 4 px progress bar.
2. Garage intro: framed garage door scene, fixed header, and scroll indicator.
3. About camera sequence: the door opens and the camera travels through three workshop story beats.
4. Work tunnel: seven floating video cards in a dark corridor; card selection is canvas-driven.
5. Project detail: fixed metadata column, independently scrollable media column, previous/next separators, and close control.
6. Contact room: headline, email/social slab, newsletter form, and a persistent 3D room behind it.

## Interaction models

- Loader: time/resource driven.
- Header navigation: click driven; buttons tween the virtual scroll controller to About, Work, or Contact anchors.
- About and Work scenes: scroll driven; the same scroll input controls door, camera, copy, and card positions.
- Project cards: hover/cursor driven plus click to open.
- Project detail: click to enter/close, wheel scroll inside media content, click media for lightbox.
- Contact: click links and newsletter form; scene arrival remains scroll driven.
