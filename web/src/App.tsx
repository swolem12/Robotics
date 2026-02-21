import { Navigate, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './layouts/SiteLayout';
import { AdminAssetsPage } from './pages/AdminAssetsPage';
import { ComponentDetailPage } from './pages/ComponentDetailPage';
import { ComponentsPage } from './pages/ComponentsPage';
import { DocsPage } from './pages/DocsPage';
import { LandingPage } from './pages/LandingPage';
import { LessonDetailPage } from './pages/LessonDetailPage';
import { LessonsPage } from './pages/LessonsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { SimulatorPage } from './pages/SimulatorPage';

export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/simulator" element={<SimulatorPage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/lessons/:lessonId" element={<LessonDetailPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/components/:componentId" element={<ComponentDetailPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/admin/assets" element={<AdminAssetsPage />} />
      </Route>
      <Route path="/home" element={<Navigate to="/" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
