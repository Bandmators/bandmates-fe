import styled from '@emotion/styled';

import StarButton from '@/components/common/Button/StarButton';
import { minContainer } from '@/libs/media';
import { WorkType } from '@/types/work';

interface WorkInfoProps {
  work: WorkType;
}
const WorkInfo = ({ work }: WorkInfoProps) => {
  return (
    <>
      <WorkHead>
        <AlbumImage {...work.album} />
        <div>
          <AlbumTitle>{work.album.title}</AlbumTitle>
          <AlbumDescription>{work.album.desc}</AlbumDescription>
          <StarButton />
        </div>
      </WorkHead>

      <WorkDescription>{work.readme}</WorkDescription>
    </>
  );
};
export default WorkInfo;

const WorkHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0rem;
  ${minContainer.mobile('dashboard-container')} {
    margin-top: 1rem;
    flex-direction: row;
    gap: 2rem;
  }
  ${minContainer.tablet('dashboard-container')} {
    margin-top: 0rem;
  }
`;

const AlbumImage = styled.img`
  width: 200px;
  display: block;
  margin: 1rem auto 0rem;
  border-radius: 0.5rem;
  height: 200px;
  ${minContainer.mobile('dashboard-container')} {
    margin-top: 0px;
  }
`;
const AlbumTitle = styled.h1`
  margin-top: 2rem;
  margin-bottom: 0rem;
  ${minContainer.mobile('dashboard-container')} {
    margin-top: 0rem;
  }
`;
const AlbumDescription = styled.div`
  font-size: 1.25rem;
  margin-bottom: 1.25rem;
`;
const WorkDescription = styled.div`
  margin: 3rem 0rem;
  font-size: 1.125rem;
  background-color: ${({ theme }) => theme.colors.gray['200']};
  width: 100%;
  padding: 1.25rem;
  border-radius: 0.5rem;
  white-space: pre-line;
`;
