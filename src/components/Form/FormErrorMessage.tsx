import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

export type FormErrorMessageProps = {
  message: string;
};

export const FormErrorMessage = ({ message }: FormErrorMessageProps) => {
  return (
    <div className="mt-2 flex items-center gap-1 text-destructive">
      <ExclamationCircleIcon height={16} width={16} />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};
