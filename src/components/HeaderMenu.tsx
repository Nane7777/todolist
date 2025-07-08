import { Link } from 'react-router';
import { useTaskContext } from '../contexts/TasksContext';

export function HeaderMenu() {
  const { tasks } = useTaskContext();

  return (
    <nav className='fixed top-0 left-1/2 transform -translate-x-1/2 w-[960px] bg-gray-900 rounded-lg shadow-md z-[999] py-2.5 px-5'>
      <ul className='flex items-center m-0 p-0 list-none'>
        <li className='mr-2.5'>
          <Link
            to='/'
            className='text-white font-medium px-3 py-2 inline-block no-underline cursor-pointer hover:text-gray-300'
          >
            Home
          </Link>
        </li>
        <li className='mr-2.5'>
          <Link
            to='/dashboard'
            className='text-white font-medium px-3 py-2 inline-block no-underline cursor-pointer hover:text-gray-300'
          >
            Dashboard
          </Link>
        </li>
        <li className='relative mr-2.5 group'>
          <span className='text-white font-medium px-3 py-2 inline-block cursor-pointer select-none'>
            Task ▼
          </span>
          <ul className='absolute top-full left-0 bg-gray-700 rounded-md shadow-lg min-w-[180px] z-50 hidden group-hover:block list-none p-0 m-0'>
            {tasks.map((task) => (
              <li
                key={task.id}
                className='px-3 py-2 whitespace-nowrap text-white hover:bg-gray-600 cursor-pointer'
              >
                <Link to={`/task/${task.id}`} className='no-underline'>
                  {task.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link
            to='/*'
            className='text-white font-medium px-3 py-2 inline-block no-underline cursor-pointer hover:text-gray-300'
          >
            Wrong address
          </Link>
        </li>
      </ul>
    </nav>
  );
}
