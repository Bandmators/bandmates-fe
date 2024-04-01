import styled from '@emotion/styled';
import { ErrorMessage } from '@hookform/error-message';
import { InputDesc } from 'bmates-ui';
import { FieldErrors } from 'react-hook-form';

import { PasswordInputs, SinginInputs, SingupInputs } from './type';

interface InputErrorMessageProps {
  errors: FieldErrors<SinginInputs | SingupInputs | PasswordInputs>;
  name: keyof SinginInputs | keyof SingupInputs | keyof PasswordInputs;
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
