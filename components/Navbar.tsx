import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    RadioGroup, Button, Stack, Radio, Input, useDisclosure, Link, Image, IconButton, Flex, Box, Spacer, HStack, VStack
} from '@chakra-ui/react'
import { BsSearch, BsHeart, BsBag, BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box w='100%' bgColor='#033303'>
                <Box maxW='container.xl' mx={{ md: 'auto' }}>
                    {/* Desktop */}

                    <Flex
                        display={['none', 'none', 'flex', 'flex']}
                        color='#DDAC66'>
                        <Box p='4'>
                            <Link href="/"><Image src='/Logo.png' alt='Logo' width='150' height='33' /></Link>
                        </Box>
                        <Spacer />
                        <HStack spacing='50px'>
                            <Link href="/">
                                Home
                            </Link>
                            <Link href="/about">
                                About Us
                            </Link>
                            <Link href="/about">
                                Products
                            </Link>
                            <Link href="/services">
                                Services
                            </Link>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </HStack>
                        <Spacer />
                        <HStack spacing='50px'>
                            <BsSearch />
                            <BsHeart />
                            <BsBag />
                        </HStack>
                    </Flex>


                </Box>
            </Box>
            <Box display={['flex', 'flex', 'none', 'none']} bgColor='#033303'>
                <Flex p='2' justifyContent="flex-start">
                    <Link href="/"><Image src='/Logo.png' alt='Logo' width='150' height='33' /></Link>
                </Flex>
                <Spacer />
                <Flex justifyContent="flex-end">
                    <IconButton onClick={onOpen}
                        aria-label="Open Menu"
                        color='#DDAC66'
                        bgColor='transparent'
                        size="lg"
                        icon={
                            <HamburgerIcon />
                        }
                    />
                </Flex>
            </Box>

            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />

                    <DrawerBody>
                        <VStack>
                            <Link href="/">
                                Home
                            </Link>
                            <Link href="/about">
                                About Us
                            </Link>
                            <Link href="/services">
                                Services
                            </Link>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </VStack>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}
export default Navbar