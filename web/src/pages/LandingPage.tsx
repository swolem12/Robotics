import { Link } from 'react-router-dom';

const outcomes = [
  'Understand digital and PWM pin behavior in real robotics scenarios.',
  'Build confidence debugging circuits through instant validation feedback.',
  'Learn actuator control patterns for LEDs, servos, and stepper systems.'
];

const sections = [
  {
    title: 'Assemble',
    body: 'Place Arduino boards and components in a virtual 3D workbench.'
  },
  {
    title: 'Wire',
    body: 'Connect pin-to-pin relationships as if you were physically building a circuit.'
  },
  {
    title: 'Validate',
    body: 'Run deterministic wiring checks and receive actionable feedback on mistakes.'
  },
  {
    title: 'Simulate',
    body: 'Observe behavior and iterate quickly to understand cause and effect.'
  }
];

export function LandingPage() {
  return (
    <div className="stack-lg">
      <section className="panel hero">
        <h2>Build and test robotics circuits in a full 3D learning workspace.</h2>
        <p>
          This platform teaches STEM through interactive Arduino simulation, from wiring basics
          to servo and stepper control.
        </p>
        <div className="hero-actions">
          <Link className="button" to="/simulator">
            Launch Simulator
          </Link>
          <Link className="button secondary" to="/lessons">
            Explore Lessons
          </Link>
        </div>
      </section>

      <section className="panel">
        <h3>Learning Loop</h3>
        <div className="card-grid four">
          {sections.map((section) => (
            <article key={section.title} className="card">
              <h4>{section.title}</h4>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <h3>What Students Learn</h3>
        <ul className="list">
          {outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
