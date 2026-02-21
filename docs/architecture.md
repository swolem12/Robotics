# Architecture

## Frontend (Web)
- React + TypeScript + Vite.
- `@react-three/fiber` for 3D scene rendering.
- Zustand store for local simulation state.
- React Router for route-based information architecture.

## Route Architecture
- `/` landing and onboarding entry.
- `/simulator` interactive robotics workspace.
- `/lessons` and `/lessons/:lessonId` lesson flow.
- `/components` and `/components/:componentId` component catalog.
- `/docs` learner/instructor docs hub.
- `/admin/assets` internal intake/review page.

## Simulator Layout Regions
- Top bar: objective and validation controls.
- Left rail: lesson checklist and task context.
- Center canvas: 3D training scene.
- Right rail: pin inspector and rule feedback.
- Bottom panel: interaction/event timeline.

## Core Domains
- **Asset Domain:** 3D models loaded as optimized glTF.
- **Circuit Domain:** components, pins, wires, validation rules.
- **Simulation Domain:** behavior outputs (LED on/off, servo ready, stepper state).
- **Lesson Domain:** task objectives and grading criteria.

## Data Contracts
- `ComponentNode`: logical component definition with pins.
- `Pin`: pin role and ownership.
- `WireConnection`: edge between two pins.
- `CircuitState`: graph of placed components and wires.
- `ValidationResult`: rule-check output and learner feedback.

## Optional Hardware Bridge (Phase 1.5+)
- Local serial bridge service for Arduino connection.
- Web app sends validated control events; bridge translates to serial protocol.

## Phase Separation
- Phase 1: deterministic simulation and validation.
- Phase 2: guided lessons and assessments.
- Phase 3: expanded component library and classroom features.
