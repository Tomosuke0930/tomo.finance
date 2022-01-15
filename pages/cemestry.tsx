import { Box, Button, Heading, HStack, Image,Text } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Cemestry = () => (
  <Box>
  <Header/>
  <Heading as="h4" mr={4} size="lg" letterSpacing={"tighter"}>
    Earn TOMOSHARE by staking LP
  </Heading>
  <Box>
    <HStack>
      <Heading>TOMO-BTH-LP</Heading>
      <Image />
    </HStack>
    <Text>Deposit TOMB-FTM-LP Earn</Text>
    <Text>TSHARE</Text>
    <Button>VIEW</Button>
  </Box>
  <Box>
    <HStack>
      <Heading>TSHARE-FTM-LP</Heading>
      <Image src='' alt='Dan Abramov' />

    </HStack>
    <Text>Deposit TSHARE-FTM-LP Earn</Text>
    <Text>TSHARE</Text>
    <Button>VIEW</Button>
  </Box>
  <Heading as="h4" mr={4} size="lg" letterSpacing={"tighter"}>
  Earn TOMB by staking LP
  </Heading>
  <Box>
    <HStack>
      <Heading>TOMO-BTH-LP</Heading>
      <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />

    </HStack>
    <Text>Deposit TOMB-FTM-LP Earn TOMB</Text>
    <Button>VIEW</Button>
  </Box>
  <Footer/>
  </Box>
)

export default Cemestry
