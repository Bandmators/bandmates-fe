import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import SigninForm from '@/components/Form/SigninForm';

import MobileLayout from '@/pages/Layout/MobileLayout';
import { PATH } from '@/routes/path';

const SigninPage = () => {
  return (
    <MobileLayout>
      <H1>Sign in to Bandmates</H1>
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

const H1 = styled.h1`
  margin-bottom: 4rem;
`;
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
