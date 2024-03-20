import styled from '@emotion/styled';
import { ErrorMessage } from '@hookform/error-message';
import { InputDesc } from 'bmates-ui';
import { FieldErrors } from 'react-hook-form';

import { SinginInputs, SingupInputs } from './type';

interface InputErrorMessageProps {
  errors: FieldErrors<SinginInputs | SingupInputs>;
  name: keyof SinginInputs | keyof SingupInputs;
}

const InputErrorMessage = ({ errors, name }: InputErrorMessageProps) => {
  return (
    <ErrorMessage errors={errors} name={name} render={({ message }) => <ErrorInputDesc>{message}</ErrorInputDesc>} />
  );
};

export default InputErrorMessage;

const ErrorInputDesc = styled(InputDesc)`
  color: var(--danger);
`;
