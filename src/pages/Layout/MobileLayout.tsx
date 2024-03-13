import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { minMedia } from '@/libs/media';

import { MobileHeader } from './Header';

const Container = styled.div`
  margin: 0 auto;
  padding: 0rem 1.5rem;
  ${minMedia.mobile} {
    width: 360px;
  }
`;

const MobileLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <MobileHeader />
      <Container>{children}</Container>
    </>
  );
};
export default MobileLayout;
