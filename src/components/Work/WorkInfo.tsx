import styled from '@emotion/styled';

import { WorkType } from '@/types/work';

import AlbumBox from '../Album/AlbumBox';
import StarButton from '../common/Button/StarButton';

interface WorkInfoProps {
  work: WorkType;
}
const WorkInfo = ({ work }: WorkInfoProps) => {
  return (
    <>
      <WorkHead>
        <AlbumBox {...work.album} />
        <div>
          <h1>{work.album.title}</h1>
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
  gap: 2rem;
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
