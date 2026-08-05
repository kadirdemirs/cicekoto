# RuntimeShell Specification

## Overview

- Target: `forged-clone/index.html` plus `assets/bin/*`
- Screenshot: `docs/design-references/forged-desktop-home.png`
- Interaction model: time driven, then scroll driven

## Structure and exact styles

- `html`, `body`, `#Stage`: width/height 100%, overflow hidden, background `#010508`.
- Canvas: fixed viewport dimensions, absolute at 0/0.
- Frame border: fixed SVG, width/height `100vw/100vh`, pointer events none.
- Loader: fixed, z-index 99999, flex column, centered, 500 ms opacity transition.
- Global text rendering disables selection and enables antialiasing.

## Assets

- `assets/bin/app.aura`, `auraruntime.js`, `auraruntime.wasm`
- `assets/images/logo.png`, `logo.svg`, `favicon.png`
- Akira Expanded OTF and Manrope variable TTF

## Responsive behavior

- Canvas always matches the active viewport. The original runtime chooses its mobile/desktop scene behavior internally.
