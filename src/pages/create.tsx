import { SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineMail, AiFillPayCircle } from "react-icons/ai";
import { BiUser, BiPhone } from "react-icons/bi";
import { useMutation } from "react-query";

import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useSidebarDrawer } from "src/contexts/SidebarDrawerContext";
import { setupApiClient } from "src/services/apiAuth";
import { apiAuth } from "src/services/apiAuthClient";
import { withSSRAuth } from "src/utils/withSSRAuth";
import * as yup from "yup";

import { Input } from "../components/Form/Input";
import { Header } from "../components/Header";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  price: yup.number().required("Valor do plano é obrigatório"),
  phone: yup
    .number()
    .required("Telefone é obrigatório")
    .min(10, "O telefone deve ter no mínimo 10 dígitos"),
});

export default function CreateUser() {
  const toast = useToast();
  const router = useRouter();
  const bg = useColorModeValue("light", "dark");
  const { isOpen } = useSidebarDrawer();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  const { errors }: any = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async values => {
    try {
      await apiAuth.post("/cliente", values);
    } catch (error) {
      toast({
        title: "Falha ao efetuar cadastro",
        description: "Ocorreu um erro ao tentar efetuar cadastro.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    router.push("/users");
  };

  return (
    <Box h="100%" minH="100vh">
      <Header />
      <Flex w="100%" maxW={1480} pr="6" pl={isOpen ? "60" : "55"}>
        <Box
          as="form"
          flex="1"
          borderRadius={8}
          bg={bg === "light" ? "gray.100" : "gray.900"}
          py={["6", "8"]}
          px="6"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700"></Divider>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome completo"
                {...register("name")}
                error={errors.name}
                icon={
                  <Icon
                    as={BiUser}
                    color={bg === "light" ? "gray.800" : "gray.100"}
                    mt="2"
                    fontSize="25"
                  />
                }
              />

              <Input
                name="email"
                type="email"
                label="E-mail"
                {...register("email")}
                error={errors.email}
                icon={
                  <Icon
                    as={AiOutlineMail}
                    color={bg === "light" ? "gray.800" : "gray.100"}
                    mt="2"
                    fontSize="25"
                  />
                }
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="phone"
                type="phone"
                label="Telefone"
                {...register("phone")}
                icon={
                  <Icon
                    as={BiPhone}
                    color={bg === "light" ? "gray.800" : "gray.100"}
                    mt="2"
                    fontSize="25"
                  />
                }
                error={errors.phone}
              />
              <Input
                name="price"
                type="text"
                label="Preço do plano"
                {...register("price")}
                icon={
                  <Icon
                    as={AiFillPayCircle}
                    color={bg === "light" ? "gray.800" : "gray.100"}
                    mt="2"
                    fontSize="25"
                  />
                }
                error={errors.price}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                colorScheme="green"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
export const getServerSideProps = withSSRAuth(
  async ctx => {
    const apiClient = setupApiClient(ctx);
    const response = await apiClient.get("/me");

    return {
      props: {},
    };
  },
  {
    permissions: ["metrics.list"],
    roles: ["administrator"],
  },
);
