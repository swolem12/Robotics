import { Link, useParams } from 'react-router-dom';

export function LessonDetailPage() {
  const { lessonId } = useParams();

  return (
    <section className="panel stack-md">
      <h2>Lesson: {lessonId}</h2>
      <p>This lesson scaffold will host objectives, wiring hints, checkpoints, and scoring.</p>
      <ol className="list ordered">
        <li>Read objective and component requirements.</li>
        <li>Open simulator workspace and build the required circuit.</li>
        <li>Validate wiring and pass completion checks.</li>
      </ol>
      <div>
        <Link className="button" to="/simulator">
          Continue in Simulator
        </Link>
      </div>
    </section>
  );
}
