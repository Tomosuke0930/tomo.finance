import { 
  Box, 
  Button,
  Heading, 
  Image,Text,  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption, } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Regurations = () => (
  <Box>
  <Header/>
  <Heading as="h4" mr={4} size="lg" letterSpacing={"tighter"}>
  Graveyard regulations
  </Heading>
  <Box>
  <Table variant='simple'>
  <Thead>
    <Tr>
      <Th>Epoch</Th>
      <Th>Masonry funding</Th>
      <Th>DAO funding</Th>
      <Th>DEV funding</Th>
      <Th>Total</Th>
      <Th>Bonds Bought</Th>
      <Th>Bonds Redeem</Th>
    </Tr>
  </Thead>
  <Tbody>
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
  <Tfoot>
    <Tr>
      <Th>Epoch</Th>
      <Th>Masonry funding</Th>
      <Th>DAO funding</Th>
      <Th>DEV funding</Th>
      <Th>Total</Th>
      <Th>Bonds Bought</Th>
      <Th>Bonds Redeem</Th>
    </Tr>
  </Tfoot>
</Table>
  </Box>
  <Footer/>
  </Box>
)

export default Regurations