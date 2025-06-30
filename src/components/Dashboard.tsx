import { useNavigate } from 'react-router';
import { useTaskContext } from '../contexts/TasksContext';

export default function Dashboard() {
  const { doneCount, totalCount } = useTaskContext();
  const navigate = useNavigate();

  const doneTasksRatio = doneCount / totalCount;

  const tasksCountClass =
    doneTasksRatio === 0
      ? 'bg-red'
      : doneTasksRatio < 0.25
      ? 'bg-orange'
      : doneTasksRatio < 0.5
      ? 'bg-yellow'
      : doneTasksRatio < 1
      ? 'bg-green'
      : 'bg-green';

  const tasksCount = `${
    doneCount <= 1 ? 'Task' : 'Tasks'
  } done : ${doneCount}/${totalCount} ${doneCount === totalCount ? '🦆' : ''}`;

  return (
    <div>
      <button
        className={`dashboard-button ${tasksCountClass}`}
        onClick={() => navigate('/dashboard')}
      >
        {tasksCount}
      </button>
    </div>
  );
}
