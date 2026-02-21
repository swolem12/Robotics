import { reviewQueue } from '../data/assetsCatalog';

export function AdminAssetsPage() {
  return (
    <section className="panel stack-md">
      <h2>Asset Intake Admin</h2>
      <p>Track ingestion quality, review duplicates, and prepare assets for simulation release.</p>

      <article className="card stack-sm">
        <h3>Review Queue</h3>
        <ul className="list">
          {reviewQueue.map((item) => (
            <li key={item.path}>
              {item.componentKey} — {item.status}
              <div className="subtle">{item.path}</div>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
