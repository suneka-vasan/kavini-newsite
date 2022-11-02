import { Image, Box, Text, Heading } from "@chakra-ui/react"
import PrimaryButtonLg from '../components/PrimaryButtonLg'

function BannerSection() {
    return (
        <Box>
            <Box
                className="responsive-img"
                pos={"relative"}
                h={{ base: 400, md: 614 }}
                style={{
                    backgroundImage: 'url(/Banner_1.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: "100%",
                }} >
                <Box pos={"absolute"} top={{ base: 28, md: 72 }} left={{ base: 10, md: 80 }} className="Bannertext">
                    <Text color="#033303" pb={0}>Weekend Sale!</Text>
                    <Heading color="#033303" pb={5}>Discover Spring Collection</Heading>
                    <PrimaryButtonLg title='Shop Now' path='/about' />
                </Box>
            </Box>
        </Box >
    )
}

export default BannerSection