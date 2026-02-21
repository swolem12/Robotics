import type { ComponentNode } from './types';

export const starterCircuitComponents: ComponentNode[] = [
  {
    id: 'uno-r4-1',
    kind: 'uno-r4',
    label: 'Arduino Uno R4',
    pins: [
      { id: 'uno-5v', name: '5V', role: 'power', componentId: 'uno-r4-1' },
      { id: 'uno-gnd', name: 'GND', role: 'ground', componentId: 'uno-r4-1' },
      { id: 'uno-d9', name: 'D9', role: 'pwm', componentId: 'uno-r4-1' },
      { id: 'uno-d3', name: 'D3', role: 'digital', componentId: 'uno-r4-1' }
    ]
  },
  {
    id: 'led-1',
    kind: 'led',
    label: 'LED',
    pins: [
      { id: 'led-anode', name: 'Anode', role: 'signal', componentId: 'led-1' },
      { id: 'led-cathode', name: 'Cathode', role: 'ground', componentId: 'led-1' }
    ]
  },
  {
    id: 'servo-1',
    kind: 'servo',
    label: 'Servo',
    pins: [
      { id: 'servo-vcc', name: 'VCC', role: 'power', componentId: 'servo-1' },
      { id: 'servo-gnd', name: 'GND', role: 'ground', componentId: 'servo-1' },
      { id: 'servo-sig', name: 'SIG', role: 'signal', componentId: 'servo-1' }
    ]
  }
];
