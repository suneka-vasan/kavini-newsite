import { Image, Box, Text, Heading } from "@chakra-ui/react"
import PrimaryButtonLg from '../components/PrimaryButtonLg'

function BannerSection() {
    return (
        <Box>
            <Image
                className="responsive-img"
                pos={"relative"}
                src='/banner_1.jpg'
                alt='Banner Image'
                width={1920}
                height={{}}
                objectFit='fill' />
            <Box pos={"absolute"} top={{ base: 10, md: 72 }} left={{ base: 20, md: 80 }} className="Bannertext">
                <Text color="#033303" pb={0}>Weekend Sale!</Text>
                <Heading color="#033303" pb={5}>Discover Spring Collection</Heading>
                <PrimaryButtonLg title='Shop Now' path='/about' />
            </Box>
        </Box >
    )
}

export default BannerSection