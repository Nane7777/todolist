import { Link } from 'react-router';
import { useTaskContext } from '../contexts/TasksContext';

export function HeaderMenu() {
  const { tasks } = useTaskContext();

  return (
    <nav className='navbar'>
      <ul className='nav-menu'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li className='dropdown'>
          <span className='dropdown-title'>Task ▼</span>
          <ul className='dropdown-content'>
            {/* Tasks name mapping in the nav bar with dynamic link using id */}
            {tasks.map((task) => (
              <li key={task.id}>
                <Link to={`/task/${task.id}`}>{task.title}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link to='/*'>Wrong address</Link>
        </li>
      </ul>
    </nav>
  );
}
