import { Box, Button, Heading, HStack, Image,Input,InputGroup,InputRightElement,SimpleGrid,Spacer,Text } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Sctlabo = () => (
  <Box
    bgImage="https://external-preview.redd.it/Y3bRw6FPYPdvBiw71-1E6Uh5fSvKgq8PB4nr8qJKeAc.jpg?auto=webp&s=e29f813bf0a3ee6fc8561a7a93071021323a3a00"
    bgRepeat="no-repeat"
    bgSize="cover"
  >
    <Header />

    <Heading as="h1"  color="white" textAlign="center" letterSpacing={"tighter"} m={12}>
      SevenChainTokenLabo
    </Heading>

    <Box mx={12} mb="16">
      <Box>
        <Heading color="white">Deposit USDT to get Seven Chain Token</Heading>

        <SimpleGrid columns={3} gap={4} my={4}>
          {/* 1 */}
          <Box
            backgroundColor={"white"}
            color="black"
            opacity="90%"
            rounded="md"
            p={3}
          >
            <HStack justifyContent="space-between">
              <Text as="h4">Deposit fUSDT</Text>
              <Image
                rounded="full"
                bg="gray"
                src="https://tomb.finance/static/media/crypto_tomb_share.bf1a6c52.svg"
                alt="Dan Abramov"
                boxSize="45px"
              />
            </HStack>
            <Text fontSize="16">Deposit fUSDT to get</Text>
            <Text fontSize="16">SCT</Text>
            <HStack justifyContent="space-between">
              <Spacer></Spacer>
              <Button
                mt="3px"
                letterSpacing="tight"
                size="xs"
                bg="#561EB0"
                color="white"
                rounded="sm"
                _hover={{ bg: "#000" }}
              >
                DEPOSIT
              </Button>
            </HStack>
          </Box>

          <Box
            backgroundColor={"white"}
            color="black"
            opacity="90%"
            rounded="md"
            p={3}
          >
            <HStack justifyContent="space-between">
              <Text as="h4">Change to SCT</Text>
              <Image
                rounded="full"
                bg="gray"
                src="https://tomb.finance/static/media/crypto_tomb_share.bf1a6c52.svg"
                alt="Dan Abramov"
                boxSize="45px"
              />
            </HStack>
            <Text fontSize="16">Change from SCT LP to</Text>
            <Text fontSize="16">SCT</Text>
            <HStack justifyContent="space-between">
              <Spacer></Spacer>
              <Button
                mt="3px"
                letterSpacing="tight"
                size="xs"
                bg="#561EB0"
                color="white"
                rounded="sm"
                _hover={{ bg: "#000" }}
              >
                Change
              </Button>
            </HStack>
          </Box>

          {/* 3つ目の空白 */}
          <Box>
            <Spacer></Spacer>
          </Box>
        </SimpleGrid>
      </Box>



      <Box>
        <Heading color="white">Buy & Sell for Seven Chain Token</Heading>

        <SimpleGrid columns={3} gap={4} my={4}>
          {/* 1 */}
          <Box
            backgroundColor={"white"}
            color="black"
            opacity="90%"
            rounded="md"
            p={3}
          >
            <HStack justifyContent="space-between">
              <Text as="h4">Buy SCT</Text>
              <Image
                rounded="full"
                bg="gray"
                src="https://tomb.finance/static/media/crypto_tomb_share.bf1a6c52.svg"
                alt="Dan Abramov"
                boxSize="45px"
              />
            </HStack>
            <Text fontSize="16">You can buy SCT by fUSDT</Text>
            <HStack justifyContent="space-between" mt={5}>
              <Spacer></Spacer>
              <Button
                mt="3px"
                letterSpacing="tight"
                size="xs"
                bg="#561EB0"
                color="white"
                rounded="sm"
                _hover={{ bg: "#000" }}
              >
                VIEW
              </Button>
            </HStack>
          </Box>

          <Box
            backgroundColor={"white"}
            color="black"
            opacity="90%"
            rounded="md"
            p={3}
          >
            <HStack justifyContent="space-between">
              <Text as="h4">Sell SCT</Text>
              <Image
                rounded="full"
                bg="gray"
                src="https://tomb.finance/static/media/crypto_tomb_share.bf1a6c52.svg"
                alt="Dan Abramov"
                boxSize="45px"
              />
            </HStack>
            <Text fontSize="16">You can change from SCT to fUSDT</Text>
            
            <HStack justifyContent="space-between" mt={5}>
              <Spacer></Spacer>
              <Button
                mt="3px"
                letterSpacing="tight"
                size="xs"
                bg="#561EB0"
                color="white"
                rounded="sm"
                _hover={{ bg: "#000" }}
                
              >
                VIEW
              </Button>
            </HStack>
          </Box>

          {/* 3つ目の空白 */}
          <Box>
            <Spacer></Spacer>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
    <Footer />
  </Box>

);

export default Sctlabo