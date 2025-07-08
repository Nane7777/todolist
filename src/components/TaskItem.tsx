import { useState } from 'react';
import { useTaskContext } from '../contexts/TasksContext';
import DeleteTaskModal from './DeleteTaskModal';
import { Link } from 'react-router';
import TaskPriorityUpdater from './TaskPriorityUpdater';
import Button from './Button';
import {
  getPriorityClasses,
  getButtonPriorityClasses,
  type PriorityColor,
} from '../utils/colorsPriority';

type TaskItemProps = {
  taskId: number;
  detailed: boolean;
};

export default function TaskItem({ taskId, detailed }: TaskItemProps) {
  const { tasks, deleteTask, toggleTask } = useTaskContext();
  const [showConfirm, setShowConfirm] = useState(false);
  const task = tasks.find((task) => task.id === taskId);

  if (!task) return null;

  const { id, title, description, done, priority } = task;

  const priorityColor: PriorityColor = done
    ? 'green'
    : priority === 'high'
    ? 'red'
    : priority === 'medium'
    ? 'orange'
    : 'yellow';

  const priorityClass = getPriorityClasses(priorityColor);
  const buttonPriorityClass = getButtonPriorityClasses(priorityColor);

  const handleConfirmDelete = () => {
    deleteTask(id);
    setShowConfirm(false);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <article
      className={`relative overflow-hidden rounded-lg p-4 cursor-pointer hover:scale-105 transition duration-200 ${priorityClass}`}
    >
      <Link
        to={`/task/${id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
        className='block relative z-10'
      >
        <div>
          <h2 className='text-2xl font-semibold'>{title}</h2>
          <h3 className='text-xl'>{description}</h3>
          {detailed && <p className='mt-4 font-semibold'>{`Id: ${id}`}</p>}
        </div>
      </Link>
      <div className='mt-3'>
        <TaskPriorityUpdater taskId={id} currentPriority={priority} />
        <Button
          className={buttonPriorityClass}
          onClick={() => setShowConfirm(true)}
        >
          Delete
        </Button>
        <Button className={buttonPriorityClass} onClick={() => toggleTask(id)}>
          Task done
        </Button>
      </div>

      {showConfirm && (
        <DeleteTaskModal
          title='Delete task'
          message={`Do you really want to delete this task : ${task.title} ?`}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </article>
  );
}
