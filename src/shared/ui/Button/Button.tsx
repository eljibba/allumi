import { forwardRef } from 'react';
import cn from '@/shared/utils/cn';

interface ButtonProps {
  className?: string;
  variant?: 'default' | 'outlined' | 'secondary';
  size?: 'sm' | 'md';
  children: React.ReactNode;
  disabled?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  variant,
  size,
  children,
  disabled,
  ...props
}, ref) => (
  <button
    className={cn('bg-primary hover:bg-darkPrimary text-[#1B1A1C] px-4 py-3 rounded-lg whitespace-nowrap', {
      'bg-transparent hover:bg-primary text-primary hover:text-black outline outline-1 -outline-offset-1 outline-primary': variant === 'outlined',
      'bg-[#F2F2F2] hover:bg-[#AEAEAE]': variant === 'secondary',
      'bg-[#F2F2F2] text-[#AEAEAE] hover:bg-[#F2F2F2] outline-0': disabled,
      'px-3 py-2': size === 'sm',
    }, className)}
    ref={ref}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
));

Button.displayName = 'Button';

export default Button;
