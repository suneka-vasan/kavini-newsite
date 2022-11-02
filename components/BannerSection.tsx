import { Image, Box, Text, Heading, Flex } from "@chakra-ui/react"
import PrimaryButtonLg from '../components/PrimaryButtonLg'

function BannerSection() {
    return (
        <Box>
            <Flex
                align={"center"}
                h={{ base: 400, md: 614 }}
                style={{
                    backgroundImage: 'url(/banner_1.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: 'container.xl',
                }} >
                <Box className="Bannertext" ml={{ base: 10, md: 80 }}>
                    <Text color="#033303" pb={0}>Weekend Sale!</Text>
                    <Heading color="#033303" pb={5}>Discover Spring Collection</Heading>
                    <PrimaryButtonLg title='Shop Now' path='/about' />
                </Box>
            </Flex>
        </Box >
    )
}

export default BannerSection