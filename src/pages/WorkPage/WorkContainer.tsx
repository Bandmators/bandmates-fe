import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import Conversation from '@/components/Conversation';
import WorkGrid from '@/components/Grid/WorkGrid';
import WorkBands from '@/components/Work/WorkBands';
import WorkInfo from '@/components/Work/WorkInfo';
import WorkMates from '@/components/Work/WorkMates';
import { WorkType } from '@/types/work';

const WorkContainer = () => {
  const [work, setWork] = useState<WorkType>();
  const [mates, setMates] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/work')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setWork(data.work);
        setMates(data.mates);
      });
  }, []);

  if (!work) return <></>;

  return (
    <>
      <WorkGrid.Main>
        {/* Show Work Info (Album info) */}
        <WorkInfo work={work} />

        {/* Discussions box */}
        <WorkGroup>
          <WorkSubTitle>Discussions</WorkSubTitle>
          <Conversation />
        </WorkGroup>
      </WorkGrid.Main>

      <WorkGrid.Sub>
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
      </WorkGrid.Sub>
    </>
  );
};
export default WorkContainer;

const WorkGroup = styled.div`
  margin-bottom: 5rem;
`;
const WorkSubTitle = styled.h2`
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray['400']};
`;
