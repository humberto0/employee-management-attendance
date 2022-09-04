import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Humberto Junior</Text>
          <Text color="gray.300" fontSize="small">
            humberto.dev@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Humberto Dev"
        src="https://avatars.githubusercontent.com/u/15384670?s=400&u=d2237d01db757ca117df3179b0393960ebe91cd8&v=4"
      />
    </Flex>
  );
}
