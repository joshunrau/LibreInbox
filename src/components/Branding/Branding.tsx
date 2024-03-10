import icon from '@/assets/icon.png';
import { cn } from '@/utils/cn';

export const Branding = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex w-min items-center justify-between gap-2', className)} {...props}>
    <img alt="LibreInbox Icon" className="h-8 w-8" src={icon} />
    <h5 className="text-lg font-medium">LibreInbox</h5>
  </div>
);
