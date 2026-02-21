# Robotics

3D Arduino robotics training interface for STEM education.

## Vision
Students assemble virtual Arduino circuits in 3D, connect wires at pin level, and receive immediate simulation feedback when wiring is correct.

## Current Implementation
- STEP assets reorganized into `assets/` with normalized naming and manifests.
- Web app scaffold in `web/` using React + TypeScript + Vite + React Three Fiber.
- Full route map with page shells:
	- `/` landing
	- `/simulator`
	- `/lessons`
	- `/components`
	- `/docs`
	- `/admin/assets`
- Simulator workspace layout scaffolded (top controls, left checklist, center 3D scene, right inspector, bottom timeline).
- Starter circuit validation loop preserved for Uno R4 + LED + Servo.
- Real 3D scene now loads converted CAD models from STEP assets (`UNO R4`, `Breadboard`, `DM542T`).

## Asset Structure
- `assets/cad/raw-step/` grouped by category for intake.
- `assets/cad/normalized-step/` reserved for cleaned STEP derivatives.
- `assets/3d/glb/` reserved for runtime models.
- `assets/metadata/components/` component metadata skeletons.
- `assets/manifests/asset-rename-map.json` old-to-new file mapping.
- `assets/manifests/asset-review-queue.json` duplicate/variant review tracking.

## Run Locally
1. `cd web`
2. `npm install`
3. `npm run dev`

## STEP to 3D Model Workflow
1. Install conversion tools (Ubuntu):
	- `sudo apt install -y gmsh assimp-utils`
2. Convert all STEP assets to GLB:
	- `./scripts/convert_step_to_glb.sh`
3. Sync converted models to web runtime directory:
	- `./scripts/sync_models_to_web.sh`

Runtime model path used by the app: `web/public/models/**`.

## Publish to GitHub Pages
- A deployment workflow is configured at `.github/workflows/deploy-gh-pages.yml`.
- On every push to `main`, GitHub Actions builds `web/` and deploys `web/dist` to Pages.
- Vite base path is auto-configured from the repository name in CI.
- SPA route fallback is handled by generating `dist/404.html` during `npm run build:pages`.

### One-time repository setup
1. Go to **Settings → Pages** for this repository.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` and wait for the **Deploy GitHub Pages** workflow to complete.
4. Site URL will be: `https://swolem12.github.io/Robotics/`.

## Documentation
- `docs/product-brief.md`
- `docs/architecture.md`
- `docs/asset-pipeline.md`
- `docs/simulation-spec.md`
- `docs/roadmap.md`
- `docs/web-interface.md`
- `docs/mvp-checklist.md`

## Next Steps
1. Convert selected STEP files to optimized GLB assets.
2. Define pin anchors and connector metadata in `assets/metadata/components`.
3. Bind runtime asset loading into `/simulator` scene.
4. Expand lesson engine and assessment checkpoints.