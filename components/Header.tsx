import { Text, HStack, Button,Link, Flex, Heading, Box, ButtonGroup } from '@chakra-ui/react';
import NextLink from 'next/link';

 function Header() {
     return <header><Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={5}
      bg="blackAlpha.900"
      color="white"
    >
      <Flex align="center" mr={5}>
        <Heading as="h3" size="lg" letterSpacing={"tighter"}>
          Tomo Finance
        </Heading>
      </Flex>
      {/* Linkのアンダーラインを消したい */}
      <HStack fontSize={14}>
            {/* フォントサイズ指定したけど？ */}
            <NextLink href='/home' passHref >
                <Link>Home</Link>
            </NextLink>
            <NextLink href='/home' passHref>
                <Link>CEMESTRY</Link>
            </NextLink>
            <NextLink href='/home' passHref>
                <Link>MASONRY</Link>
            </NextLink>
            <NextLink href='/home' passHref>
                <Link>PIT</Link>
            </NextLink>
            <NextLink href='/home' passHref>
                <Link>SBS</Link>
            </NextLink>
            <NextLink href='/home' passHref>
                <Link>LIQUIDITY</Link>
            </NextLink>
            <NextLink href='/home' passHref>
                <Link>REGULATIONS</Link>
            </NextLink>
            <ButtonGroup 
                ml={4} 
                color="blackAlpha.700" 
                backgroundColor="whiteAlpha.900"
                rounded="md"
                size="sm"
            >
                <Button>MY WALLET</Button>
            </ButtonGroup>
        </HStack>
    </Flex>
            </header>;
   }

   export default Header;