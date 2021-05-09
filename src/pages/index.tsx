import type { SubmitHandler } from 'react-hook-form';

import { Flex, Button, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';


type SignInFormData = {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

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
            {...register('email')}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            error={errors?.password}
            {...register('password')}
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