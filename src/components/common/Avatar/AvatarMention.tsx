import styled from '@emotion/styled';
import { Avatar } from 'bmates-ui';

import Mention from '@/components/Mention';

interface AvatarMentionProps {
  userId: string;
}
const AvatarMention = ({ userId }: AvatarMentionProps) => {
  return (
    <AvatarMentionWrapper>
      <Avatar src="" alt="" />
      <div>
        <Mention userId={userId} />
      </div>
    </AvatarMentionWrapper>
  );
};
export default AvatarMention;

const AvatarMentionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
