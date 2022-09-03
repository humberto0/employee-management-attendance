import { Text } from "@chakra-ui/layout";
import { Flex, Image } from "@chakra-ui/react";

interface LogoProps {
  logo?: boolean;
}

export function Logo({ logo }: LogoProps) {
  return (
    <Flex alignItems="center" justifyContent="center" gap={2}>
      <Image boxSize="40px" src="images/logo.svg" alt="logo" />
      {logo && (
        <>
          <Text
            as="span"
            fontSize="4xl"
            fontFamily="Fira Code"
            letterSpacing="-2px"
            color="green.400"
          >
            H3//0
          </Text>
          <Text as="span" fontSize="4xl" fontFamily="Fira Code" ml="3">
            Wor/D
          </Text>
        </>
      )}
    </Flex>
  );
}
