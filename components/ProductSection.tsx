import { Box, Heading, SimpleGrid } from "@chakra-ui/react"
import ProductList from '../components/ProductList'

function ProductSection() {
    return (
        <div>
            <Box bg='#FFF4E6' >
                <Box maxW='container.xl' mx={{ base: 0, md: 'auto' }} >
                    <Heading pt='10' color='#033303' textAlign='center' mb='5'>Trending Products</Heading>
                    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} justifyItems={"center"} gap={5} pb='10' px={{ sm: 0, md: 4, lg: 0 }}>
                        <ProductList />
                    </SimpleGrid>
                </Box>
            </Box>
        </div>
    )
}

export default ProductSection