import React from 'react'
import Meta from "../components/Meta"
import { Text } from "@chakra-ui/react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Services() {
    return (
        <>
            <Meta title={"Our Services"} />
            <Navbar />
            <Text>Services</Text>
            <Footer />
        </>
    )
}

export default Services