import TaskItem from './TaskItem';
import { useTaskContext } from '../contexts/TasksContext';

type TaskListProps = {
  detailed: boolean;
};

export default function TaskList({ detailed }: TaskListProps) {
  const { tasks } = useTaskContext();

  return (
    <ul className='flex flex-wrap gap-4 p-0 list-none m-0 mx-auto max-w-[1200px] justify-center'>
      {tasks.map((task) => (
        <li
          key={task.id}
          className='flex-grow flex-shrink basis-[250px] max-w-[300px] box-border'
        >
          <TaskItem taskId={task.id} detailed={detailed}></TaskItem>
        </li>
      ))}
    </ul>
  );
}
