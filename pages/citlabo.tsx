import { Box, Button, Heading, HStack, Image,Input,InputGroup,InputRightElement,Text } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Bthlabo = () => (
  <Box>
  <Header/>
  <Heading as="h4" mr={4} size="lg" letterSpacing={"tighter"}>
  BTC + ETH 👉 BTH
  </Heading>
  <Text>You can mint 1BTH from 0.5$ worth BTC and ETH</Text>
  <HStack>
  <Box>
    <Heading  as="h4" mr={4} size="lg" letterSpacing={"tighter"}>
      BTC
    </Heading>
    <Image />
    <Text>0 BTC Available</Text>
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
    <Text>0 BTC Available in Wallet</Text>
  </Box>
  <Box>
    <Heading  as="h4" mr={4} size="lg" letterSpacing={"tighter"}>
      ETH
    </Heading>
    <Image />
    <Text>0 ETH Available</Text>
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
    <Text>0 ETH Available in Swapper</Text>
  </Box>
  </HStack>
  <Heading as="h4" mr={4} size="lg" letterSpacing={"tighter"}>
  BTH 👉 BTC + ETH 
  </Heading>
  <Box>
    <Heading  as="h4" mr={4} size="lg" letterSpacing={"tighter"}>
      BTH
    </Heading>
    <Image />
    <Text>0 BTH Available</Text>
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
    <Text>0 BTH Available</Text>
  </Box>
  <HStack>
  <Box>
    <Button>APPROVE BTC</Button>
  </Box>
  <Box>
    <Button>APPROVE ETH</Button>
  </Box>
  <Box>
    <Button>APPROVE BTH</Button>
  </Box>
  </HStack>
  <Box>
    <Button>Create BTH !!!</Button>
    <Button>Decompose BTH !!!</Button>
  </Box>
  <Footer/>
  </Box>
)

export default Bthlabo