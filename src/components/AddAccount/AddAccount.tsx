import { Card } from '../Card';
import { Heading } from '../Heading';
import { TextBox } from '../TextBox';

export const AddAccount = () => {
  return (
    <Card className="mx-auto flex max-w-3xl flex-col items-center justify-center">
      <Heading variant="h3">Add Account</Heading>
      <p>Please enter your email address to begin</p>
      <TextBox label="Email" name="email" />
    </Card>
  );
};
