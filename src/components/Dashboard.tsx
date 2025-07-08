import { useNavigate } from 'react-router';
import { useTaskContext } from '../contexts/TasksContext';

export default function Dashboard() {
  const { doneCount, totalCount } = useTaskContext();
  const navigate = useNavigate();

  const doneTasksRatio = doneCount / totalCount;

  const colorClasses =
    doneTasksRatio === 0
      ? 'bg-[#f7a59a] text-[#5a2e0c] border-2 border-[#5a2e0c]'
      : doneTasksRatio < 0.25
      ? 'bg-[#f3b16a] text-[#5a2e0c] border-2 border-[#5a2e0c]'
      : doneTasksRatio < 0.5
      ? 'bg-[#f7d878] text-[#5a2e0c] border-2 border-[#5a2e0c]'
      : 'bg-[#6fcf97] text-[#1f4723] border-2 border-[#1f4723]';

  const tasksCount = `${
    doneCount <= 1 ? 'Task' : 'Tasks'
  } done : ${doneCount}/${totalCount} ${doneCount === totalCount ? '🦆' : ''}`;

  return (
    <div>
      <button
        className={`text-5xl font-medium rounded-lg border py-4 px-8 m-2 cursor-pointer hover:brightness-105 hover:scale-105 transition duration-200 ${colorClasses}`}
        onClick={() => navigate('/dashboard')}
      >
        {tasksCount}
      </button>
    </div>
  );
}
