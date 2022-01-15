import { Box, Button, Heading, HStack, Image,Input,InputGroup,InputRightElement,Text } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Liquidity = () => (
  <Box>
  <Header/>
  <Heading as="h4" mr={4} size="lg" letterSpacing={"tighter"}>
  Provide Liquidity
  </Heading>
  <Box>
    <Text>0.0000 TOMB Available</Text>
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        placeholder='0'
      />
      <InputRightElement width='4.5rem'>
        <Button size='sm'>
          MAX
        </Button>
      </InputRightElement>
    </InputGroup>
    <Text>0.1575 FTM Available</Text>
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        placeholder='0'
      />
      <InputRightElement width='4.5rem'>
        <Button size='sm'>
          MAX
        </Button>
      </InputRightElement>
    </InputGroup>
    <Text>1 TOMB = 1.05 FTM</Text>
    <Text>1 FTM = 0.96 TOMB</Text>
    <Text>LP tokens ≈ 0.00</Text>
    <Button>APPROVE</Button>
  </Box>
  <Footer/>
  </Box>
)

export default Liquidity
