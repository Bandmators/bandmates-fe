import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import DashboardSidebar from '@/components/DashboardSidebar';
import { minContainer } from '@/libs/media';
import { useSidebarStore } from '@/stores/sidebar';

import { Header } from '@/pages/Layout/Header';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  const isOpen = useSidebarStore(state => state.isOpen);

  return (
    <>
      <Header />
      <DashboardContainer>
        {isOpen && <DashboardSidebar />}
        <DashboardContent>{children}</DashboardContent>
      </DashboardContainer>
    </>
  );
};
export default DashboardLayout;

const DashboardContainer = styled.div`
  display: flex;
`;

const DashboardContent = styled.main`
  /* padding: 2rem; */
  width: 100%;

  container-name: dashboard-container;
  container-type: inline-size;
`;

const Container = styled.div<{ isFill?: boolean }>`
  margin: 0rem;
  padding: ${({ isFill }) => (isFill ? `0rem` : `1rem`)};
  display: flex;
  flex-direction: column;

  ${minContainer.tablet('dashboard-container')} {
    padding: 1rem;
    margin: 3rem 0rem;
    flex-direction: row;
  }
  ${minContainer.desktop('dashboard-container')} {
    max-width: ${({ theme }) => css`calc(${theme.breakpoints.desktop} - 1rem)`};
    margin: 3rem auto;
  }
  ${minContainer.desktopLarge('dashboard-container')} {
    max-width: ${({ theme }) => css`calc(${theme.breakpoints.desktopLarge} - 1rem)`};
  }
`;

DashboardLayout.Container = Container;
