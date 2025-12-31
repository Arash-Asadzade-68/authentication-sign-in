import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva('font-stretch-100%', {
  variants: {
    variant: {
      default:
        'bg-(--btn-bg) text-(--btn-text) rounded-full py-3 px-4 font-bold w-full flex items-center justify-center gap-2 transition-opacity duration-200  hover:bg-primary/90',
      outline:
        'bg-transparent text-(--text-primary) border border-(--border-color) font-bold rounded-full transition transition-all flex items-center hover:bg-(--bg-secondary) hover:border-(--text-primary) justify-center',
      ghost: 'w-full text-xs text-(--text-secondary) hover:text-(--text-primary) mt-2 transition',
    },
    size: {
      default: 'p-[10px] has-[>svg]:px-3',
      sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
      lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
      icon: 'size-9',
      'icon-sm': 'size-8',
      'icon-lg': 'size-10',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
