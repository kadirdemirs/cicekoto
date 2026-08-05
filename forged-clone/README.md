# Forged visual clone

This isolated subproject mirrors the public `forged.build` experience without replacing the existing Cicek Otomotiv website in the repository root.

```powershell
node ..\scripts\download-assets.mjs
npm.cmd install
npm.cmd run dev
```

The page is a WebGL/Aura application. Its scroll-driven camera choreography, project wall, project detail view, and contact scene are supplied by the mirrored runtime package. Third-party analytics scripts are removed from the local HTML.

All public media, fonts, runtime files, and the WebGPU shader cache used during inspection are stored under `assets/`, so the clone does not depend on Forged's protected runtime endpoints. Run `npm.cmd run build` to create the production output.

The upstream Aura scene currently has an intermittent WebGPU issue in the inspected Chromium environment: after loading reaches 100%, both the source site and the clone can render a blank canvas on a fresh reload. The captured reference frames in `../docs/design-references/` document the successfully rendered source states.
