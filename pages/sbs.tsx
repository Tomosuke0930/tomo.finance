import { Box, Button, Heading, HStack, Image,Input,InputGroup,InputRightElement,Text } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Sbs = () => (
  <Box>
  <Header/>
  <Heading as="h4" mr={4} size="lg" letterSpacing={"tighter"}>
  TBond 👉 TShare Swap
  </Heading>
  <Text>Swap TBond to TShare</Text>
  <HStack>
  <Box>
    <Heading  as="h4" mr={4} size="lg" letterSpacing={"tighter"}>
      TBonds
    </Heading>
    <Image />
    <Text>0 TBond Available</Text>
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
    <Text>0 TBOND Available in Wallet</Text>
  </Box>
  <Box>
    <Heading  as="h4" mr={4} size="lg" letterSpacing={"tighter"}>
      TShare
    </Heading>
    <Image />
    <Text>0 TSHARE Available</Text>
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
    <Text>0 TSHARE Available in Swapper</Text>
  </Box>
  </HStack>
  <Box>
    <Button>APPROVE TBOND</Button>
  </Box>
  <Footer/>
  </Box>
)

export default Sbs