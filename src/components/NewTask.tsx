import { useTaskContext } from '../contexts/TasksContext';
import * as Yup from 'yup';
import {
  Form,
  type FormikHelpers,
  Formik,
  Field,
  type FieldProps,
} from 'formik';
import TaskPrioritySelector from './TaskPrioritySelector';
import TextInput from './TextInput';
import Checkbox from './Checkbox';

type NewTaskValues = {
  task: string;
  description: string;
  done: boolean;
  priority: string;
};

export default function NewTask() {
  const { addNewTask } = useTaskContext();
  const initialValues: NewTaskValues = {
    task: '',
    description: '',
    done: false,
    priority: 'medium',
  };

  // Validation schema with a generic word
  const stringWithForbiddenWord = (forbiddenWord: string) =>
    Yup.string()
      .trim()
      .required('That field must be filled.')
      .test(
        'forbidden-word',
        `${forbiddenWord} is not a valid value.`,
        (value) => !value?.toLowerCase().includes(forbiddenWord.toLowerCase())
      );

  const validationSchema = Yup.object({
    task: stringWithForbiddenWord('Task'),
    description: stringWithForbiddenWord('Description'),
  });
  const onSubmit = (
    values: NewTaskValues,
    { resetForm }: FormikHelpers<NewTaskValues>
  ) => {
    addNewTask(values.task, values.description, values.done, values.priority);
    resetForm();
  };

  return (
    <div>
      <Formik<NewTaskValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isValid, dirty }) => (
          <Form className='max-w-[25em] mx-auto my-4 p-[1rem] px-[1.2rem] border border-sky-300 rounded-md shadow-sm font-sans text-base'>
            <TextInput
              label='Your task'
              name='task'
              type='text'
              placeholder='Insert your task here'
            />
            <TextInput
              label='Task description'
              name='description'
              type='text'
              placeholder='Insert your task description here'
            />
            <Checkbox name='done'>Task already done ?</Checkbox>
            <Field
              name='priority'
              render={({ field, meta }: FieldProps) => (
                <TaskPrioritySelector {...field} error={meta.error} />
              )}
            />
            {/* button disabled if the form is not valid or hasn't been filled */}
            <button
              type='submit'
              disabled={!isValid || !dirty}
              className={`mt-5 rounded-lg text-[1rem] px-4 py-[0.45rem] font-medium ${
                !isValid || !dirty
                  ? 'bg-white border border-sky-300 text-black cursor-not-allowed'
                  : 'bg-[#1976d2] text-white border-none cursor-pointer hover:brightness-125 hover:scale-105 transition duration-200'
              }
  `}
            >
              Add task
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
