import { useField } from 'formik';

type TextInputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({ label, ...props }: TextInputProps) {
  const [field, meta] = useField(props);
  const isError = meta.error && meta.value !== '';
  const inputId = props.id || props.name;

  return (
    <>
      <label
        htmlFor={inputId}
        className='block mb-[0.2rem] font-medium text-[#333]'
      >
        {label}
      </label>
      <input
        id={inputId}
        className={`w-full mb-2 px-2 py-[0.35rem] border border-sky-300 rounded text-base ${
          isError ? 'text-red-500' : undefined
        }`}
        {...field}
        {...props}
      />
      <div className='text-red-600 text-[0.9rem] -mt-[0.3rem] mb-[0.4rem]'>
        {isError ? meta.error : null}
      </div>
    </>
  );
}
