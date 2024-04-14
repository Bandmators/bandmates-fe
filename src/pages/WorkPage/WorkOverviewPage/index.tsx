import { useEffect, useState } from 'react';

import Conversation from '@/components/Discussion';
import WorkGrid from '@/components/Grid/WorkGrid';
import WorkBands from '@/components/Work/WorkBands';
import WorkInfo from '@/components/Work/WorkInfo';
import WorkMates from '@/components/Work/WorkMates';
import { WorkType } from '@/types/work';

import * as S from './style';

const WorkOverviewPage = () => {
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
        <S.WorkGroup>
          <S.WorkSubTitle>Discussions</S.WorkSubTitle>
          <Conversation />
        </S.WorkGroup>
      </WorkGrid.Main>

      <WorkGrid.Sub>
        {/* Show Band Graph */}
        <S.WorkGroup>
          <S.WorkSubTitle>Band</S.WorkSubTitle>
          <WorkBands bands={work.bands} />
        </S.WorkGroup>

        {/* Show Mate List */}
        <S.WorkGroup>
          <S.WorkSubTitle>Mates</S.WorkSubTitle>
          <WorkMates mates={mates} />
        </S.WorkGroup>
      </WorkGrid.Sub>
    </>
  );
};
export default WorkOverviewPage;
