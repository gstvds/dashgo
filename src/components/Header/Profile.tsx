import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gustavo Silva</Text>
          <Text color="gray.300" fontSize="small">
            gstvds@icloud.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Gustavo Silva"
        src="https://github.com/gstvds.png"
      />
    </Flex>
  );
}