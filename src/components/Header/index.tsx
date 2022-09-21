import { RiMenuUnfoldLine, RiMenuFoldLine } from "react-icons/ri";

import {
  Flex,
  Icon,
  IconButton,
  useBreakpointValue,
  keyframes,
  Slide,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { useAuthContext } from "src/contexts/AuthContext";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SidebarNav } from "../Sidebar";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { user } = useAuthContext();
  const { isOpen, onClose, onOpen } = useSidebarDrawer();
  const animationKeyframes = keyframes`
  0% { transform: scale(1); border-radius: 50%; }
  30% { transform: translateX(5px); border-radius: 20%; }
  70% { transform: scale(1) }
`;
  const animationKeyframesClose = keyframes`
  0% { transform: scale(1); border-radius: 50%; }
  30% { transform: translateX(-5px); border-radius: 20%; }
  70% { transform: scale(1) }
  `;
  const animationShow = `${animationKeyframes} 1s ease-in-out`;
  const animationClose = `${animationKeyframesClose} 1s ease-in-out`;
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  const bg = useColorModeValue("light", "dark");

  return (
    <Flex w="100%" maxW="100vw">
      <Slide
        direction="left"
        in={isOpen}
        style={{
          zIndex: 10,
          maxWidth: "230px",
          minWidth: "200px",
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          marginLeft: `${!isOpen ? "50px" : "0"}`,
        }}
      >
        <Box
          bg={bg === "light" ? "gray.100" : "gray.900"}
          borderRightRadius="lg"
          shadow="md"
          h="100%"
          display="flex"
          justifyContent="flex-start"
          alignItems={isOpen ? "center" : "flex-end"}
          flexDirection="column"
          w="100%"
          gap="5"
          padding={isOpen ? "5" : "2"}
          pt="7"
        >
          <Flex
            alignItems={isOpen ? "center" : "flex-end"}
            flexDirection={isOpen ? "row" : "column"}
            justifyContent={isOpen ? "space-between" : "center"}
            gap={!isOpen && "3"}
            w="100%"
            mr={!isOpen && "-0.5"}
          >
            <Logo />
            <IconButton
              _hover={{ animation: isOpen ? animationClose : animationShow }}
              aria-label="Open navigation"
              icon={<Icon as={isOpen ? RiMenuFoldLine : RiMenuUnfoldLine} />}
              fontSize="26"
              variant="unstyled"
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
          <SidebarNav />
        </Box>
      </Slide>
      <Flex
        as="header"
        w="100%"
        maxW="100vw"
        h="20"
        mx="auto"
        mt="4"
        pr="6"
        paddingLeft={isOpen ? "60" : "14"}
        alignItems="center"
        justifyContent="center"
      >
        {isWideVersion && <SearchBox />}

        <Flex align="center" ml="auto">
          <NotificationsNav />

          <Profile showProfileData={isWideVersion} dateUser={user} />
        </Flex>
      </Flex>
    </Flex>
  );
}
