import { cva, VariantProps } from 'class-variance-authority';

const <%= lowerName %>Variants = cva('', {
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

export interface I<%= capName %>Identifier {
  sampleTextProp: string;
}

export interface I<%= capName %>
  extends I<%= capName %>Identifier,
    VariantProps<typeof <%= lowerName %>Variants> {}

const <%= capName %>: React.FC<I<%= capName %>> = ({ size, sampleTextProp, ...props }) => {
  return (
    <>
      <div className={<%= lowerName %>Variants({ size })} {...props}>
        {sampleTextProp}
      </div>
    </>
  );
};

export default <%= capName %>;
