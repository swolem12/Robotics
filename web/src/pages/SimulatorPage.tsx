import { useMemo, useState } from 'react';
import { TrainingScene } from '../components/TrainingScene';
import { useCircuitStore } from '../simulator/store/useCircuitStore';

export function SimulatorPage() {
  const { state, connectPins, resetWires, validate, lastValidation } = useCircuitStore();
  const [fromPin, setFromPin] = useState('');
  const [toPin, setToPin] = useState('');

  const allPins = useMemo(
    () =>
      state.components.flatMap((component) =>
        component.pins.map((pin) => ({
          id: pin.id,
          display: `${component.label}: ${pin.name}`
        }))
      ),
    [state.components]
  );

  const onConnect = () => {
    if (!fromPin || !toPin) {
      return;
    }

    connectPins(fromPin, toPin);
    setFromPin('');
    setToPin('');
  };

  return (
    <section className="sim-shell">
      <header className="sim-topbar panel">
        <div>
          <h2>Simulator Workspace</h2>
          <p>Objective: wire LED and Servo correctly to pass validation and run simulation.</p>
        </div>
        <div className="sim-top-actions">
          <button onClick={validate}>Validate Circuit</button>
          <button className="secondary" onClick={resetWires}>
            Reset Wires
          </button>
        </div>
      </header>

      <div className="sim-main-grid">
        <aside className="panel sim-left">
          <h3>Lesson Checklist</h3>
          <ul className="list">
            <li>Connect LED Anode to D3.</li>
            <li>Connect LED Cathode to GND.</li>
            <li>Connect Servo VCC to 5V.</li>
            <li>Connect Servo GND to GND.</li>
            <li>Connect Servo SIG to D9.</li>
          </ul>
        </aside>

        <div className="panel sim-canvas">
          <TrainingScene simulationReady={lastValidation.isValid} />
        </div>

        <aside className="panel sim-right stack-md">
          <div>
            <h3>Pin Inspector</h3>
            <label>
              From Pin
              <select value={fromPin} onChange={(event) => setFromPin(event.target.value)}>
                <option value="">Choose a pin</option>
                {allPins.map((pin) => (
                  <option key={pin.id} value={pin.id}>
                    {pin.display}
                  </option>
                ))}
              </select>
            </label>

            <label>
              To Pin
              <select value={toPin} onChange={(event) => setToPin(event.target.value)}>
                <option value="">Choose a pin</option>
                {allPins.map((pin) => (
                  <option key={pin.id} value={pin.id}>
                    {pin.display}
                  </option>
                ))}
              </select>
            </label>

            <button onClick={onConnect}>Connect Wire</button>
          </div>

          <div>
            <h3>Rule Feedback</h3>
            <ul className="list">
              {lastValidation.messages.map((message) => (
                <li key={message}>{message}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <footer className="panel sim-bottom">
        <h3>Event Timeline</h3>
        <ul className="list">
          {state.wires.length === 0 ? (
            <li>No wires connected yet.</li>
          ) : (
            state.wires.map((wire) => (
              <li key={wire.id}>
                Connected {wire.fromPinId} → {wire.toPinId}
              </li>
            ))
          )}
        </ul>
      </footer>
    </section>
  );
}
