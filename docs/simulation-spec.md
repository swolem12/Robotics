# Simulation Specification (MVP)

## Electrical Rules
- Power pins connect only to valid supply sources.
- Ground pins must resolve to board ground.
- Signal pins enforce type compatibility (`digital`, `pwm`, `signal`).

## Starter Circuit Scenario
- LED: `D3 -> Anode`, `GND -> Cathode`.
- Servo: `5V -> VCC`, `GND -> GND`, `D9 -> SIG`.

## Validation Output
- `isValid = true` only when all required edges exist.
- Feedback returns learner-facing correction prompts.

## Runtime Behavior (MVP)
- On valid circuit: LED shown active, servo state enabled.
- On invalid circuit: simulation remains disabled with targeted hints.

## Stepper Placeholder
- Define stepper driver pins and required wiring pattern.
- Implement full sequence simulation in Phase 1 extension.
