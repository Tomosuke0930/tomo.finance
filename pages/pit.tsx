import { Box, Button, Heading, HStack, Image,Text } from '@chakra-ui/react'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Pit = () => (
  <Box>
  <Header/>
  <Heading as="h4" mr={4} size="lg" letterSpacing={"tighter"}>
  Buy & Redeem Bonds
  </Heading>
  <Text>Earn premiums upon redemption</Text>
  <HStack>
    <Box>
      <Text>Purchase TBOND</Text>
      <HStack>
        <Box>
        <Image />
        <Text>TOMB</Text>
        </Box>
        →
        <Box>
        <Image />
        <Text>TBOND</Text>
        </Box>  
      </HStack>
      <Text>TOMB is over peg</Text>
      <Button>PURCHASE</Button>
    </Box>
    <Box>
      <Box>
        <Text>💰 TOMB = 1.0751 FTM</Text>
        <Text>Last-Hour TWAP Price</Text>
      </Box>
      <Box>
        <Text>💰 TBOND = 1.08 FTM</Text>
        <Text>Current Price: (TOMB)^2</Text>
      </Box>
    </Box>
    <Box>
      <Text>Redeem TOMB</Text>
      <HStack>
        <Box>
        <Image />
        <Text>TOND</Text>
        </Box>
        →
        <Box>
        <Image />
        <Text>TOMB</Text>
        </Box>  
      </HStack>
      <Text>0.0000 TBOND Available in wallet</Text>
      <Button>REDEEM</Button>
    </Box>
  </HStack>
  <Footer/>
  </Box>
)

export default Pit