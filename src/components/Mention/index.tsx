import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Avatar, HoverCard, HoverCardContent, HoverCardToggle } from 'bmates-ui';
import { Link } from 'react-router-dom';

import FollowButton from '@/components/common/Button/FollowButton';
import { SizeType } from '@/types/size';

import { PATH } from '@/routes/path';

interface MentionProps {
  userId: string;
  size?: SizeType;
}

const Mention = ({ userId, size = 'md' }: MentionProps) => {
  return (
    <HoverCard>
      <HoverCardToggle style={{ display: 'inline' }}>
        <MentionLink to={`${PATH.ROOT}${userId}`} size={size}>
          {userId}
        </MentionLink>
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

const MentionSizeStyles = ({ size }: { size: SizeType }) => {
  switch (size) {
    case 'sm':
      return css`
        font-size: 0.75rem;
        font-weight: 400;
      `;
    case 'lg':
      return css`
        font-size: 1.25rem;
        font-weight: 600;
      `;
    case 'md':
    default:
      return css`
        font-size: 1rem;
        font-weight: 600;
      `;
  }
};

const MentionLink = styled(Link)<{ size?: SizeType }>`
  ${({ size }) => size && MentionSizeStyles({ size })}
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
