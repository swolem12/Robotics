# MVP Checklist

## Asset System
- [x] All STEP assets moved under `assets/cad/raw-step`.
- [x] STEP filenames normalized to lowercase kebab-case.
- [x] Rename mapping captured in `assets/manifests/asset-rename-map.json`.
- [x] Review queue created in `assets/manifests/asset-review-queue.json`.
- [x] Component metadata skeletons generated in `assets/metadata/components`.

## Web Platform
- [x] Route-based app shell implemented.
- [x] Landing page scaffolded.
- [x] Simulator workspace layout scaffolded.
- [x] Lessons and components routes scaffolded.
- [x] In-app docs and asset-admin routes scaffolded.

## Simulator
- [x] Starter wiring and validation loop preserved.
- [x] Event timeline region present.
- [x] Pin-to-pin connection controls available.

## Next Integration Milestone
- [ ] Convert selected STEP assets to GLB.
- [ ] Populate pin anchors and connector metadata.
- [ ] Replace scene primitives with asset-driven component rendering.
- [ ] Add lesson objective engine with pass/fail checkpoints.
