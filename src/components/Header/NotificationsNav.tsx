import { useCallback } from "react";
import { BsMoonStarsFill, BsMoonStars } from "react-icons/bs";
import { FaSun, FaRegSun } from "react-icons/fa";
import {
  RiNotificationLine,
  RiUserAddLine,
  RiNotificationFill,
  RiUserAddFill,
} from "react-icons/ri";

import { Flex, HStack, Icon, IconButton, useColorMode } from "@chakra-ui/react";

export function NotificationsNav() {
  const { colorMode, toggleColorMode } = useColorMode();

  const notificationsTest = useCallback(() => {
    console.log("terminar");
  }, []);
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <IconButton
        aria-label="Open navigation"
        icon={
          <Flex position="relative" alignItems="center" justifyContent="center">
            <Icon
              as={colorMode === "light" ? BsMoonStars : FaRegSun}
              position="absolute"
              zIndex="1"
              fontSize="23"
            />
            <Icon
              as={colorMode === "light" ? BsMoonStarsFill : FaSun}
              color="transparent"
              position="absolute"
              zIndex="2"
              _hover={{
                color: `${colorMode === "light" ? "black" : "white"}`,
              }}
            />
          </Flex>
        }
        color={colorMode === "light" ? "gray.800" : "gray.100"}
        fontSize="25"
        variant="unstyled"
        onClick={toggleColorMode}
      />
      <IconButton
        aria-label="Open navigation"
        icon={
          <Flex position="relative" alignItems="center" justifyContent="center">
            <Icon
              as={RiNotificationLine}
              position="absolute"
              zIndex="1"
              fontSize="23"
            />
            <Icon
              as={RiNotificationFill}
              color="transparent"
              position="absolute"
              zIndex="2"
              _hover={{
                color: `${colorMode === "light" ? "black" : "white"}`,
              }}
            />
          </Flex>
        }
        color={colorMode === "light" ? "gray.800" : "gray.100"}
        fontSize="25"
        variant="unstyled"
        onClick={notificationsTest}
      />

      <IconButton
        aria-label="Open navigation"
        icon={
          <Flex position="relative" alignItems="center" justifyContent="center">
            <Icon
              as={RiUserAddLine}
              position="absolute"
              zIndex="1"
              fontSize="23"
            />
            <Icon
              as={RiUserAddFill}
              color="transparent"
              position="absolute"
              zIndex="2"
              _hover={{
                color: `${colorMode === "light" ? "black" : "white"}`,
              }}
            />
          </Flex>
        }
        color={colorMode === "light" ? "gray.800" : "gray.100"}
        fontSize="25"
        variant="unstyled"
        onClick={notificationsTest}
      />
    </HStack>
  );
}
