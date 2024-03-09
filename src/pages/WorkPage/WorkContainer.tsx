import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import Conversation from '@/components/Conversation';
import WorkBands from '@/components/Work/WorkBands';
import WorkInfo from '@/components/Work/WorkInfo';
import WorkMates from '@/components/Work/WorkMates';
import { minContainer } from '@/libs/media';
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
    <>
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
    </>
  );
};
export default WorkContainer;

const ContainerMain = styled.div`
  width: 100%;
  ${minContainer.tablet('dashboard-container')} {
    width: calc(100% - 15.5rem);
  }
`;
const ContainerSub = styled.div`
  margin-left: 0px;
  min-width: 100%;
  flex: 0 0 auto;
  ${minContainer.tablet('dashboard-container')} {
    margin-left: auto;
    min-width: 14rem;
    flex: 0 0 14rem;
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
