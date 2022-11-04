import React from 'react'
import Meta from "../components/Meta"
import { Text } from "@chakra-ui/react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
    return (
        <>
            <Meta title={"Contact Us"} />
            <Navbar />
            <Text>Contact</Text>
            <Footer />
        </>
    )
}

export default Contact