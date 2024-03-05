import styled from '@emotion/styled';
import { Button, Textarea } from 'bmates-ui';

const ConversationForm = () => {
  return (
    <Form>
      <Textarea placeholder="Add to the comment" />
      <Button>Save</Button>
    </Form>
  );
};
export default ConversationForm;

const Form = styled.form`
  display: flex;
  gap: 0.5rem;
`;
