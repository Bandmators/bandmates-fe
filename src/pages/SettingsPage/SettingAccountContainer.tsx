import SettingAccountForm from '@/components/Form/SettingAccountForm';

import * as S from './style';

const SettingAccountContainer = () => {
  return (
    <>
      <S.SubHead>Delete account</S.SubHead>
      <S.WarningMessage>{`Wait!
      Once you proceed with this process, it cannot be cancelled.`}</S.WarningMessage>
      <SettingAccountForm />
    </>
  );
};

export default SettingAccountContainer;
