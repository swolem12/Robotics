import { Link } from 'react-router-dom';

const lessons = [
  {
    id: 'starter-led-servo',
    title: 'Starter Circuit: LED + Servo',
    summary: 'Wire an Uno R4 to drive an LED output and servo control signal.'
  },
  {
    id: 'stepper-driver-basics',
    title: 'Stepper Driver Fundamentals',
    summary: 'Understand step/direction wiring patterns and motor power separation.'
  },
  {
    id: 'sensor-to-actuator-loop',
    title: 'Sensor to Actuator Control',
    summary: 'Read sensor states and trigger robotic actions in a closed loop.'
  }
];

export function LessonsPage() {
  return (
    <section className="panel stack-md">
      <h2>Lesson Library</h2>
      <p>Guided modules for progressively building robotics and embedded systems skills.</p>
      <div className="card-grid">
        {lessons.map((lesson) => (
          <article className="card" key={lesson.id}>
            <h3>{lesson.title}</h3>
            <p>{lesson.summary}</p>
            <Link className="button" to={`/lessons/${lesson.id}`}>
              Open Lesson
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
