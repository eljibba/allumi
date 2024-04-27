'use client';

import {
  ChangeEvent,
  ReactEventHandler,
  forwardRef,
  useEffect,
  useState,
} from 'react';

import cn from '@/shared/utils/cn';

interface TextInputProps {
  className?: string;
  placeholder?: string;
  value: string;
  onChange: ReactEventHandler<HTMLInputElement>;
  type: string,
  required: boolean,
  validationState?: 'valid' | 'invalid' | undefined;
  errorMessage?: string;
  errorPlacement?: 'top' | 'bottom';
  [propName: string]: any;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
  className,
  placeholder,
  value,
  type,
  required,
  onChange = () => {},
  validationState,
  errorMessage,
  errorPlacement = 'bottom',
  ...props
}, ref) => {
  const [valueState, setValueState] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValueState(e.target.value);
    onChange(e);
  };

  useEffect(() => {
    setValueState(value);
  }, [value]);

  return (
    <span className="relative">
      <input
        ref={ref}
        className={cn('p-3 bg-white placeholder:text-[#AEAEAE] text-xs rounded-lg outline-none', className, {
          'ring-1 ring-[#D82020]': validationState === 'invalid',
        })}
        placeholder={placeholder}
        value={valueState}
        onChange={handleChange}
        type={type}
        required={required}
        {...props}
      />
      {errorMessage && (
        <p
          className={cn('absolute text-[10px] whitespace-nowrap truncate', {
            'text-[#D82020]': validationState === 'invalid',
            '-bottom-4': errorPlacement === 'bottom',
            '-top-4': errorPlacement === 'top',
          })}
        >
          {errorMessage}
        </p>
      )}
    </span>
  );
});

TextInput.displayName = 'TextInput';

export default TextInput;
