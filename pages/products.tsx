import React from 'react'
import Meta from "../components/Meta"
import { Text } from "@chakra-ui/react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Products() {
    return (
        <>
            <Meta title={"Our Products"} />
            <Navbar />
            <Text>Products</Text>
            <Footer />
        </>
    )
}

export default Products