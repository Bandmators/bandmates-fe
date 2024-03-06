import styled from '@emotion/styled';
import { Avatar } from 'bmates-ui';

import Mention from '@/components/Mention';
import { SizeType } from '@/types/size';

interface AvatarMentionProps {
  userId: string;
  size?: SizeType;
}
const AvatarMention = ({ size, userId }: AvatarMentionProps) => {
  return (
    <AvatarMentionWrapper>
      <Avatar src="" alt="" size={size} />
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
