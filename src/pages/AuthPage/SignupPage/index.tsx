import { Link } from 'react-router-dom';

import SignupForm from '@/components/Form/SignupForm';

import MobileLayout from '@/pages/Layout/MobileLayout';
import { PATH } from '@/routes/path';

import * as S from '../style';

const SignupPage = () => {
  return (
    <MobileLayout>
      <S.H1>Sign up to Bandmates</S.H1>
      <SignupForm />
      <S.Divider />
      <S.Group>
        Already have an account? <Link to={PATH.AUTH.SIGNIN}>Sign In</Link>
      </S.Group>
    </MobileLayout>
  );
};
export default SignupPage;
