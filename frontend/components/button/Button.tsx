import { cva, VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva('', {
  variants: {
    intent: {
      primary: [
        'group',
        'relative',
        'flex',
        'justify-center',
        'items-center',
        'rounded-lg',
        'border',
        'border-transparent',
        'bg-brand-600',
        'text-white',
        'hover:bg-brand-700',
        'focus:outline-none',
      ],
      secondary: [
        'group',
        'relative',
        'flex',
        'justify-center',
        'rounded-lg',
        'border',
        'border-brand-500',
        'hover:bg-brand-100',
        'text-theme-light-text',
        'dark:text-theme-dark-text',
        'dark:hover:text-theme-light-text',
      ],
    },
    size: {
      small: ['h-8', 'py-2', 'px-2', 'text-xs', 'font-medium'],
      medium: ['h-9', 'py-2', 'px-4', 'text-sm', 'font-medium'],
      large: ['h-12', 'py-2', 'px-6', 'text-lg', 'font-medium'],
      'small-full': ['h-8', 'py-2', 'px-2', 'text-xs', 'font-medium', 'w-full'],
      'medium-full': [
        'h-9',
        'py-2',
        'px-4',
        'text-sm',
        'font-medium',
        'w-full',
      ],
      'large-full': [
        'h-12',
        'py-2',
        'px-6',
        'text-lg',
        'font-medium',
        'w-full',
      ],
    },
  },
  compoundVariants: [{ size: 'medium' }],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

export interface IButtonIdentifier {
  text: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export interface IButton
  extends IButtonIdentifier,
    VariantProps<typeof buttonVariants> {}

const Button: React.FC<IButton> = ({ intent, size, text, type, ...props }) => {
  return (
    <>
      <button
        type={type}
        className={buttonVariants({ intent, size })}
        {...props}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
