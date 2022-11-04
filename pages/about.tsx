import React from 'react'
import Meta from "../components/Meta"
import { Text } from "@chakra-ui/react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {
    return (
        <>
            <Meta title={"About Us"} />
            <Navbar />
            <Text>About</Text>
            <Footer />
        </>
    )
}

export default About