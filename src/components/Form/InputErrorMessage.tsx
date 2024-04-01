import styled from '@emotion/styled';
import { ErrorMessage } from '@hookform/error-message';
import { InputDesc } from 'bmates-ui';
import { FieldErrors } from 'react-hook-form';

import { NewPasswordInputs, SinginInputs, SingupInputs } from './type';

interface InputErrorMessageProps {
  errors: FieldErrors<SinginInputs | SingupInputs | NewPasswordInputs>;
  name: keyof SinginInputs | keyof SingupInputs | keyof NewPasswordInputs;
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
