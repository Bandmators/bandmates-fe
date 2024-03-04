import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const DashboardWorks = () => {
  return (
    <DahsboardMenuList>
      <MenuTitle>Your works</MenuTitle>
      <DashboardMenuItem>
        <Link to="#">kyechan99/bandmators</Link>
      </DashboardMenuItem>
      <DashboardMenuItem>
        <Link to="#">dygames/bandmators</Link>
      </DashboardMenuItem>
      <DashboardMenuItem>
        <Link to="#">bandmators/bmates</Link>
      </DashboardMenuItem>
    </DahsboardMenuList>
  );
};
export default DashboardWorks;

const MenuTitle = styled.h2`
  margin-top: 2rem;
  font-weight: 600;
  font-size: 1rem;
`;

const DahsboardMenuList = styled.ul`
  margin: 0px;
  padding: 0px;
`;

const DashboardMenuItem = styled.li`
  list-style: none;
  margin: 1rem 0rem;
  a {
    display: block;
    color: black;
    text-decoration: none;
  }
`;
