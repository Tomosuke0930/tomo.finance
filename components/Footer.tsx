import { Text, HStack,Flex } from '@chakra-ui/react';
import Link from 'next/link';

 function Footer() {
     return <header><Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={3}
      bg="blackAlpha.900"
      color="white"
    >
      {/* Linkのアンダーラインを消したい */}
      <HStack fontSize={14}>
      <Text fontSize='md'>Copyright © Tomo Finance 2022</Text >
        </HStack>
    </Flex>
    </header>;
   }

   export default Footer;