import styled from '@emotion/styled';

import DashboardMenu from './DashboardMenu';
import DashboardWorks from './DashboardWorks';

const DashboardSidebar = () => {
  return (
    <SidebarAside>
      <div>
        <DashboardMenu />
      </div>
      <div>
        <DashboardWorks />
      </div>
    </SidebarAside>
  );
};
export default DashboardSidebar;

const SidebarAside = styled.aside`
  width: 22rem;
  position: sticky;
  padding: 2rem;
  border-right: 1px solid ${({ theme }) => theme.colors.gray['200']};
`;
