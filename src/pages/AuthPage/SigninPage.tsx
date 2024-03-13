import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import SigninForm from '@/components/Form/SigninForm';

import MobileLayout from '@/pages/Layout/MobileLayout';
import { PATH } from '@/routes/path';

const SigninPage = () => {
  return (
    <MobileLayout>
      <h1>Sign in to Bandmates</h1>
      <SigninForm />
      <Group>
        <Link to={PATH.AUTH.SIGNUP}>Having trouble in sign in?</Link>
      </Group>
      <Divider />
      <Group>
        <Link to={PATH.AUTH.SIGNUP}>Create an account</Link>
      </Group>
    </MobileLayout>
  );
};
export default SigninPage;

const Group = styled.div`
  margin: 3rem 0rem;
  text-align: center;
  a {
    text-decoration: underline;
  }
`;
const Divider = styled.hr`
  margin: 3rem 0rem;
  opacity: 0.3;
`;
