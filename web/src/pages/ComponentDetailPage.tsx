import { Link, useParams } from 'react-router-dom';
import { assetSummaries } from '../data/assetsCatalog';

export function ComponentDetailPage() {
  const { componentId } = useParams();
  const component = assetSummaries.find((item) => item.componentId === componentId);

  if (!component) {
    return (
      <section className="panel stack-md">
        <h2>Component not found</h2>
        <Link className="button" to="/components">
          Back to Library
        </Link>
      </section>
    );
  }

  return (
    <section className="panel stack-md">
      <h2>{component.label}</h2>
      <p>Category: {component.category}</p>
      <p>Source STEP: {component.sourcePath}</p>
      <p>
        Metadata integration is scaffolded. Next: define pin anchors and behavior mappings for
        simulation.
      </p>
      <div>
        <Link className="button" to="/components">
          Back to Library
        </Link>
      </div>
    </section>
  );
}
