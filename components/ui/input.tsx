import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'w-full bg-(--input-bg) border border-(--border-color) rounded-[12px] px-4 text-(--text-primary) py-3 outline-none focus:border-(--text-primary) transition-colors duration-200',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        'rtl:text-right ltr:text-left',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
