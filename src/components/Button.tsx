type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const baseClasses =
    'isolate mt-3 m-1 rounded-lg text-[1rem] px-4 py-[0.45rem] cursor-pointer font-medium hover:brightness-110';

  return (
    <button className={`${baseClasses} ${className}`} {...rest}>
      {children}
    </button>
  );
}
