import { PATH } from '@/routes';
import styled from '@emotion/styled';
import { Avatar, Button, Dropdown, DropdownContent, DropdownDivider, DropdownItem, DropdownToggle } from 'bmates-ui';
import { Link } from 'react-router-dom';

import BandmatesLogo from '@/assets/bandmate.png';
import { ReactComponent as PlusIcon } from '@/assets/icons/plus.svg';

export const Header = () => {
  const logout = () => {};

  return (
    <HeaderStyled>
      <HeaderBarStart>
        <Link to={PATH.ROOT}>
          <Logo src={BandmatesLogo} alt="bandmates" />
        </Link>
        Bandmates
      </HeaderBarStart>
      <HeaderBarEnd>
        <Button variant="outline">Search Input</Button>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
        <Dropdown align="end">
          <DropdownToggle
            style={{
              padding: '0px',
              border: 'none',
            }}
          >
            <Avatar src="/src/assets/bandmate2_60.png" alt="profile" size="sm" />
          </DropdownToggle>
          <DropdownContent width={200} style={{ marginTop: '1rem' }}>
            <DropdownItem>
              <ItemLink to="">Your profile</ItemLink>
            </DropdownItem>
            <DropdownItem>
              <ItemLink to="">Your works</ItemLink>
            </DropdownItem>
            <DropdownItem>
              <ItemLink to="">Your stars</ItemLink>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem>
              <ItemLink to="">Settings</ItemLink>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem onClick={logout}>Sign out</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </HeaderBarEnd>
    </HeaderStyled>
  );
};

export const MobileHeader = () => {
  return (
    <HeaderStyled>
      <HeaderBarStart>
        <Link to={PATH.ROOT}>
          <Logo src={BandmatesLogo} alt="bandmates" />
        </Link>
        Bandmates
      </HeaderBarStart>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background-color: white;

  display: flex;
  height: 4rem;
  align-items: center;
  padding: 0rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray['200']};
`;

const HeaderBarStart = styled.div`
  flex: 1 1 auto;
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const HeaderBarEnd = styled.div`
  flex: 0 1 auto;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
`;

const Logo = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const ItemLink = styled(Link)`
  width: 100%;
`;
