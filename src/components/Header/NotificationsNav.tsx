import { BsMoon } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

import { Button, HStack, Icon, useColorMode } from "@chakra-ui/react";

export function NotificationsNav() {
  const { colorMode, toggleColorMode } = useColorMode();
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
      <Button onClick={toggleColorMode} bg="transparent">
        <Icon
          as={colorMode === "light" ? BsMoon : FaSun}
          color={colorMode === "light" ? "gray.800" : "gray.100"}
          fontSize="25"
        />
      </Button>
      <Icon
        as={RiNotificationLine}
        fontSize="25"
        color={colorMode === "light" ? "gray.800" : "gray.100"}
      />
      <Icon
        as={RiUserAddLine}
        fontSize="25"
        color={colorMode === "light" ? "gray.800" : "gray.100"}
      />
    </HStack>
  );
}
