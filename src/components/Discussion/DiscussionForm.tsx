import styled from '@emotion/styled';
import { Button, Textarea } from 'bmates-ui';

const DiscussionForm = () => {
  return (
    <Form>
      <Textarea placeholder="Add to the comment" />
      <Button>Save</Button>
    </Form>
  );
};
export default DiscussionForm;

const Form = styled.form`
  display: flex;
  gap: 0.5rem;
`;
