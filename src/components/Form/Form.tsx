import styled from '@emotion/styled';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface FormProps extends React.ComponentProps<'form'>, React.PropsWithChildren {
  redirect?: string;
}

export const Form = ({ redirect = '/', ...props }: FormProps) => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const redirect_to: string = decodeURIComponent(searchParams.get('redirect_to') || redirect);

  const handleSubmit = () => {
    navigate(redirect_to);
  };

  return (
    <FormStyled onSubmit={handleSubmit} {...props}>
      {props.children}
    </FormStyled>
  );
};

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: stretch;

  margin-top: 4rem;
  input {
    line-height: 2rem;
  }
  button {
    line-height: 2rem;
    padding: 0.375rem 0.75rem;
  }
`;

export const ErrorMsg = styled.p`
  margin: 0px;
  text-align: left;
  color: var(--danger);
  font-size: 0.875rem;
`;
