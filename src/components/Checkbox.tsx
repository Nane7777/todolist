import type { ReactNode } from 'react';
import { useField } from 'formik';

type CheckboxProps = {
  children: ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({ children, ...props }: CheckboxProps) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  const isError = meta.touched && meta.error;
  const inputId = props.id || props.name;

  return (
    <>
      <div className='flex items-center text-base cursor-default select-none hover:brightness-105 hover:scale-105 transition duration-200'>
        <label
          htmlFor={inputId}
          className='inline-flex items-center gap-[0.4rem] cursor-pointer mb-[0.2rem] font-medium text-[#333]'
        >
          <input
            id={inputId}
            type='checkbox'
            className='peer flex items-center text-base cursor-pointer select-none'
            {...field}
            {...props}
          />
          <span className='px-[0.4rem] py-[0.15rem] rounded-md bg-[#f7a59a] peer-checked:bg-[#3cb371] peer-checked:text-white'>
            {children}
          </span>
        </label>
      </div>
      <div className='text-red-600 text-[0.9rem] -mt-[0.3rem] mb-[0.4rem]'>
        {isError ? meta.error : null}
      </div>
    </>
  );
}
