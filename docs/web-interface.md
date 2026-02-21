# Web Interface Plan

## Route Map
- `/` landing page with project framing and calls to action.
- `/simulator` interactive robotics workspace.
- `/lessons` lesson catalog.
- `/lessons/:lessonId` lesson detail and guided flow.
- `/components` asset-backed component library.
- `/components/:componentId` component details and simulation readiness.
- `/docs` in-app docs hub.
- `/admin/assets` asset intake and QA queue.

## Landing Page Sections
1. Hero with value proposition and primary actions.
2. Learning loop: assemble → wire → validate → simulate.
3. STEM outcomes and skills progression.

## Simulator Workspace Layout
- Top bar: objective + run controls.
- Left rail: lesson checklist.
- Center: 3D workbench.
- Right rail: pin selector + rule feedback.
- Bottom panel: event timeline.

## MVP Interaction Loop
1. Choose a lesson objective.
2. Connect pins in the wiring panel.
3. Run validation rules.
4. Observe simulation state in the scene.
5. Iterate based on feedback until complete.

## Next UI Build Targets
- Replace placeholder models with converted GLB assets.
- Add drag-and-place component interactions in 3D.
- Add guided hint progression and scoring events per lesson.
