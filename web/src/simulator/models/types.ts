export type ComponentKind =
  | 'uno-r4'
  | 'led'
  | 'servo'
  | 'stepper-driver'
  | 'stepper-motor';

export type PinRole = 'power' | 'ground' | 'digital' | 'pwm' | 'signal';

export interface Pin {
  id: string;
  name: string;
  role: PinRole;
  componentId: string;
}

export interface ComponentNode {
  id: string;
  kind: ComponentKind;
  label: string;
  pins: Pin[];
}

export interface WireConnection {
  id: string;
  fromPinId: string;
  toPinId: string;
}

export interface CircuitState {
  components: ComponentNode[];
  wires: WireConnection[];
}

export interface ValidationResult {
  isValid: boolean;
  messages: string[];
}
