import styled from '@emotion/styled';
import { Button, Input, InputGroup, Label } from 'bmates-ui';

// import { useSearchParams } from 'react-router-dom';
import { Form } from '@/components/Form/Form';

// import { PATH } from '@/routes/index';

const SigninForm = () => {
  //   const [searchParams] = useSearchParams();
  //   const navigate = useNavigate();

  //   const redirect_to: string = decodeURIComponent(searchParams.get('redirect_to') || PATH.ROOT);

  const handleSubmit = () => {};

  return (
    <FormCard>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input id="email" type="email" placeholder="bmates@bandmates.com" />
          {/* <InputDesc>You can @mention other users to link to them.</InputDesc> */}
        </InputGroup>

        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="********" />
          {/* <InputDesc>You can @mention other users to link to them.</InputDesc> */}
        </InputGroup>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          style={{ width: '100%' }}
          //   disabled={isLoading || values.email === '' || values.password === ''}
        >
          SIGN IN
        </Button>
      </Form>
    </FormCard>
  );
};
export default SigninForm;

const FormCard = styled.div`
  margin-top: 4rem;
  input {
    line-height: 2rem;
  }
  button {
    line-height: 2rem;
    padding: 0.375rem 0.75rem;
  }
`;
