import Dashboard from '../components/Dashboard';
import TaskList from '../components/TaskList';

export function DashboardPage() {
  return (
    <div>
      <Dashboard />
      <TaskList detailed />
    </div>
  );
}
