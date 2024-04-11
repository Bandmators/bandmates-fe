import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const WorkNavigation = styled.nav`
  width: 100%;
  padding: 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray['400']};
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
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
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
