import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FeedTitle = styled.h2``;
export const FeedContent = styled.div<{ direction?: 'row' | 'column' }>`
  display: flex;
  gap: 1rem;
  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `}
`;
