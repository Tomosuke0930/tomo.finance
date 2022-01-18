import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Regurations = () => (
  <Box
    bgImage="https://external-preview.redd.it/Y3bRw6FPYPdvBiw71-1E6Uh5fSvKgq8PB4nr8qJKeAc.jpg?auto=webp&s=e29f813bf0a3ee6fc8561a7a93071021323a3a00"
    bgRepeat="no-repeat"
    bgSize="cover"
  >
    <Header />
    <Box textAlign="center" letterSpacing={"tighter"} color="white">
      <Heading as="h1" my={12}>
        Graveyard regulations
      </Heading>
    </Box>

    <Box mx={12} my={12} color={"black"} letterSpacing="tight">
      <Table variant="simple" color={"black"} fontSize="sm">
        <Thead backgroundColor={"white"} opacity="90%" letterSpacing="tight">
          <Tr>
            <Th letterSpacing="tight">Epoch</Th>
            <Th letterSpacing="tight">Masonry funding</Th>
            <Th letterSpacing="tight">DAO funding</Th>
            <Th letterSpacing="tight">DEV funding</Th>
            <Th letterSpacing="tight">Total</Th>
            <Th letterSpacing="tight">Bonds Bought</Th>
            <Th letterSpacing="tight">Bonds Redeem</Th>
          </Tr>
        </Thead>
        <Tbody bg={"#D7D3E5"}>
          <Tr>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
          </Tr>
          <Tr>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
          </Tr>
          <Tr>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
          </Tr>
          <Tr>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
            <Td>00000</Td>
          </Tr>
        </Tbody>
        <Tfoot backgroundColor={"white"} opacity="90%">
          <Tr>
            <Th letterSpacing="tight">Epoch</Th>
            <Th letterSpacing="tight">Masonry funding</Th>
            <Th letterSpacing="tight">DAO funding</Th>
            <Th letterSpacing="tight">DEV funding</Th>
            <Th letterSpacing="tight">Total</Th>
            <Th letterSpacing="tight">Bonds Bought</Th>
            <Th letterSpacing="tight">Bonds Redeem</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
    <Footer />
  </Box>
);

export default Regurations;
