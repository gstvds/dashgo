import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../components/Form/Input';


type SignInFormData = {
  email: string;
  password: string;
}

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  console.log(errors);

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <Flex
      w="100vw" // width
      h="100vh" // height
      align="center" // align-items
      justify="center" // justify-content
    >
      <Flex
        as="form" // transform to form
        w="100%" // width
        maxW={360} // max-width
        bg="gray.800" // background-color
        p="8" // padding - 2rem/32px
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            error={errors?.email}
            {...register('email', { required: 'E-mail obrigatório' })}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors?.password}
            {...register('password', { required: 'Senha obrigatória' })}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}