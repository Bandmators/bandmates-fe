import { Link } from 'react-router-dom';

import SigninForm from '@/components/Form/SigninForm';

import MobileLayout from '@/pages/Layout/MobileLayout';
import { PATH } from '@/routes/path';

import * as S from '../style';

const SigninPage = () => {
  return (
    <MobileLayout>
      <S.H1>Sign in to Bandmates</S.H1>
      <SigninForm />
      <S.Group>
        <Link to={PATH.AUTH.SIGNUP}>Having trouble in sign in?</Link>
      </S.Group>
      <S.Divider />
      <S.Group>
        <Link to={PATH.AUTH.SIGNUP}>Create an account</Link>
      </S.Group>
    </MobileLayout>
  );
};
export default SigninPage;
