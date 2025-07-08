import Button from './Button';

type ButtonFormProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isValid: boolean;
  dirty: boolean;
  children: React.ReactNode;
};

export function ButtonForm({
  isValid,
  dirty,
  children,
  ...rest
}: ButtonFormProps) {
  const disabled = !isValid || !dirty;

  const enabledClasses = 'bg-[#1976d2] text-white border-none cursor-pointer';
  const disabledClasses =
    'bg-white border border-sky-300 text-black cursor-not-allowed';

  const className = disabled ? disabledClasses : enabledClasses;

  return (
    <Button type='submit' disabled={disabled} className={className} {...rest}>
      {children}
    </Button>
  );
}
