import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Sbs = () => (
  <Box
    bgImage="https://external-preview.redd.it/Y3bRw6FPYPdvBiw71-1E6Uh5fSvKgq8PB4nr8qJKeAc.jpg?auto=webp&s=e29f813bf0a3ee6fc8561a7a93071021323a3a00"
    bgRepeat="no-repeat"
    bgSize="cover"
  >
    <Header />

    <Box textAlign="center" letterSpacing={"tighter"} color="white">
      <Heading as="h1" mt={12}>
        TBond -> TShare Swap
      </Heading>
      <Text fontSize="sm">Swap TBond to TShare</Text>
    </Box>

    <Flex justifyContent="center" mx="40" my={16} gap={8} fontSize="small">
      <Spacer></Spacer>

      <Box
        textAlign="center"
        backgroundColor={"white"}
        color="black"
        opacity="90%"
        rounded="xs"
        p={3}
        w="350px"
      >
        <Text fontWeight="bold">TBonds</Text>
        <Stack justifyContent="center">
          <Center>
            <Image
              rounded="full"
              bg="black"
              src="https://tomb.finance/static/media/crypto_tomb_cash.f2b44ef4.svg"
              alt="Dan Abramov"
              boxSize="60px"
            />
          </Center>
          <Flex pt={8}>
            <Spacer></Spacer>
            <Text fontSize="xs" mr="2" color="gray">
              0 TBond Available
            </Text>
          </Flex>
          <InputGroup size="md">
            <Input border="none" placeholder="0" bg={"#EEEFEF"} p={2} mx="2" />
            <InputRightElement width="4.5rem" mr="2">
              <Button h="1.75rem" size="sm" bg="#561EB0">
                <Text color="white">MAX</Text>
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text fontSize="sm" pt={8}>
            0 TBOND Available in Wallet
          </Text>
        </Stack>
      </Box>

      <Box
        textAlign="center"
        backgroundColor={"white"}
        color="black"
        opacity="90%"
        rounded="xs"
        p={3}
        w="350px"
      >
        <Text fontWeight="bold">TShare</Text>
        <Stack justifyContent="center">
          <Center>
            <Image
              rounded="full"
              bg="black"
              src="https://tomb.finance/static/media/crypto_tomb_cash.f2b44ef4.svg"
              alt="Dan Abramov"
              boxSize="60px"
            />
          </Center>
          <Flex pt={8}>
            <Spacer></Spacer>
            <Text fontSize="xs" mr="2" color="gray">
              0 TShare Available
            </Text>
          </Flex>
          <InputGroup size="md">
            <Input border="none" placeholder="0" bg={"#EEEFEF"} p={2} mx="2" />
            <InputRightElement width="4.5rem" mr="2">
              <Button h="1.75rem" size="sm" bg="#561EB0">
                <Text color="white">MAX</Text>
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text fontSize="sm" pt={8}>
            0 TShare Available in Wallet
          </Text>
        </Stack>
      </Box>
      <Spacer></Spacer>
    </Flex>
    <Flex
      backgroundColor={"white"}
      justifyContent="center"
      opacity="90%"
      rounded="xs"
      p={3}
      mx="40"
      my={16}
      h={16}
    >
      <Button my="auto" h="1.75rem" size="sm" bg="#561EB0" color="white">
        SWAP
      </Button>
    </Flex>
    <Footer />
  </Box>
);

export default Sbs;
