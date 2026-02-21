import { Link } from 'react-router-dom';
import { assetSummaries, categoryDisplayOrder } from '../data/assetsCatalog';

export function ComponentsPage() {
  return (
    <section className="panel stack-md">
      <h2>Component Library</h2>
      <p>Browsable inventory of assets available for lessons and simulation scenarios.</p>

      {categoryDisplayOrder.map((category) => {
        const items = assetSummaries.filter((asset) => asset.category === category);
        if (items.length === 0) {
          return null;
        }

        return (
          <div key={category} className="stack-sm">
            <h3 className="section-title">{category}</h3>
            <div className="card-grid">
              {items.map((item) => (
                <article className="card" key={item.componentId}>
                  <h4>{item.label}</h4>
                  <p>{item.sourcePath}</p>
                  <Link className="button" to={`/components/${item.componentId}`}>
                    View Details
                  </Link>
                </article>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
