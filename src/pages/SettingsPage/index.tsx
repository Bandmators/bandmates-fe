import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { minContainer } from '@/libs/media';
import { useSidebarStore } from '@/stores/sidebar';

import { ReactComponent as MailIcon } from '@/assets/icons/mail.svg';

import DashboardLayout from '../Layout/DashboardLayout';

type SettingFilterType = 'profile' | 'notification' | 'password' | 'account';

type FilterMenuType = {
  name: string;
  type: SettingFilterType;
  icon: JSX.Element;
};

const filterMenus: FilterMenuType[] = [
  {
    name: 'Profile',
    type: 'profile',
    icon: <MailIcon strokeWidth={1} className="icon icon-md" />,
  },
  {
    name: 'Notification',
    type: 'notification',
    icon: <MailIcon strokeWidth={1} className="icon icon-md" />,
  },
  {
    name: 'Password',
    type: 'password',
    icon: <MailIcon strokeWidth={1} className="icon icon-md" />,
  },
  {
    name: 'Account',
    type: 'account',
    icon: <MailIcon strokeWidth={1} className="icon icon-md" />,
  },
];

const SettingsPage = () => {
  const setIsOpen = useSidebarStore(state => state.setIsOpen);
  const [searchParams] = useSearchParams();
  const filterType = searchParams.get('type') || filterMenus[0].type;

  React.useEffect(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  return (
    <DashboardLayout>
      <DashboardLayout.Container isFill>
        <ContainerMain>
          <h2>Settings</h2>
          <SettingMenuList>
            {filterMenus.map(m => (
              <SettingMenu key={m.name} $active={m.type === filterType}>
                <Link to={`?type=${m.type}`} className="menu-link">
                  {m.icon} {m.name}
                </Link>
              </SettingMenu>
            ))}
          </SettingMenuList>
        </ContainerMain>

        <ContainerSub>
          {filterType === 'profile' ? (
            <div>profile</div>
          ) : filterType === 'notification' ? (
            <div>notification</div>
          ) : filterType === 'password' ? (
            <div>password</div>
          ) : filterType === 'account' ? (
            <div>account</div>
          ) : (
            <div>dd</div>
          )}
        </ContainerSub>
      </DashboardLayout.Container>
    </DashboardLayout>
  );
};
export default SettingsPage;

const ContainerMain = styled.div`
  margin-left: 0px;
  flex: 0 0 auto;
  min-width: 100%;
  padding: 1rem;
  ${minContainer.tablet('dashboard-container')} {
    flex: 0 0 18rem;
    min-width: 18rem;
    padding: 0px;
  }
  h2 {
    margin-top: 0px;
  }
`;
const ContainerSub = styled.div`
  width: 100%;
  background-color: skyblue;
  padding: 1rem;
  margin-top: 3rem;
  ${minContainer.tablet('dashboard-container')} {
    width: calc(100% - 20rem);
    margin-left: auto;
  }
`;

const SettingMenuList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
const SettingMenu = styled.li<{ $active?: boolean }>`
  padding-left: 1rem;
  margin-top: 1.5rem;
  font-weight: 300;
  border-left: 2px solid transparent;
  ${props =>
    props.$active &&
    css`
      border-left: 2px solid var(--primary);
      font-weight: 600;
      color: var(--primary);
      .icon {
        stroke-width: 2;
      }
    `}
  .menu-link {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
