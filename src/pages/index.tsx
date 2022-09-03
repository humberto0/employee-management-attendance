import { SubmitHandler, useForm } from "react-hook-form";
import { BiUser } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { RiLockLine } from "react-icons/ri";

import { Flex, Button, Stack, Icon, Image, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Logo } from "src/components/Header/Logo";
import { NavLink } from "src/components/Sidebar/NavLink";
import * as yup from "yup";

import { Input } from "../components/Form/Input";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatória"),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors }: any = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async data => {
    console.log(data);
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      bgImage="url('images/Background.png')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        p={8}
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Flex
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
            mb="4"
          >
            <Logo logo />
            <Text fontSize="xs">
              Por favor entre com o suas credencial e sua senha
            </Text>
          </Flex>

          <Input
            placeholder="Username or E-mail"
            name="email"
            type="email"
            {...register("email")}
            error={errors.email}
            icon={<Icon as={BiUser} color="white" mt="2" fontSize="25" />}
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            {...register("password")}
            error={errors.password}
            icon={<Icon as={RiLockLine} color="white" mt="2" fontSize="25" />}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          variant="outline"
          colorScheme="whatsapp"
          size="lg"
          border="3px solid"
          isLoading={formState.isSubmitting}
          _hover={{
            border: "none",
            bg: "green.100",
          }}
        >
          Login
        </Button>
        <Button
          type="submit"
          mt="6"
          bg="gray.900"
          colorScheme="gray"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          <Icon as={FcGoogle} color="white" mr="2" fontSize="25" /> Login com a
          conta Google
        </Button>
        <Flex display="flex" justifyContent="center" alignItems="center">
          <Text fontSize="xs" textAlign="center">
            Não tem conta?
          </Text>
          <NavLink href="/dashboard" ml="-3" fontSize="xs">
            Registre-se
          </NavLink>
        </Flex>
      </Flex>
    </Flex>
  );
}
