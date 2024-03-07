import { PATH } from '@/routes';
import styled from '@emotion/styled';
import { Avatar, HoverCard, HoverCardContent, HoverCardToggle } from 'bmates-ui';
import { Link } from 'react-router-dom';

import FollowButton from '@/components/common/Button/FollowButton';

interface MentionProps {
  userId: string;
}

const Mention = ({ userId }: MentionProps) => {
  return (
    <HoverCard>
      <HoverCardToggle style={{ display: 'inline' }}>
        <MentionLink to={`${PATH.ROOT}${userId}`}>@{userId}</MentionLink>
      </HoverCardToggle>
      <HoverCardContent>
        <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', width: '300px' }}>
          <HoverCardAvatarContainer>
            <Avatar src="" alt="" />
            <FollowButton />
          </HoverCardAvatarContainer>
          <p style={{ fontWeight: 'bold', margin: '8px 0px 0px' }}>Bandmates</p>
          <p style={{ fontWeight: '300', margin: '0px', fontSize: '0.75rem' }}>@BMates</p>
          <HoverCardAvatarBio>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </HoverCardAvatarBio>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
export default Mention;

const MentionLink = styled(Link)`
  font-weight: 600;
`;

const HoverCardAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HoverCardAvatarBio = styled.p`
  font-size: 0.875rem;
  margin-top: 0.75rem;
  margin-bottom: 0rem;
  opacity: 0.8;
`;
