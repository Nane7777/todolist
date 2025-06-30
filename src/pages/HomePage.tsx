import Dashboard from '../components/Dashboard';
import NewTask from '../components/NewTask';
import TaskList from '../components/TaskList';

export function HomePage() {
  return (
    <div>
      <Dashboard />
      <NewTask />
      <TaskList detailed={false} />
    </div>
  );
}
