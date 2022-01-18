import {
  Text,
  HStack,
  Button,
  Link,
  Flex,
  Heading,
  Box,
  ButtonGroup,
  Stack,
  useColorModeValue,
  IconButton,
  useBreakpointValue,
  Grid,
  GridItem,
  Spacer,
  chakra,
} from "@chakra-ui/react";

import NextLink from "next/link";

function Header() {
  return (
    <chakra.header 
    // position="fixed" w="full"
    >
      <Flex
        as="nav"
        padding={4}
        // bg="blackAlpha.900"
        bg="red"
        color="white"
      >
        <Box colSpan={2}>
          <Heading as="h2" size="md">
            Tomo Finance
          </Heading>
        </Box>
          <Spacer></Spacer>
 

        <Box colSpan={6} fontSize={12} >
          <NextLink href="/" passHref>
            <Link p={2}>Home</Link>
          </NextLink>
          <NextLink href="/cemestry" passHref>
            <Link p={2}>CEMESTRY</Link>
          </NextLink>
          <NextLink href="/masonry" passHref>
            <Link p={2}>MASONRY</Link>
          </NextLink>
          <NextLink href="/pit" passHref>
            <Link p={2}>PIT</Link>
          </NextLink>
          <NextLink href="/sbs" passHref>
            <Link p={2}>SBS</Link>
          </NextLink>
          <NextLink href="/liquidity" passHref>
            <Link p={2}>LIQUIDITY</Link>
          </NextLink>
          <NextLink href="/regurations" passHref>
            <Link p={2}>REGULATIONS</Link>
          </NextLink>
          <NextLink href="/bthlabo" passHref>
            <Link>BTHLabo</Link>
          </NextLink>
          <ButtonGroup
            ml={3}
            color="blackAlpha.700"
            backgroundColor="whiteAlpha.900"
            rounded="md"
            size="xs"
          ><Button>MY WALLET</Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </chakra.header>
  );
}

export default Header;
