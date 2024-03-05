import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { maxMedia } from 'bmates-ui';
import { useEffect, useState } from 'react';

import Conversation from '@/components/Conversation';
import WorkBands from '@/components/Work/WorkBands';
import WorkInfo from '@/components/Work/WorkInfo';
import WorkMates from '@/components/Work/WorkMates';
import { minMedia } from '@/libs/media';
import { WorkType } from '@/types/work';

const WorkContainer = () => {
  const [work, setWork] = useState<WorkType>();
  const [mates, setMates] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/work')
      .then(res => res.json())
      .then(data => {
        setWork(data.work);
        setMates(data.mates);
      });
  }, []);

  if (!work) return <></>;

  return (
    <Container>
      <ContainerMain>
        {/* Show Work Info (Album info) */}
        <WorkInfo work={work} />

        {/* Discussions box */}
        <WorkGroup>
          <WorkSubTitle>Discussions</WorkSubTitle>
          <Conversation />
        </WorkGroup>
      </ContainerMain>

      <ContainerSub>
        {/* Show Band Graph */}
        <WorkGroup>
          <WorkSubTitle>Band</WorkSubTitle>
          <WorkBands bands={work.bands} />
        </WorkGroup>

        {/* Show Mate List */}
        <WorkGroup>
          <WorkSubTitle>Mates</WorkSubTitle>
          <WorkMates mates={mates} />
        </WorkGroup>
      </ContainerSub>
    </Container>
  );
};
export default WorkContainer;

const Container = styled.div`
  ${minMedia.mobile} {
    margin: 1rem;
    flex-direction: column;
  }
  ${minMedia.tablet} {
    margin: 3rem 2rem;
    flex-direction: row;
  }
  ${minMedia.desktop} {
    max-width: ${({ theme }) => css`calc(${theme.breakpoints.desktop} - 2rem)`}px;
    margin: 3rem auto;
  }
  display: flex;
`;
const ContainerMain = styled.div`
  width: calc(100% - 15.5rem);
  ${maxMedia.tablet} {
    width: 100%;
  }
`;
const ContainerSub = styled.div`
  margin-left: auto;
  flex: 0 0 14rem;
  min-width: 14rem;
  ${maxMedia.tablet} {
    margin-left: 0px;
    flex: 0 0 1;
    min-width: 100%;
  }
`;

const WorkGroup = styled.div`
  margin-bottom: 5rem;
`;
const WorkSubTitle = styled.h2`
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray['400']};
`;
