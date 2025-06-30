import { useState } from 'react';
import { useTaskContext } from '../contexts/TasksContext';
import DeleteTaskModal from './DeleteTaskModal';
import { Link } from 'react-router';
import TaskPriorityUpdater from './TaskPriorityUpdater';

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

  const priorityColorClass = done
    ? 'bg-green'
    : priority === 'high'
    ? 'bg-red'
    : priority === 'medium'
    ? 'bg-orange'
    : 'bg-yellow';

  const cardClass = `task-card ${priorityColorClass}`;

  const handleConfirmDelete = () => {
    deleteTask(id);
    setShowConfirm(false);
  };

  const handleCancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <article className={cardClass}>
      <Link
        to={`/task/${id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div>
          <h2>{title}</h2>
          <h3>{description}</h3>
          {detailed && (
            <>
              <p>{`Task done ? ${done}`}</p>
              <p>{`Id: ${id}`}</p>
            </>
          )}
        </div>
      </Link>
      <div>
        <TaskPriorityUpdater taskId={id} currentPriority={priority} />
        <button onClick={() => setShowConfirm(true)}>Delete</button>
        <button onClick={() => toggleTask(id)}>Task done</button>
      </div>

      {showConfirm && (
        <DeleteTaskModal
          title='Delete task'
          message='Do you really want to delete this task ?'
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </article>
  );
}
