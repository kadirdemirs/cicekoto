# ContactScene Specification

## Overview

- Screenshot: `docs/design-references/forged-desktop-contact.png`
- Interaction model: scroll arrival plus click/form interactions

## Content

- “Let's make something amazing together”
- `hey@forged.build`
- YouTube, Instagram, LinkedIn, and X links
- “Sign up for our newsletter to get updates on new work, experiments, and what we're building at Forged.”
- Email placeholder: “Enter your email address”

## Computed styles

- Container: fixed at 50%/50%, translated -50%/-50%, max-width 90vw, z-index 3.
- Heading: Akira Expanded, 42 px, line-height 110%, centered, white.
- Email slab: `rgba(0,5,8,.5)`, 1 px white-alpha border, 10 px backdrop blur, padding 29 × 30 px.
- Social tiles: height 68 px, same translucent surface, 10 px gaps.
- Newsletter slab: 15 px backdrop blur, padding 44 px 64 px 48 px.
- Input: height 51 px, 1 px half-white border; submit width 87 px, white background.

## Responsive behavior

- Heading drops to 28.8 px at ≤768 px and 24 px at ≤640 px.
- Social links become a 2 × 2 grid at ≤760 px.
- Phone preview is hidden at ≤768 px and whenever the content width is constrained below 1350 px.
