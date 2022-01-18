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
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Pit = () => (
  <Box
    bgImage="https://external-preview.redd.it/Y3bRw6FPYPdvBiw71-1E6Uh5fSvKgq8PB4nr8qJKeAc.jpg?auto=webp&s=e29f813bf0a3ee6fc8561a7a93071021323a3a00"
    bgRepeat="no-repeat"
    bgSize="cover"
  >
    <Header />
    <Box textAlign="center" letterSpacing={"tighter"} color="white">
      <Heading as="h1" mt={12}>
        Buy & Redeem Bonds
      </Heading>
      <Text fontSize="sm">Earn premiums upon redemption</Text>
    </Box>

    <Grid
      templateColumns="repeat(11, 1fr)"
      mx="16"
      my={16}
      gap={4}
      fontSize="small"
    >
      {/* 1列目 */}
      <GridItem colSpan={4}>
        <Box
          textAlign="center"
          backgroundColor={"white"}
          color="black"
          opacity="90%"
          rounded="md"
          p={3}
        >
          <Text fontSize="sm" mb="4">
            Purchase TBOND
          </Text>
          <Stack justifyContent="center">
            <Flex justifyContent="center" textAlign="center">
              <Box mb="4">
                <Image
                  rounded="full"
                  bg="black"
                  src="https://tomb.finance/static/media/crypto_tomb_cash.f2b44ef4.svg"
                  alt="Dan Abramov"
                  boxSize="50px"
                />
                <Text fontWeight="bold" fontSize="sm">
                  TOMB
                </Text>
              </Box>
              <Text mt="3" mx="2" fontWeight="bold">
                →
              </Text>
              <Box>
                <Image
                  rounded="full"
                  bg="black"
                  src="https://tomb.finance/static/media/crypto_tomb_cash.f2b44ef4.svg"
                  alt="Dan Abramov"
                  boxSize="50px"
                />
                <Text fontWeight="bold" fontSize="sm">
                  TOMB
                </Text>
              </Box>
            </Flex>
            <Text fontSize="sm">TOMB is over peg</Text>
            <Flex justifyContent="center">
              <Button
                rounded="md"
                bg="#561EB0"
                size="xs"
                color={"white"}
                mt="2"
                p={4}
                w={28}
                _hover={{ bg: "#000" }}
                disabled
              >
                PURCHASE
              </Button>
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
          <Stack justifyContent="center">
            <Text fontSize="sm" fontWeight="bold">
              💰 TOMB = 1.0158 FTM
            </Text>
            <Text fontSize="sm">Last-Hour TWAP Price</Text>
          </Stack>
        </Box>
        <Box
          textAlign="center"
          backgroundColor={"white"}
          color="black"
          opacity="90%"
          rounded="md"
          p={3}
          mt="4"
        >
          <Stack justifyContent="center">
            <Text fontSize="sm" fontWeight="bold">
              💰 TOMB = 1.0158 FTM
            </Text>
            <Text fontSize="sm">Last-Hour TWAP Price</Text>
          </Stack>
        </Box>
      </GridItem>

      <GridItem colSpan={4}>
        <Box
          textAlign="center"
          backgroundColor={"white"}
          color="black"
          opacity="90%"
          rounded="md"
          p={3}
        >
          <Text fontSize="sm" mb="4">
            Redeem TOMB
          </Text>
          <Stack justifyContent="center">
            <Flex justifyContent="center" textAlign="center">
              <Box mb="4">
                <Image
                  rounded="full"
                  bg="black"
                  src="https://tomb.finance/static/media/crypto_tomb_cash.f2b44ef4.svg"
                  alt="Dan Abramov"
                  boxSize="50px"
                />
                <Text fontWeight="bold" fontSize="sm">
                  TBOND
                </Text>
              </Box>
              <Text mt="3" mx="2" fontWeight="bold">
                →
              </Text>
              <Box>
                <Image
                  rounded="full"
                  bg="black"
                  src="https://tomb.finance/static/media/crypto_tomb_cash.f2b44ef4.svg"
                  alt="Dan Abramov"
                  boxSize="50px"
                />
                <Text fontWeight="bold" fontSize="sm">
                  TOMB
                </Text>
              </Box>
            </Flex>
            <Text fontSize="sm">0.0000 TBOND Available in wallet</Text>
            <Flex justifyContent="center">
              <Button
                rounded="md"
                bg="#561EB0"
                size="xs"
                color={"white"}
                mt="2"
                p={4}
                w={28}
                _hover={{ bg: "#000" }}
                disabled
              >
                Redeem
              </Button>
            </Flex>
          </Stack>
        </Box>
      </GridItem>
    </Grid>
    <Footer />
  </Box>
);

export default Pit;
