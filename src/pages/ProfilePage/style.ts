import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { maxContainer } from '@/libs/media';

export const ProfileNavigation = styled.nav`
  width: 100%;
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray['400']};
  margin-bottom: 1rem;
`;
export const NavigationMenu = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
export const NavigationMenuItem = styled.li<{ active?: boolean }>`
  list-style: none;
  svg {
    stroke-width: 1;
  }
  a {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray['100']};
    }
  }
  ${({ active }) =>
    active &&
    css`
      font-weight: 500;
      svg {
        stroke-width: 2;
      }
    `}
`;
export const ProfileContent = styled.div`
  ${maxContainer.tablet('dashboard-container')} {
    margin: 1rem;
  }
`;
