import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

interface AlbumProps {
  id: string;
  src: string;
}

const AlbumBox = ({ id, src }: AlbumProps) => {
  return (
    <Link to={`/${id}`}>
      <AlbumImage src={src} alt={id} />
    </Link>
  );
};
export default AlbumBox;

const AlbumImage = styled.img`
  border-radius: 1rem;
`;
