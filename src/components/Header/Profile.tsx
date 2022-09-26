import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
  dateUser: {
    email: string;
    permissions: string[];
    roles: string[];
    name: string;
  };
}

export function Profile({ showProfileData, dateUser }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{dateUser?.name}</Text>
          <Text color="gray.300" fontSize="small">
            {dateUser?.email}
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name={dateUser?.name}
        src="https://avatars.githubusercontent.com/u/15384670?s=400&u=d2237d01db757ca117df3179b0393960ebe91cd8&v=4"
      />
    </Flex>
  );
}
