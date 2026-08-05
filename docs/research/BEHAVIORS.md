# Forged behavior sweep

## Loader and intro

- Loader covers the viewport with `#010508` and displays the 150 px logo above a 150 × 4 px bordered progress track.
- Progress reached 98% before the 3D bundle completed. On completion the loader fades over 500 ms.
- Header children enter from `translate3d(0,-50px,0) scale(.75)` and opacity 0 to their neutral state and opacity 1. The logo transition is 750 ms with `cubic-bezier(.215,.61,.355,1)`.

## Scroll sweep

- At scroll top 0 the garage door is closed.
- Around virtual scroll 850 px the door lifts and exposes the car/workshop.
- Around 2,650 px the first About copy appears: “This isn't just digital. It's built.”
- Around 7,650 px the second About copy appears: “Leaner, Sharper, Forged.”
- Around 10,950 px the third About copy appears: “Without story, tech falls flat.”
- Around 14,000 px the camera enters the Work tunnel.
- Around 23,150 px the Contact interface is centered over the final room.
- Scroll is smooth, continuous, and updates the WebGL camera rather than moving DOM sections.

## Click sweep

- ABOUT, WORK, and CONTACT buttons animate directly to their scene anchors.
- WORK becomes accent colored and receives a thin focus/active rectangle.
- Project-card activation is performed by the rendered canvas hit target. The hidden accessible button alone does not open the detail; a pointer click on the visible card does.
- Detail mode shows a 114 × 42 px close control, a two-column case-study view, media hover zoom, and optional lightbox.

## Hover sweep

- Header nav opacity changes to .8 on hover and .6 when active/pressed; transition 200 ms.
- Social tiles move from `rgba(0,5,8,.5)` to `.7`, border alpha .1 to .2, and scale their icon to 1.05.
- Work detail media scales to 1.02 over 300 ms.

## Responsive sweep

- The source switches most detail layouts at 1200 px and contact/social layouts at 768/760/640 px.
- At ≤1200 px project detail becomes a vertically flowing layout.
- At ≤760 px contact social links form a 2 × 2 grid.
- A 390 px desktop-UA viewport caused the live Aura scene to stall at 98% with missing WebGL scene objects. The clone therefore preserves the source code but this upstream mobile-emulation defect remains a known reference limitation.
