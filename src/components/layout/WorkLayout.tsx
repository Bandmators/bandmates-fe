import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { Link, useParams } from 'react-router-dom';

import Mention from '@/components/Mention';
import { Header } from '@/components/layout/Header';

const WorkLayout = ({ children }: PropsWithChildren) => {
  const { userId, title } = useParams();

  if (!userId || !title) return <></>;

  return (
    <>
      <Header>
        <WorkHead>
          <Mention userId={userId} />
          <WorkDivider>/</WorkDivider>
          <WorkTitle to={`/${userId}/${title}`}>{title}</WorkTitle>
        </WorkHead>
      </Header>
      <Container> {children}</Container>
    </>
  );
};
export default WorkLayout;

const Container = styled.div`
  margin: 0 auto;
`;

const WorkTitle = styled(Link)`
  font-weight: bold;
  margin: 0px;
  font-size: 1rem;
`;
const WorkDivider = styled.span`
  opacity: 0.5;
`;
const WorkHead = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
