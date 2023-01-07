import { cva, type VariantProps } from 'class-variance-authority';
import { IconFormat, lookupIcon, PossibleIcons } from 'heroicons-lookup';
import React from 'react';

const iconVariants = cva('', {
  variants: {
    size: {
      small: ['h-4', 'w-4'],
      medium: ['h-5', 'w-5'],
      large: ['h-6', 'w-6'],
    },
  },
  compoundVariants: [{ size: 'medium' }],
  defaultVariants: {
    size: 'medium',
  },
});

export interface IIconIdentifier {
  icon: PossibleIcons;
  format: IconFormat;
}

export interface IIcon
  extends IIconIdentifier,
    VariantProps<typeof iconVariants> {}

const Icon: React.FC<IIcon> = ({ size, icon, format, ...props }) => {
  const Icon = lookupIcon(icon, format);
  return <Icon className={iconVariants({ size })} {...props} />;
};

export default Icon;
