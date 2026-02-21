# STEP Asset Pipeline

## Goal
Convert incoming STEP files into runtime-optimized, simulation-ready 3D assets.

## Repository Structure
- `assets/cad/raw-step/` incoming normalized STEP files grouped by category.
- `assets/cad/normalized-step/` validated/cleaned STEP derivatives.
- `assets/3d/glb/` runtime model output.
- `assets/metadata/components/` metadata JSON per component.
- `assets/manifests/asset-rename-map.json` mapping from source names to normalized names.
- `assets/manifests/asset-review-queue.json` duplicate and quality review queue.

## Pipeline
1. Intake STEP assembly into `assets/cad/raw-step`.
2. Normalize names and classify by category.
3. Mark duplicate/variant candidates in review queue.
4. Convert STEP to intermediate CAD format if needed.
5. Export glTF/GLB for web delivery.
6. Generate metadata JSON for component IDs and anchor points.
7. Validate orientation, scale, and pivot alignment.

## Naming Convention
- `componentName_variant_v{major}.{minor}.glb`
- Metadata file: `componentName_variant_v{major}.{minor}.json`

## Required Metadata
- Component ID
- Mount/connector anchors
- Pin anchor coordinates
- Bounding box and nominal dimensions

## Acceptance Checklist
- Correct unit scale in scene.
- Correct up-axis and origin placement.
- Mesh triangle count within budget.
- Anchors align with circuit connection points.
