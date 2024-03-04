import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import ArtistIcon from '@/assets/icons/headphones.svg';
import FeedIcon from '@/assets/icons/home.svg';
import RandomIcon from '@/assets/icons/rotate-cw.svg';

const DashboardMenu = () => {
  return (
    <DahsboardMenuList>
      <DashboardMenuItem>
        <Link to="#">
          <img src={FeedIcon} alt=" " /> Feed
        </Link>
      </DashboardMenuItem>
      <DashboardMenuItem>
        <Link to="#">
          <img src={ArtistIcon} alt=" " />
          Artists
        </Link>
      </DashboardMenuItem>
      <DashboardMenuItem>
        <Link to="#">
          <img src={RandomIcon} alt=" " />
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
    img {
      margin-right: 1rem;
    }
  }
`;
