# AboutScrollScenes Specification

## Overview

- Screenshots: `forged-desktop-transition.png`, `forged-desktop-work.png`, `forged-desktop-projects.png`
- Interaction model: scroll driven WebGL camera sequence

## Content

- “This isn't just digital. It's built.”
- “Immersive experiences are forged from a mix of software and hardware but the best are driven by the unshakable drive to innovate. We leverage the latest in AI, XR, and digital-at-large to concept, design, and build best-in-class brand experiences.”
- “Leaner, Sharper, Forged.”
- “Michael Modena spent 13 years building a leading studio in immersive digital craft. Now, he's starting fresh; focused on creating the next generation of interactive experiences with unmatched efficiency and creative possibility.”
- “Without story, tech falls flat.”
- “If you've got a story to tell, let us help you bring it to life. From idea to execution, whether it's an installation or microsite, we'll partner with your team to deliver your vision end-to-end.”

## Behavior

- Door motion, camera movement, lighting, car/workshop parallax, and copy opacity all derive from `.RTScroll.scrollTop`.
- Copy is rendered inside the WebGL composition, not as ordinary layout DOM.
