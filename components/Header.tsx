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
    

      {/* Linkのアンダーラインを消したい */}
      <HStack fontSize={12}>
      <Heading as="h4" mr={4} size="lg" letterSpacing={"tighter"}>
          Tomo Finance
        </Heading>
            {/* フォントサイズ指定したけど？ */}
            <NextLink href='/' passHref >
                <Link>Home</Link>
            </NextLink>
            <NextLink href='/cemestry' passHref>
                <Link>CEMESTRY</Link>
            </NextLink>
            <NextLink href='/masonry' passHref>
                <Link>MASONRY</Link>
            </NextLink>
            <NextLink href='/pit' passHref>
                <Link>PIT</Link>
            </NextLink>
            <NextLink href='/sbs' passHref>
                <Link>SBS</Link>
            </NextLink>
            <NextLink href='/liquidity' passHref>
                <Link>LIQUIDITY</Link>
            </NextLink>
            <NextLink href='/regurations' passHref>
                <Link>REGULATIONS</Link>
            </NextLink>
            <NextLink href='/bthlabo' passHref>
                <Link>BTHLabo</Link>
            </NextLink>
            <ButtonGroup 
                ml={4} 
                color="blackAlpha.700" 
                backgroundColor="whiteAlpha.900"
                rounded="md"
                size="xs"
            >
                <Button>MY WALLET</Button>
            </ButtonGroup>
        </HStack>
    </Flex>
            </header>;
   }

   export default Header;