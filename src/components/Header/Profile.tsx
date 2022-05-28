import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Matheus Filype</Text>
          <Text color="gray.300" fontSize={"small"}>
            mfilype2019@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Matheus Filype"
        src="http://github.com/Santosl2.png"
      ></Avatar>
    </Flex>
  );
}
