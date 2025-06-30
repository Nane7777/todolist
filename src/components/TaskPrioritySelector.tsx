type TaskPrioritySelectorProps = {
  error?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export default function TaskPrioritySelector({
  error,
  ...props
}: TaskPrioritySelectorProps) {
  return (
    <div>
      <label htmlFor={props.id}>{'Priority'}</label>
      <select {...props}>
        <option value='low'>Low</option>
        <option value='medium'>Medium</option>
        <option value='high'>High</option>
      </select>
      {error ? <div className='error'>{error}</div> : null}
    </div>
  );
}
