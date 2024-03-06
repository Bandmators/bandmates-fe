import styled from '@emotion/styled';
import { Button } from 'bmates-ui';
import { useState } from 'react';

import { ReactComponent as HeartIcon } from '@/assets/icons/heart.svg';

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState<boolean>(false);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  if (isFollowing)
    return (
      <UserFollowButton variant="primary" onClick={handleClick}>
        <HeartIcon width="16" height="16" strokeWidth="1" fill="var(--white)" /> Unfollow
      </UserFollowButton>
    );

  return (
    <UserFollowButton variant="outline" onClick={handleClick}>
      <HeartIcon width="16" height="16" strokeWidth="1" /> Follow
    </UserFollowButton>
  );
};
export default FollowButton;

const UserFollowButton = styled(Button)`
  display: flex;
  gap: 0.5rem;
`;
