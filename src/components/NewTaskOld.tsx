// import type { ChangeEvent, FormEvent } from 'react';
// import { useCallback, useMemo, useState } from 'react';
// import { useTaskContext } from '../contexts/TasksContext';

// export default function NewTaskOld() {
//   const { addNewTask } = useTaskContext();
//   const [task, setTask] = useState<string>('');
//   const [description, setDescription] = useState<string>('');

//   const handleSubmit = useCallback(
//     (event: FormEvent<HTMLFormElement>) => {
//       event.preventDefault();

//       if (!task.trim() || !description.trim()) return;

//       addNewTask(task, description);
//       setTask('');
//       setDescription('');
//     },
//     [addNewTask, description, task]
//   );

//   //TODO function useCallback !
//   const handleTaskChange = useCallback(
//     (event: ChangeEvent<HTMLInputElement>) => {
//       setTask(event.target.value);
//     },
//     []
//   );

//   const handleDescriptionChange = useCallback(
//     (event: ChangeEvent<HTMLInputElement>) => {
//       setDescription(event.target.value);
//     },
//     []
//   );

//   //TODO useMemo !
//   const isSubmitDisabled = useMemo(() => {
//     return !task.trim() || !description.trim();
//   }, [task, description]);

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>
//         <label htmlFor='task'>Your task </label>
//         <input
//           id='task'
//           type='text'
//           value={task}
//           onChange={handleTaskChange}
//           style={{
//             color: task.toLowerCase().includes('task') ? 'red' : undefined,
//           }}
//         />
//       </p>
//       <p>{`Task feedback ${task}`}</p>
//       <p>
//         <label htmlFor='description'>Your task description </label>
//         <input
//           id='description'
//           type='text'
//           value={description}
//           onChange={handleDescriptionChange}
//           style={{
//             color: description.toLowerCase().includes('description')
//               ? 'red'
//               : undefined,
//           }}
//         />
//       </p>
//       <p>{`Description feedback ${description}`}</p>
//       {/**/}
//       {/* When you type 'task' in task input  => set the color to 'red' */}
//       {/* Add validation, if empty => submit button is disabled */}
//       <p>
//         <button disabled={isSubmitDisabled}>Add task</button>
//       </p>
//     </form>
//   );
// }
