import { useTaskContext } from '../contexts/TasksContext';
import TaskPrioritySelector from './TaskPrioritySelector';

type TaskPriorityUpdaterProps = {
  taskId: number;
  currentPriority: string;
};

export default function TaskPriorityUpdater({
  taskId,
  currentPriority,
}: TaskPriorityUpdaterProps) {
  const { updateTaskPriority } = useTaskContext();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    updateTaskPriority(taskId, event.target.value);
  };

  return (
    <TaskPrioritySelector
      id={`priority-${taskId}`}
      value={currentPriority}
      onChange={handleChange}
      className={`${currentPriority}`}
    />
  );
}
