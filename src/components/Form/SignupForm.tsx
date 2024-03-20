import { Button, Input, InputGroup, Label } from 'bmates-ui';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Form } from '@/components/Form/Form';
import { VALIDATION } from '@/constants/validation';

import InputErrorMessage from './InputErrorMessage';
import { SingupInputs } from './type';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SingupInputs>();
  const onSubmit: SubmitHandler<SingupInputs> = data => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          placeholder="bmates@bandmates.com"
          {...register('email', {
            required: VALIDATION.EMAIL.REQUIRED,
            pattern: VALIDATION.EMAIL.PATTERN,
          })}
        />
        <InputErrorMessage errors={errors} name="email" />
      </InputGroup>

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

      <InputGroup>
        <Label htmlFor="nickname">Nickname</Label>
        <Input
          id="nickname"
          placeholder={`(${VALIDATION.NICKNAME.MIN_LENGTH.value} ~ ${VALIDATION.NICKNAME.MAX_LENGTH.value} character)`}
          {...register('nickname', {
            required: VALIDATION.NICKNAME.REQUIRED,
            minLength: VALIDATION.NICKNAME.MIN_LENGTH,
            maxLength: VALIDATION.NICKNAME.MAX_LENGTH,
          })}
        />
        <InputErrorMessage errors={errors} name="nickname" />
      </InputGroup>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        style={{ width: '100%' }}
        //   disabled={isLoading || values.email === '' || values.password === ''}
      >
        DONE
      </Button>
    </Form>
  );
};
export default SignupForm;
