import { cn } from '@/lib/utils';

export type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  variant: 'h1' | 'h2' | 'h3' | 'h4';
};

export const Heading = ({ children, className, variant }: HeadingProps) => {
  switch (variant) {
    case 'h1':
      return <h1 className={cn('text-4xl font-extrabold tracking-tight lg:text-5xl', className)}>{children}</h1>;
    case 'h2':
      return (
        <h2 className={cn('border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}>{children}</h2>
      );
    case 'h3':
      return <h3 className={cn('text-2xl font-semibold tracking-tight', className)}>{children}</h3>;
    case 'h4':
      return <h4 className={cn('text-xl font-semibold tracking-tight', className)}>{children}</h4>;
    default:
      throw new Error(`Unhandled heading variant: ${variant satisfies never}`);
  }
};