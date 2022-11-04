import { Image, Box, Text, Heading, Flex } from "@chakra-ui/react"
import PrimaryButtonLg from '../components/PrimaryButtonLg'

function BannerSection() {
    return (
        <Box
            h={{ base: 400, md: 614 }}
            style={{
                backgroundImage: 'url(/banner_1.jpg)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} >
            <Box maxW='container.xl' mx={{ base: 0, md: 'auto' }} pt={{ base: 36, md: 60 }} pl={{ base: 5, md: 4, lg: 0 }}>
                <Text color="#033303" pb={0}>Weekend Sale!</Text>
                <Heading color="#033303" pb={5} fontSize={{ base: "24px", md: "36px" }}>Discover Spring Collection</Heading>
                <PrimaryButtonLg title='Shop Now' path='/about' />
            </Box>
        </Box >
    )
}

export default BannerSection