import { RiSearchLine } from "react-icons/ri";

import { Flex, Input, Icon, useColorModeValue } from "@chakra-ui/react";

export function SearchBox() {
  const bg = useColorModeValue("light", "dark");
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg={bg === "light" ? "gray.100" : "gray.900"}
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
