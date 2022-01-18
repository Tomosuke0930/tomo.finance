import { WarningTwoIcon } from "@chakra-ui/icons";
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
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Masonry = () => (
  <Box
    bgImage="https://external-preview.redd.it/Y3bRw6FPYPdvBiw71-1E6Uh5fSvKgq8PB4nr8qJKeAc.jpg?auto=webp&s=e29f813bf0a3ee6fc8561a7a93071021323a3a00"
    bgRepeat="no-repeat"
    bgSize="cover"
  >
    <Header />

    <Heading as="h1" textAlign="center" letterSpacing={"tighter"} m={12} color="white">
      Masonry
    </Heading>

    <Grid
      templateColumns="repeat(10, 3fr)"
      mx="32"
      my={16}
      gap={4}
      fontSize="small"
    >
      {/* 1列目 */}
      <GridItem
        colSpan={2}
        backgroundColor={"white"}
        opacity="90%"
        rounded="md"
        textAlign="center"
        h="14"
      >
        <Box p={2}>
          <Text color="black">Next Epoch</Text>
          <Text color="black">03:12:31</Text>
        </Box>
      </GridItem>

      <GridItem
        colSpan={2}
        backgroundColor={"white"}
        opacity="90%"
        rounded="md"
        textAlign="center"
        h="14"
      >
        <Box p={2}>
          <Text color="black">Current Epoch</Text>
          <Text color="black">879</Text>
        </Box>
      </GridItem>
      <GridItem
        colSpan={2}
        backgroundColor={"white"}
        opacity="90%"
        rounded="md"
        textAlign="center"
        h="14"
      >
        <Box p={2}>
          <Text color="black">TOMB</Text>
          <Text color="black">Price(TWAP)1.0149</Text>
        </Box>
      </GridItem>
      <GridItem
        colSpan={2}
        backgroundColor={"white"}
        opacity="90%"
        rounded="md"
        textAlign="center"
        h="14"
      >
        <Box p={2}>
          <Text color="black">APR</Text>
          <Text color="black">233.98%</Text>
        </Box>
      </GridItem>
      <GridItem
        colSpan={2}
        backgroundColor={"white"}
        opacity="90%"
        rounded="md"
        textAlign="center"
        h="16"
      >
        <Box p={2}>
          <Text color="black">TSHARES Staked</Text>
          <Text color="black">35475.4296</Text>
        </Box>
      </GridItem>

      {/* 2列目 */}

      <GridItem colSpan={2}>
        <Spacer></Spacer>
      </GridItem>
      <GridItem colSpan={6}>
        <Box bg={"#FF9800"} rounded="sm">
          <HStack>
            <WarningTwoIcon color="black" pl={2} w={5} h={5} />
            <Text
              color={"blackAlpha.700"}
              fontWeight="bold"
              fontSize={15}
              pr={2}
              letterSpacing="tight"
              py={2}
            >
              Staked TSHAREs can only be withdrawn after 6 epochs since deposit.
            </Text>
          </HStack>
        </Box>
      </GridItem>
      <GridItem colSpan={2}>
        <Spacer></Spacer>
      </GridItem>

      {/* 3列目 */}

      <GridItem colSpan={2}>
        <Spacer></Spacer>
      </GridItem>
      <GridItem colSpan={3}>
      <Box
        textAlign="center"
        backgroundColor={"white"}
        color="black"
        opacity="90%"
        rounded="md"
        p={3}
      >
        <Box />
        <Stack justifyContent="center">
          <Center>
            <Image
              rounded="full"
              bg="gray"
              src="https://tomb.finance/static/media/crypto_tomb_cash.f2b44ef4.svg"
              alt="Dan Abramov"
              boxSize="70px"
            />
          </Center>
          <Text fontSize="lg" fontWeight="bold">0.0000</Text>
          <Text fontSize="md">≈ $0.00</Text>
          <Text fontSize="md">TOMB Earned</Text>
          <Flex justifyContent="center">
            <Button rounded="md" bg="#561EB0" size="xs" color={"white"} mt="4" p={4} _hover={{ bg: "#000" }}> CLAIM REWARD</Button>
          </Flex>
        </Stack>
      </Box>

      </GridItem>

      <GridItem colSpan={3}>
      <Box
        textAlign="center"
        backgroundColor={"white"}
        color="black"
        opacity="90%"
        rounded="md"
        p={3}
      >
        <Box />
        <Stack justifyContent="center">
          <Center>
            <Image
              rounded="full"
              bg="gray"
              src="https://tomb.finance/static/media/crypto_tomb_cash.f2b44ef4.svg"
              alt="Dan Abramov"
              boxSize="70px"
            />
          </Center>
          <Text fontSize="lg" fontWeight="bold">0.0000</Text>
          <Text fontSize="md">≈ $0.00</Text>
          <Text fontSize="md">TSHARE Staked</Text>
          <Flex justifyContent="center">
            <Button rounded="full" bg={"black"} color={"white"} mx={2}>-</Button>
            <Button rounded="full" bg="#561EB0" color={"white"} mx={2}>+</Button>
          </Flex>
        </Stack>
      </Box>

      </GridItem>
      
      <GridItem colSpan={2}>
        <Spacer></Spacer>
      </GridItem>
    </Grid>
    <Footer />
  </Box>
);

export default Masonry;
