import { ReactNode } from "react";

import { Box, Stack, Text } from "@chakra-ui/react";
import { useSidebarDrawer } from "src/contexts/SidebarDrawerContext";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  const { isOpen } = useSidebarDrawer();
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {isOpen && title}
      </Text>
      <Stack spacing="4" mt={isOpen && "8"} align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
