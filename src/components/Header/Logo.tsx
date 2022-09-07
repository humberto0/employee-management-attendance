import { Text } from "@chakra-ui/layout";
import { Flex, Image, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useSidebarDrawer } from "src/contexts/SidebarDrawerContext";

interface LogoProps {
  logo?: boolean;
}

export function Logo({ logo }: LogoProps) {
  const { isOpen } = useSidebarDrawer();
  const bgLogo = useColorModeValue("light", "dark");
  const { asPath } = useRouter();

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      gap={2}
      mr={isOpen ? "0" : "5px"}
    >
      <Image
        boxSize={isOpen ? "40px" : "30px"}
        src={bgLogo === "light" ? "images/logoLight.svg" : "images/logo.svg"}
        alt="logo"
      />
      {isOpen || asPath === "/" ? (
        <>
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
        </>
      ) : (
        ""
      )}
    </Flex>
  );
}
