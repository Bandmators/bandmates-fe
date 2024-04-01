import styled from '@emotion/styled';

import SettingPasswordForm from '@/components/Form/SettingPasswordForm';

const SettingPasswordContainer = () => {
  return (
    <>
      <H1>Change Password</H1>
      <SettingPasswordForm />
    </>
  );
};

export default SettingPasswordContainer;

const H1 = styled.h1`
  margin-top: 0px;
  margin-bottom: 2rem;
`;
