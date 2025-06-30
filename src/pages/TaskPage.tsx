import { useParams } from 'react-router';
import TaskItem from '../components/TaskItem';
import { useTaskContext } from '../contexts/TasksContext';

export default function TaskPage() {
  const { taskId } = useParams();
  const { tasks } = useTaskContext();

  const id = parseInt(taskId || '', 10);
  const task = tasks.find((task) => task.id === id);
  const taskPageStyle = { maxWidth: '250px', marginTop: '25px' };

  if (!task) {
    return <h1>Task not found</h1>;
  }

  return (
    <div className='task-list' style={taskPageStyle}>
      <TaskItem taskId={task.id} detailed={true} />
    </div>
  );
}
