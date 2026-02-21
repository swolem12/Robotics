import { NavLink, Outlet } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/simulator', label: 'Simulator' },
  { to: '/lessons', label: 'Lessons' },
  { to: '/components', label: 'Components' },
  { to: '/docs', label: 'Docs' },
  { to: '/admin/assets', label: 'Asset Admin' }
];

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div>
          <h1>Arduino Robotics Trainer</h1>
          <p>3D STEM learning platform for real-world wiring and simulation.</p>
        </div>
        <nav>
          <ul className="nav-list">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
    </div>
  );
}
