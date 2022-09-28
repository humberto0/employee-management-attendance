/* eslint-disable react-perf/jsx-no-new-function-as-prop */
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Link,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import NextLink from "next/link";
import { useSidebarDrawer } from "src/contexts/SidebarDrawerContext";
import { apiAuth } from "src/services/apiAuthClient";
import { withSSRAuth } from "src/utils/withSSRAuth";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";

export default function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isFetching, error }: any = useUsers(page);
  const bg = useColorModeValue("light", "dark");
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const { isOpen } = useSidebarDrawer();
  console.log(data);
  const handlePrefetchUser = async (userId: string) => {
    await queryClient.prefetchQuery(
      ["user", userId],
      async () => {
        const response = await apiAuth.get(`/cliente/${userId}`);

        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10,
      },
    );
  };

  return (
    <Box h="100%" minH="100vh">
      <Header />
      <Flex w="100%" maxW={1480} pr="6" pl={isOpen ? "60" : "55"}>
        <Box
          flex="1"
          borderRadius={8}
          bg={bg === "light" ? "gray.100" : "gray.900"}
          p="8"
        >
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
            </Heading>

            <NextLink href="/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="green"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </NextLink>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="green" />
                    </Th>
                    <Th>Usuário</Th>
                    <Th>Empresa</Th>
                    {isWideVersion && <Th width="8">Valor da Compra/Uni</Th>}
                    {isWideVersion && <Th width="8">Quantidade das ações</Th>}
                    <Th width="8">Valor Total</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.users.map(user => (
                    <Tr key={user.id}>
                      <Td px={["4", "4", "6"]}>
                        <Checkbox colorScheme="green" />
                      </Td>
                      <Td>
                        <Box>
                          <Link
                            color="purple.400"
                            onMouseEnter={() => handlePrefetchUser(user.id)}
                          >
                            <Text fontWeight="bold">{user.name}</Text>
                          </Link>
                          <Text
                            fontSize="sm"
                            color={bg === "light" ? "gray.900" : "gray.100"}
                          >
                            {user.email}
                          </Text>
                        </Box>
                      </Td>
                      <Td>{user.companyShares}</Td>
                      {isWideVersion && <Td>R${user.price}</Td>}
                      {isWideVersion && <Td>{user.quantity}</Td>}
                      <Td>R${user.priceTotal}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>

              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {},
  };
});
