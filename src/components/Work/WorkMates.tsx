import styled from '@emotion/styled';

import AvatarMention from '../common/Avatar/AvatarMention';

interface WorkMatesProps {
  mates: string[];
}

const WorkMates = ({ mates }: WorkMatesProps) => {
  return (
    <WorkMateList>
      {mates.map(mate => (
        <WorkMateListItem>
          <AvatarMention userId={mate} />
        </WorkMateListItem>
      ))}
    </WorkMateList>
  );
};
export default WorkMates;

const WorkMateList = styled.ul`
  margin: 0px;
  padding: 0px;
`;
const WorkMateListItem = styled.li`
  list-style: none;
  margin-bottom: 0.5rem;
`;
