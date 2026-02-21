import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="panel stack-md">
      <h2>Page not found</h2>
      <p>The route you requested is not part of the current training interface.</p>
      <Link className="button" to="/">
        Return Home
      </Link>
    </section>
  );
}
