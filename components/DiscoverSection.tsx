import Image from 'next/image'
import { Box, Heading, Text, SimpleGrid, GridItem } from "@chakra-ui/react"
import PrimaryButtonLg from '../components/PrimaryButtonLg'

function DiscoverSection() {
    return (
        <>
            <Box maxW='container.xl' mx={{ base: 0, md: 'auto', lg: 'auto', xl: 'auto' }} >
                <SimpleGrid px={{ base: 5, md: 4 }} mt='10' columns={{ base: 1, md: 2 }} >
                    <Box mr={{ base: 0, md: 10 }}>
                        <Image src='/Saree_1.jpg' alt='Saree' width='612' height='422' />
                    </Box>
                    <Box display={{ md: 'flex' }} alignItems='center' justifyContent='center'>
                        <Box>
                            <Heading mb={{ base: 3, md: 5 }} color='brand' fontSize={{ base: "22px", md: "30px" }} mt={{ base: 5, md: 0 }}>Discover Our<br />
                                Saree Collections</Heading>
                            <Text mb='5' color='black' lineHeight={{ base: "18px", md: 1.5 }} fontSize={{ base: "14px", md: "16px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </Text>
                            <PrimaryButtonLg title='Explore More!' path='/about' />
                        </Box>
                    </Box>
                </SimpleGrid>
                <SimpleGrid px={{ base: 5, md: 4 }} my='10' columns={{ base: 1, md: 2 }}>
                    <Box display={{ md: 'flex' }} alignItems='center' justifyContent='center'>
                        <Box mr={{ base: 0, md: 10 }} flex='1' mb={{ base: 5, md: 0 }}>
                            <Heading mb={{ base: 3, md: 5 }} color='brand' fontSize={{ base: "22px", md: "30px" }}>Discover Our<br />
                                Jewellery Collections</Heading>
                            <Text mb='5' color='black' lineHeight={{ base: "18px", md: 1.5 }} fontSize={{ base: "14px", md: "16px" }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </Text>
                            <PrimaryButtonLg title='Explore More!' path='/about' />
                        </Box>
                    </Box>
                    <Box>
                        <Image src='/Jewel_1.jpg' alt='Saree' width='612' height='422' />
                    </Box>
                </SimpleGrid>
            </Box>
        </>
    )
}

export default DiscoverSection

