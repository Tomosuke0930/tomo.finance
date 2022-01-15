import { Text, HStack, Button,Link, Flex, Heading, Box, ButtonGroup, Stack, useColorModeValue, IconButton, useBreakpointValue } from '@chakra-ui/react';


import NextLink from 'next/link';


 function Header() {
     return <header>
         <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={4}
      bg="blackAlpha.900"
      color="white"
    >
    

     
      <HStack fontSize={12} color="#FFFAF0">
      <Heading as="h4" mr={20} size="md" >
          Tomo Finance
        </Heading>

            <NextLink href='/' passHref >
                <Link p={2}>Home</Link>
            </NextLink>
            <NextLink href='/cemestry' passHref>
                <Link p={2}>CEMESTRY</Link>
            </NextLink>
            <NextLink href='/masonry' passHref>
                <Link p={2}>MASONRY</Link>
            </NextLink>
            <NextLink href='/pit' passHref>
                <Link p={2}>PIT</Link>
            </NextLink>
            <NextLink href='/sbs' passHref>
                <Link p={2}>SBS</Link>
            </NextLink>
            <NextLink href='/liquidity' passHref>
                <Link p={2}>LIQUIDITY</Link>
            </NextLink>
            <NextLink href='/regurations' passHref>
                <Link p={2}>REGULATIONS</Link>
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
        {/* <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}>
            Logo
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}>
            Sign In
          </Button>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'pink.400'}
            href={'#'}
            _hover={{
              bg: 'pink.300',
            }}>
            Sign Up
          </Button>
        </Stack>
      </Flex>
    </Box> */}
    </header>;
   }

   export default Header;