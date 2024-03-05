import { PATH } from '@/routes';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface MentionProps {
  userId: string;
}

const Mention = ({ userId }: MentionProps) => {
  return <MentionLink to={`${PATH.ROOT}${userId}`}>@{userId}</MentionLink>;
};
export default Mention;

const MentionLink = styled(Link)`
  font-weight: 600;
`;
