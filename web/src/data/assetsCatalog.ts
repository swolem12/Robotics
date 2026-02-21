export type AssetCategory =
  | 'boards'
  | 'displays'
  | 'sensors'
  | 'power'
  | 'switching'
  | 'semiconductors'
  | 'electromechanical'
  | 'prototyping';

export interface AssetSummary {
  componentId: string;
  label: string;
  category: AssetCategory;
  sourcePath: string;
}

export const assetSummaries: AssetSummary[] = [
  {
    componentId: 'uno-r4-wifi',
    label: 'UNO R4 WiFi',
    category: 'boards',
    sourcePath: 'assets/cad/raw-step/boards/uno-r4-wifi.step'
  },
  {
    componentId: 'arduino-uno-r3',
    label: 'Arduino UNO R3',
    category: 'boards',
    sourcePath: 'assets/cad/raw-step/boards/arduino-uno-r3.step'
  },
  {
    componentId: 'arduino-nano-33-iot',
    label: 'Arduino Nano 33 IoT',
    category: 'boards',
    sourcePath: 'assets/cad/raw-step/boards/arduino-nano-33-iot.step'
  },
  {
    componentId: 'oled-display-128x64',
    label: 'OLED Display 128x64',
    category: 'displays',
    sourcePath: 'assets/cad/raw-step/displays/oled-display-128x64.step'
  },
  {
    componentId: 'dht11-temp-humidity-sensor',
    label: 'DHT11 Temp/Humidity Sensor',
    category: 'sensors',
    sourcePath: 'assets/cad/raw-step/sensors/dht11-temp-humidity-sensor.step'
  },
  {
    componentId: 'sparkfun-sen-12041-capacitive-touch-sensor',
    label: 'SparkFun Capacitive Touch Sensor',
    category: 'sensors',
    sourcePath: 'assets/cad/raw-step/sensors/sparkfun-sen-12041-capacitive-touch-sensor.step'
  },
  {
    componentId: '9-volt-battery',
    label: '9-Volt Battery',
    category: 'power',
    sourcePath: 'assets/cad/raw-step/power/9-volt-battery.step'
  },
  {
    componentId: 'relay-module-5v',
    label: 'Relay Module 5V',
    category: 'switching',
    sourcePath: 'assets/cad/raw-step/switching/relay-module-5v.step'
  },
  {
    componentId: 'dm542t-digital-stepper-drive',
    label: 'DM542T Digital Stepper Drive',
    category: 'electromechanical',
    sourcePath: 'assets/cad/raw-step/electromechanical/dm542t-digital-stepper-drive.step'
  },
  {
    componentId: 'bourns-ace128-rotary-encoder',
    label: 'BOURNS ACE128 Rotary Encoder',
    category: 'electromechanical',
    sourcePath: 'assets/cad/raw-step/electromechanical/bourns-ace128-rotary-encoder.step'
  },
  {
    componentId: 'transistor-s8050-npn',
    label: 'Transistor S8050 NPN',
    category: 'semiconductors',
    sourcePath: 'assets/cad/raw-step/semiconductors/transistor-s8050-npn.step'
  },
  {
    componentId: 'breadboard',
    label: 'Breadboard',
    category: 'prototyping',
    sourcePath: 'assets/cad/raw-step/prototyping/breadboard.step'
  }
];

export const reviewQueue = [
  {
    componentKey: 'arduino-nano-flashtree-shield',
    path: 'assets/cad/raw-step/boards/shield-for-arduino-nano-flashtree.step',
    status: 'needs-geometry-review'
  },
  {
    componentKey: 'arduino-nano-flashtree-shield',
    path: 'assets/cad/raw-step/boards/shield-for-arduino-nano-flashtree-v2.step',
    status: 'needs-geometry-review'
  }
] as const;

export const categoryDisplayOrder: AssetCategory[] = [
  'boards',
  'displays',
  'sensors',
  'power',
  'switching',
  'semiconductors',
  'electromechanical',
  'prototyping'
];
