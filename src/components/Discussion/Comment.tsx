import styled from '@emotion/styled';
import { Dropdown, DropdownContent, DropdownDivider, DropdownItem, DropdownToggle } from 'bmates-ui';

import AvatarMention from '@/components/common/Avatar/AvatarMention';
import { CommentType } from '@/types/comment';
import { relativeTime } from '@/utils/time';

import { ReactComponent as MoreIcon } from '@/assets/icons/more.svg';

const Comment = ({ comment }: { comment: CommentType }) => {
  return (
    <CommentItem>
      <CommentHead>
        <CommentInfo>
          <AvatarMention userId={comment.user.id} />
          <CommentDivider>•</CommentDivider>
          <CommentDate>{relativeTime(comment.createdAt)}</CommentDate>
        </CommentInfo>
        <Dropdown align="end">
          <DropdownToggle
            style={{
              padding: '0px',
              border: 'none',
            }}
          >
            <MoreIcon strokeWidth="1" width={16} height={16} />
          </DropdownToggle>
          <DropdownContent width={200}>
            <DropdownItem>Copy link</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Edit</DropdownItem>
            <DropdownItem>Delete</DropdownItem>
            <DropdownDivider />
            <DropdownItem>Report abuse</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </CommentHead>

      <CommentBody>{comment.comment}</CommentBody>
    </CommentItem>
  );
};
export default Comment;

const CommentItem = styled.li``;
const CommentHead = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CommentBody = styled.div`
  margin-left: 2.5rem;
  font-size: 1rem;
`;

const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  line-height: 1rem;
`;
const CommentDivider = styled.span`
  color: var(--gray-800);
  font-size: 0.75rem;
`;
const CommentDate = styled.span`
  color: var(--gray-800);
  font-size: 0.75rem;
`;
