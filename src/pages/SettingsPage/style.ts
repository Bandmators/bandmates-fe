import { css } from '@emotion/react';
import styled from '@emotion/styled';

/*************************************************************************************
 * Layout(Menu) Styled Copmonents
 *************************************************************************************/
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

/*************************************************************************************
 * Common Styled Copmonents at SettingContainer
 *************************************************************************************/
export const SubHead = styled.h2`
  margin-top: 0px;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--gray-300);
`;

export const SettingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 5rem;
`;

export const SwitchGroup = styled.div`
  display: flex;
`;
export const SwitchLabel = styled.label`
  margin-left: 1rem;
`;

export const WarningMessage = styled.p`
  padding: 1rem;
  margin: 2rem 0rem;
  color: var(--danger);
  border-left: 2px solid black;
  background-color: var(--gray-100);
  white-space: pre-line;
`;
