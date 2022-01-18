import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Cemestry = () => (
  <Box
    bgImage="https://external-preview.redd.it/Y3bRw6FPYPdvBiw71-1E6Uh5fSvKgq8PB4nr8qJKeAc.jpg?auto=webp&s=e29f813bf0a3ee6fc8561a7a93071021323a3a00"
    bgRepeat="no-repeat"
    bgSize="cover"
  >
    <Header />

    <Heading as="h1" textAlign="center" letterSpacing={"tighter"} m={12}>
      Cemestry
    </Heading>

    <Flex mx={12} mb="16">

     
      <Box>
        <Heading>Earn TSHARE by staking LP</Heading>

        <SimpleGrid columns={3} gap={4} my={4} >
         {/* 1 */}
        <Box
        backgroundColor={"white"}
        color="black"
        opacity="90%"
        rounded="md"
        p={3}
        
      >
        <HStack justifyContent="space-between" >
          <Text as="h4">
          TSHARE-FTM-LP
          </Text>
          <Image
              rounded="full"
              bg="gray"
              src="https://tomb.finance/static/media/crypto_tomb_share.bf1a6c52.svg"
              alt="Dan Abramov"
              boxSize="45px"
            />
        </HStack>
        <Text fontSize="16">Deposit TSHARE-FTM-LP Earn</Text>
        <Text fontSize="16">TSHARE</Text>
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
          <Text as="h4">
          TSHARE-FTM-LP
          </Text>
          <Image
              rounded="full"
              bg="gray"
              src="https://tomb.finance/static/media/crypto_tomb_share.bf1a6c52.svg"
              alt="Dan Abramov"
              boxSize="45px"
            />
        </HStack>
        <Text fontSize="16">Deposit TSHARE-FTM-LP Earn</Text>
        <Text fontSize="16">TSHARE</Text>
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
    </Flex>
    <Footer />
  </Box>
);

export default Cemestry;
