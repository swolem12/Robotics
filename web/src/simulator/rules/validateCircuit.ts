import type { CircuitState, ValidationResult } from '../models/types';

function hasDirectWire(
  wires: CircuitState['wires'],
  pinA: string,
  pinB: string
): boolean {
  return wires.some(
    (wire) =>
      (wire.fromPinId === pinA && wire.toPinId === pinB) ||
      (wire.fromPinId === pinB && wire.toPinId === pinA)
  );
}

export function validateStarterCircuit(state: CircuitState): ValidationResult {
  const messages: string[] = [];

  const ledPower = hasDirectWire(state.wires, 'uno-d3', 'led-anode');
  const ledGround = hasDirectWire(state.wires, 'uno-gnd', 'led-cathode');

  const servoPower = hasDirectWire(state.wires, 'uno-5v', 'servo-vcc');
  const servoGround = hasDirectWire(state.wires, 'uno-gnd', 'servo-gnd');
  const servoSignal = hasDirectWire(state.wires, 'uno-d9', 'servo-sig');

  if (!ledPower || !ledGround) {
    messages.push('Connect LED anode to D3 and cathode to GND.');
  }

  if (!servoPower || !servoGround || !servoSignal) {
    messages.push('Connect Servo VCC->5V, GND->GND, SIG->D9.');
  }

  return {
    isValid: messages.length === 0,
    messages: messages.length ? messages : ['Circuit validated. Simulation ready.']
  };
}
