import { Card } from '../Card';
import { Heading } from '../Heading';

export const AddAccount = () => {
  return (
    <Card className="mx-auto flex max-w-3xl flex-col items-center justify-center">
      <Heading variant="h3">Add Account</Heading>
      <p>Please enter your email address to begin</p>
    </Card>
  );
};
