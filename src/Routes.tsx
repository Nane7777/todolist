import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import TaskPage from './pages/TaskPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/dashboard' element={<DashboardPage />} />
      <Route path='/task/:taskId' element={<TaskPage />} />
      <Route path='/*' element={<NotFoundPage />} />
    </Routes>
  );
}
