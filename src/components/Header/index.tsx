import { Flex } from '@chakra-ui/react';

import { Logo } from './Logo';
import { Notifications } from './Notifications';
import { Profile } from './Profile';
import { Search } from './Search';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      px="6"
      mt="4"
      align="center"
    >
      <Logo />
      <Search />
      <Flex
        align="center"
        ml="auto"
      >
        <Notifications />
        <Profile />
      </Flex>
    </Flex>
  );
}