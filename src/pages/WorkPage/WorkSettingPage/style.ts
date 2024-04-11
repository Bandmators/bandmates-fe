import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const SettingMenuList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
`;
export const SettingMenu = styled.li<{ active?: boolean }>`
  padding-left: 1rem;
  margin-bottom: 1.5rem;
  font-weight: 300;
  border-left: 2px solid transparent;
  ${props =>
    props.active
      ? css`
          border-left: 2px solid var(--primary);
          font-weight: 600;
          color: var(--primary);
          .icon {
            stroke-width: 2;
          }
        `
      : css`
          &:hover {
            font-weight: 400;
            .icon {
              stroke-width: 1.5;
            }
          }
        `}
  .menu-link {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
