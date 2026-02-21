import { create } from 'zustand';
import { starterCircuitComponents } from '../models/catalog';
import type { CircuitState, ValidationResult, WireConnection } from '../models/types';
import { validateStarterCircuit } from '../rules/validateCircuit';

interface CircuitStore {
  state: CircuitState;
  lastValidation: ValidationResult;
  connectPins: (fromPinId: string, toPinId: string) => void;
  resetWires: () => void;
  validate: () => void;
}

const initialState: CircuitState = {
  components: starterCircuitComponents,
  wires: []
};

const initialValidation: ValidationResult = {
  isValid: false,
  messages: ['Connect components to run simulation.']
};

export const useCircuitStore = create<CircuitStore>((set, get) => ({
  state: initialState,
  lastValidation: initialValidation,
  connectPins: (fromPinId, toPinId) => {
    if (fromPinId === toPinId) {
      return;
    }

    const connection: WireConnection = {
      id: `${fromPinId}-${toPinId}`,
      fromPinId,
      toPinId
    };

    set((store) => {
      const duplicate = store.state.wires.some(
        (wire) =>
          (wire.fromPinId === fromPinId && wire.toPinId === toPinId) ||
          (wire.fromPinId === toPinId && wire.toPinId === fromPinId)
      );

      if (duplicate) {
        return store;
      }

      return {
        ...store,
        state: {
          ...store.state,
          wires: [...store.state.wires, connection]
        }
      };
    });
  },
  resetWires: () => {
    set((store) => ({
      ...store,
      state: {
        ...store.state,
        wires: []
      },
      lastValidation: initialValidation
    }));
  },
  validate: () => {
    const { state } = get();
    set((store) => ({
      ...store,
      lastValidation: validateStarterCircuit(state)
    }));
  }
}));
