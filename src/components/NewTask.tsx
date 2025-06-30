import { useTaskContext } from '../contexts/TasksContext';
import * as Yup from 'yup';
import {
  Form,
  useField,
  type FormikHelpers,
  Formik,
  Field,
  type FieldProps,
} from 'formik';
import type { ReactNode } from 'react';
import TaskPrioritySelector from './TaskPrioritySelector';

type NewTaskValues = {
  task: string;
  description: string;
  done: boolean;
  priority: string;
};

const MyTextInput = ({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) => {
  // field = Field props (label, name, onChange)
  // meta = Field state (touched, error, ...)
  const [field, meta] = useField(props);
  const isError = meta.error && meta.value !== '';
  const inputId = props.id || props.name;

  return (
    <>
      {/* <div>{`${label} feedback : ${meta.value}`}</div> */}
      {/* &nbsp; = create space between html tags */}
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        style={{ color: isError ? 'red' : undefined }}
        {...field}
        {...props}
      />
      <div className='error'>{isError ? meta.error : null}</div>
    </>
  );
};

const MyCheckbox = ({
  children,
  ...props
}: { children: ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  const isError = meta.touched && meta.error;
  const inputId = props.id || props.name;

  return (
    <>
      <div className='checkbox-input'>
        <label htmlFor={inputId}>
          <input id={inputId} type='checkbox' {...field} {...props} />
          <span>{children}</span>
        </label>
      </div>
      bonjour
      <div className='error'>{isError ? meta.error : null}</div>
    </>
  );
};

// const MySelect = ({
//   label,
//   ...props
// }: { label: string } & React.SelectHTMLAttributes<HTMLSelectElement>) => {
//   const [field, meta] = useField(props);
//   const isError = meta.touched && meta.error;

//   return (
//     <div>
//       <label htmlFor={props.id || props.name}>{label}</label>
//       <select {...field} {...props} />
//       {isError ? <div className='error'>{meta.error}</div> : null}
//     </div>
//   );
// };

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
          <Form className='new-task-form'>
            <MyTextInput
              label='Your task'
              name='task'
              type='text'
              placeholder='Insert your task here'
            />
            <MyTextInput
              label='Task description'
              name='description'
              type='text'
              placeholder='Insert your task description here'
            />
            <MyCheckbox name='done'>Task already done ?</MyCheckbox>``
            <Field
              name='priority'
              render={({ field, meta }: FieldProps) => (
                <TaskPrioritySelector {...field} error={meta.error} />
              )}
            />
            {/* button disabled if the form is not valid or hasn't been filled */}
            <button type='submit' disabled={!isValid || !dirty}>
              Add task
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
