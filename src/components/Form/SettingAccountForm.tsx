import { Button, Input, InputGroup, Label } from 'bmates-ui';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Form } from '@/components/Form/Form';
import { VALIDATION } from '@/constants/validation';

import InputErrorMessage from './InputErrorMessage';
import { PasswordInputs } from './type';

const SettingAccountForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordInputs>();
  const onSubmit: SubmitHandler<PasswordInputs> = data => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="********"
          {...register('password', {
            required: VALIDATION.PASSWORD.REQUIRED,
            minLength: VALIDATION.PASSWORD.MIN_LENGTH,
            maxLength: VALIDATION.PASSWORD.MAX_LENGTH,
          })}
        />
        <InputErrorMessage errors={errors} name="password" />
      </InputGroup>

      <Button
        type="submit"
        variant="danger"
        size="lg"
        style={{ width: '100%' }}
        //   disabled={isLoading || values.email === '' || values.password === ''}
      >
        Delete your account
      </Button>
    </Form>
  );
};
export default SettingAccountForm;
