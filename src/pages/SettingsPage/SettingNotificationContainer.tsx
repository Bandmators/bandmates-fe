import { Switch } from 'bmates-ui';

import * as S from './style';

const SettingNotificationContainer = () => {
  return (
    <>
      <S.SubHead>Email Notifications</S.SubHead>
      <S.SettingList>
        <S.SwitchGroup>
          <Switch />
          <S.SwitchLabel>Get star notifications</S.SwitchLabel>
        </S.SwitchGroup>
        <S.SwitchGroup>
          <Switch />
          <S.SwitchLabel>Get follow notifications</S.SwitchLabel>
        </S.SwitchGroup>
        <S.SwitchGroup>
          <Switch />
          <S.SwitchLabel>Get pull request notifications</S.SwitchLabel>
        </S.SwitchGroup>
      </S.SettingList>

      <S.SubHead>Mobile Notifications</S.SubHead>
      <S.SettingList>
        <S.SwitchGroup>
          <Switch />
          <S.SwitchLabel>Get star notifications</S.SwitchLabel>
        </S.SwitchGroup>
        <S.SwitchGroup>
          <Switch />
          <S.SwitchLabel>Get follow notifications</S.SwitchLabel>
        </S.SwitchGroup>
        <S.SwitchGroup>
          <Switch />
          <S.SwitchLabel>Get pull request notifications</S.SwitchLabel>
        </S.SwitchGroup>
      </S.SettingList>
    </>
  );
};

export default SettingNotificationContainer;
