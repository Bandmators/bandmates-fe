import styled from '@emotion/styled';
import { Button, Textarea } from 'bmates-ui';

const VisitorForm = () => {
  return (
    <VisitForm>
      <Textarea placeholder="Add to the comment" />
      <Button>Save</Button>
    </VisitForm>
  );
};
export default VisitorForm;

const VisitForm = styled.form`
  display: flex;
  gap: 0.5rem;
`;
