import { Box, Button, Image,Text } from '@chakra-ui/react'
import Link from 'next/link'
import Footer from '../components/Footer'
import Header from '../components/Header'


const Home = () => (
  <Box>
    <Header />
    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
    <Text>Welcome to Tomb Finance</Text>
    <Text>
    The first algorithmic stablecoin on Fantom Opera, pegged to the price of 1 FTM via seigniorage.

Stake your TOMB-FTM LP in the Cemetery to earn TSHARE rewards. Then stake your earned TSHARE in the Masonry to earn more TOMB!
    </Text>
    <Text>Please visit our documentation before purchasing TOMB or TSHARE!</Text>
    <Text>Total Value Locked</Text>
    <Text>$1,434,811,655</Text>
    <Button>STAKE NOW</Button>
    <Button>FARM NOW</Button>
    <Button>BUY TOMO</Button>
    <Button>BUY TOMOSHARE</Button>

    <Text>Tomo</Text>
    <Button>+狐</Button>
    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
    <Text>Current Price</Text>
    <Text>1.0917FTM</Text>
    <Text>$3.27</Text>
    <Text>Market Cap: $480563748.57</Text>
    <Text>Circulating Supply: 146961391</Text>
    <Text>Total Supply: 146961523</Text>

    <Text>TomoSHARE</Text>
    <Button>+狐</Button>
    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
    <Text>Current Price</Text>
    <Text>1.0917FTM</Text>
    <Text>$3.27</Text>
    <Text>Market Cap: $480563748.57</Text>
    <Text>Circulating Supply: 146961391</Text>
    <Text>Total Supply: 146961523</Text>

    <Text>TomoBond</Text>
    <Button>+狐</Button>
    <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
    <Text>Current Price</Text>
    <Text>1.0917FTM</Text>
    <Text>$3.27</Text>
    <Text>Market Cap: $480563748.57</Text>
    <Text>Circulating Supply: 146961391</Text>
    <Text>Total Supply: 146961523</Text>

    <Text>TOMB-FTM Spooky LP</Text>
    <Text>1.41 TOMB / 1.53 FTM</Text>
    <Text>$9.13</Text>
    <Text>Liquidity: $526862756.83</Text>
    <Text>Total supply: 57733331.51</Text>

    <Footer/>
  </Box>
)

export default Home
