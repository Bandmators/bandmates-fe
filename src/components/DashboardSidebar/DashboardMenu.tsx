import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { ReactComponent as ArtistIcon } from '@/assets/icons/headphones.svg';
import { ReactComponent as FeedIcon } from '@/assets/icons/home.svg';
import { ReactComponent as RandomIcon } from '@/assets/icons/rotate-cw.svg';

const DashboardMenu = () => {
  return (
    <DahsboardMenuList>
      <DashboardMenuItem>
        <Link to="#">
          <FeedIcon /> Feed
        </Link>
      </DashboardMenuItem>
      <DashboardMenuItem>
        <Link to="#">
          <ArtistIcon />
          Artists
        </Link>
      </DashboardMenuItem>
      <DashboardMenuItem>
        <Link to="#">
          <RandomIcon />
          Random
        </Link>
      </DashboardMenuItem>
    </DahsboardMenuList>
  );
};
export default DashboardMenu;

const DahsboardMenuList = styled.ul`
  margin: 0px;
  padding: 0px;
`;

const DashboardMenuItem = styled.li`
  list-style: none;
  a {
    padding: 1rem 0rem;
    display: block;
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-weight: 500;
    svg {
      margin-right: 1rem;
    }
  }
`;
