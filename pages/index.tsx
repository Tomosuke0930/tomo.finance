import { WarningIcon, WarningTwoIcon } from "@chakra-ui/icons";
import {
  AbsoluteCenter,
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => (
  <Box
    
    bgImage="https://external-preview.redd.it/Y3bRw6FPYPdvBiw71-1E6Uh5fSvKgq8PB4nr8qJKeAc.jpg?auto=webp&s=e29f813bf0a3ee6fc8561a7a93071021323a3a00"
    bgRepeat="no-repeat"
    bgSize="cover"
  >
    <Header />

    <HStack mx={16}>
      <Image
        src="https://tomb.finance/static/media/crypto_tomb_cash.f2b44ef4.svg"
        alt="tomb"
        boxSize="270px"
      />
      <Box backgroundColor={"white"} opacity="90%" p={4} rounded="md">
        <Text color={"blackAlpha.700"} fontSize="lg" pb={3}>
          Welcome to Tomb Finance
        </Text>
        <Text color={"blackAlpha.700"} fontSize="xs" pb={2}>
          The first algorithmic stablecoin on Fantom Opera, pegged to the price
          of 1 FTM via seigniorage.
        </Text>

        <Text color={"blackAlpha.700"} fontSize="xs">
          Stake your TOMB-FTM LP in the Cemetery to earn TSHARE rewards. Then
          stake your earned TSHARE in the Masonry to earn more TOMB
        </Text>
      </Box>
    </HStack>
    <Center>
      <Box bg={"orange.400"} rounded="sm">
        <HStack>
          <WarningTwoIcon color="black" pl={2} w={5} h={5} />
          <Text
            color={"blackAlpha.700"}
            fontWeight="bold"
            fontSize={13}
            pr={2}
            letterSpacing="tight"
            py={2}
          >
            Please visit our documentation before purchasing TOMB or TSHARE
          </Text>
        </HStack>
      </Box>
    </Center>

    <Grid templateColumns="repeat(3, 1fr)" mt="8" gap={4}>
      <GridItem
        colSpan={1}
        backgroundColor={"white"}
        opacity="90%"
        rounded="md"
        p={4}
        textAlign="center"
        ml="16"
      >
        <Text color={"blackAlpha.700"} fontSize="sm">
          Total Value Locked
        </Text>
        <Text color={"blackAlpha.700"} fontSize="sm">
          $1,434,811,655
        </Text>
      </GridItem>
      <GridItem
        colSpan={2}
        display="flex"
        backgroundColor={"white"}
        opacity="90%"
        p={4}
        rounded="md"
        justifyContent="center"
        mr="16"
      >
        <HStack>
          <Button
            letterSpacing="tight"
            size="xs"
            bg="#561EB0"
            color="white"
            rounded="sm"
            _hover={{ bg: "#000" }}
          >
            STAKE NOW
          </Button>
          <Button
            letterSpacing="tight"
            size="xs"
            bg="#CBD5E0"
            rounded="sm"
            color="blackAlpha.900"
            _hover={{ color: "white", bg: "gray.400" }}
          >
            FARM NOW
          </Button>
          <Button
            letterSpacing="tight"
            size="xs"
            bg="#CBD5E0"
            rounded="sm"
            color="blackAlpha.900"
            _hover={{ color: "white", bg: "gray.400" }}
          >
            BUY TOMO
          </Button>
          <Button
            letterSpacing="tight"
            size="xs"
            bg="#561EB0"
            color="white"
            rounded="sm"
            _hover={{ bg: "#000" }}
          >
            BUY TOMOSHARE
          </Button>
        </HStack>
      </GridItem>
    </Grid>

    <SimpleGrid columns={3} gap={4} my={4} mx={16}>
      <Box
        textAlign="center"
        backgroundColor={"white"}
        color="black"
        opacity="90%"
        rounded="md"
        p={3}
      >
        <Grid templateColumns="repeat(3, 1fr)">
          <Spacer></Spacer>
          <Text>TOMB</Text>
          <Button p="none" border="1px" w={12} h={6} ml={8} py={4}>
            <Text fontSize="16px" pr={0.5}>+</Text>
            <Image
              ml={0}
              src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"
            />
          </Button>
        </Grid>
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
          <Text fontSize="sm">Current Price</Text>
          <Text fontSize="md">1.0917FTM</Text>
          <Text fontSize="xs">$3.27</Text>
          <Text fontSize="xx-small">Market Cap: $480563748.57</Text>
          <Text fontSize="xx-small">Circulating Supply: 146961391</Text>
          <Text fontSize="xx-small">Total Supply: 146961523</Text>
        </Stack>
      </Box>

      <Box
        textAlign="center"
        backgroundColor={"white"}
        color="black"
        opacity="90%"
        rounded="md"
        p={3}
      >
        <Grid templateColumns="repeat(3, 1fr)">
          <Spacer></Spacer>
          <Text>TOMB</Text>
          <Button p="none" border="1px" w={12} h={6} ml={8} py={4}>
            <Text fontSize="16px" pr={0.5}>+</Text>
            <Image
              ml={0}
              src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"
            />
          </Button>
        </Grid>
        <Box />
        <Stack justifyContent="center">
          <Center>
            <Image
              rounded="full"
              bg="gray"
              src="https://tomb.finance/static/media/crypto_tomb_share.bf1a6c52.svg"
              alt="Dan Abramov"
              boxSize="70px"
            />
          </Center>
          <Text fontSize="sm">Current Price</Text>
          <Text fontSize="md">1.0917FTM</Text>
          <Text fontSize="xs">$3.27</Text>
          <Text fontSize="xx-small">Market Cap: $480563748.57</Text>
          <Text fontSize="xx-small">Circulating Supply: 146961391</Text>
          <Text fontSize="xx-small">Total Supply: 146961523</Text>
        </Stack>
      </Box>      
      <Box
        textAlign="center"
        backgroundColor={"white"}
        color="black"
        opacity="90%"
        rounded="md"
        p={3}
      >
        <Grid templateColumns="repeat(3, 1fr)">
          <Spacer></Spacer>
          <Text>TOMB</Text>
          <Button p="none" border="1px" w={12} h={6} ml={8} py={4}>
            <Text fontSize="16px" pr={0.5}>+</Text>
            <Image
              ml={0}
              src="https://cdn.iconscout.com/icon/free/png-256/metamask-2728406-2261817.png"
            />
          </Button>
        </Grid>
        <Box />
        <Stack justifyContent="center">
          <Center>
            <Image
              rounded="full"
              bg="gray"
              src="https://tomb.finance/static/media/crypto_tomb_bond.f3331ee8.svg"
              alt="Dan Abramov"
              boxSize="70px"
            />
          </Center>
          <Text fontSize="sm">Current Price</Text>
          <Text fontSize="md">1.0917FTM</Text>
          <Text fontSize="xs">$3.27</Text>
          <Text fontSize="xx-small">Market Cap: $480563748.57</Text>
          <Text fontSize="xx-small">Circulating Supply: 146961391</Text>
          <Text fontSize="xx-small">Total Supply: 146961523</Text>
        </Stack>
      </Box>
    </SimpleGrid>
    
    <Footer />
  </Box>
);

export default Home;
