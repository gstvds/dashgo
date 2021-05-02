import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]} // 2xl -> breakpoint sm, 3xl -> bigger than sm
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      dashgo
      <Text as="span" ml="1" color="pink.500">.</Text>
    </Text>
  );
}