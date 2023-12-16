import styled from '@emotion/styled';

const Button = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  background-color: ${props => props.theme.colors.gray['200']};
  .icon.icon-sm {
    margin-right: 0.25rem;
  }
  .icon.icon-md {
    margin-right: 0.5rem;
  }
`;
export default Button;
