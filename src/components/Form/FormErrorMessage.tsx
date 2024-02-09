import { ExclamationCircleIcon } from '@heroicons/react/24/solid';

export type FormErrorMessageProps = {
  error: string;
};

export const FormErrorMessage = ({ error }: FormErrorMessageProps) => {
  return (
    <div className="mt-2 flex items-center gap-1 text-destructive">
      <ExclamationCircleIcon height={16} width={16} />
      <span className="text-sm font-medium">{error}</span>
    </div>
  );
};
