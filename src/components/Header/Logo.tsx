import { Text } from "@chakra-ui/layout";
import { Flex, Image, useColorModeValue } from "@chakra-ui/react";

interface LogoProps {
  logo?: boolean;
}

export function Logo({ logo }: LogoProps) {
  const bgLogo = useColorModeValue("light", "dark");
  return (
    <Flex alignItems="center" justifyContent="center" gap={2}>
      <Image
        boxSize="40px"
        src={bgLogo === "light" ? "images/logoLight.svg" : "images/logo.svg"}
        alt="logo"
      />

      <Text
        as="span"
        fontSize="4xl"
        fontFamily="Fira Code"
        letterSpacing="-2.5px"
        color={bgLogo === "light" ? "green.700" : "green.400"}
      >
        H3//0
      </Text>
      {logo && (
        <Text as="span" fontSize="4xl" fontFamily="Fira Code" ml="3">
          Wor/D
        </Text>
      )}
    </Flex>
  );
}
