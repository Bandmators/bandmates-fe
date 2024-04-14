import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { CommentType } from '@/types/comment';

import Comment from './Comment';

const DiscussionComments = () => {
  const [comments, setComments] = useState<CommentType[]>([]);

  useEffect(() => {
    fetch('/api/work/0/discussions')
      .then(res => res.json())
      .then(data => {
        setComments(data.comments);
      });
  }, []);

  return (
    <CommentsContainer>
      {comments.map(comment => (
        <Comment comment={comment} />
      ))}
    </CommentsContainer>
  );
};
export default DiscussionComments;

const CommentsContainer = styled.ul`
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0rem;
  padding: 0px;
  list-style: none;
  flex-direction: column;
`;
