import { PATH } from '@/routes';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import SignupForm from '@/components/Form/SignupForm';
import MobileLayout from '@/components/layout/MobileLayout';

const SignupPage = () => {
  return (
    <MobileLayout>
      <h1>Sign up to Bandmates</h1>
      <SignupForm />
      <Divider />
      <Group>
        Already have an account? <Link to={PATH.AUTH.SIGNUP}>Sign In</Link>
      </Group>
    </MobileLayout>
  );
};
export default SignupPage;

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
