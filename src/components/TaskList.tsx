import TaskItem from './TaskItem';
import { useTaskContext } from '../contexts/TasksContext';

type TaskListProps = {
  detailed: boolean;
};

export default function TaskList({ detailed }: TaskListProps) {
  const { tasks } = useTaskContext();

  return (
    <ul className='task-list'>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem taskId={task.id} detailed={detailed}></TaskItem>
        </li>
      ))}
    </ul>
  );
}
