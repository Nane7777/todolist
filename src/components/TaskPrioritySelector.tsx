type TaskPrioritySelectorProps = {
  error?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export default function TaskPrioritySelector({
  error,
  ...props
}: TaskPrioritySelectorProps) {
  return (
    <div>
      <select
        {...props}
        className={`px-1.25 py-1.25 text-lg text-center rounded-lg border-2 my-1.25 focus:outline-none ${
          props.className ?? ''
        }`}
      >
        <option value='low'>Low</option>
        <option value='medium'>Medium</option>
        <option value='high'>High</option>
      </select>
      {error ? <div className='error'>{error}</div> : null}
    </div>
  );
}
