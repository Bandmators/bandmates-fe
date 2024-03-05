import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import DashboardSidebar from '@/components/DashboardSidebar';
import { Header } from '@/components/layout/Header';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Container>
        <DashboardSidebar />
        <DashboardContent>{children}</DashboardContent>
      </Container>
    </>
  );
};
export default DashboardLayout;

const Container = styled.div`
  display: flex;
`;

const DashboardContent = styled.div`
  padding: 2rem;
`;
