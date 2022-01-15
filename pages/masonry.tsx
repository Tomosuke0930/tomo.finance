import { Box, Button, Heading, HStack, Image,Text } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Masonry = () => (
  <Box>
  <Header/>
  <Heading as="h4" mr={4} size="lg" letterSpacing={"tighter"}>
    Masonry
  </Heading>
  <HStack>
    <Box>
      <Text>Next Epoch</Text>
      <Text>000000</Text>
    </Box>
    <Box>
      <Text>Current Epoch</Text>
      <Text>000000</Text>
    </Box>
    <Box>
      <Text>TOMB Price(TWAP)</Text>
      <Text>000000</Text>
    </Box>    <Box>
      <Text>APR</Text>
      <Text>000000</Text>
    </Box>
    <Box>
      <Text>TSHARES Staked</Text>
      <Text>000000</Text>
    </Box>
  </HStack>
  <HStack>
    <Box>
      <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
      <Heading>0.0000</Heading>
      <Text>≈ $0.00</Text>
      <Text>TOMB Earned</Text>
      <Button>CLAIM REWARD</Button>
    </Box>
    <Box>
      <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
      <Heading>0.0000</Heading>
      <Text>≈ $0.00</Text>
      <Text>TSHARE Staked</Text>
      <HStack>
        <Button>-</Button>
        <Button>+</Button>
      </HStack>
      <Button>CLAIM AND WITHDRAW</Button>
    </Box>
  </HStack>
  <Footer/>
  </Box>
)

export default Masonry