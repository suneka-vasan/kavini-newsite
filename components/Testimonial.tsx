import React, { Component } from "react";
import { Flex, Container, Heading, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            fade: true,
            draggable: false,
            swipe: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            cssEase: "ease-in"
        };
        return (
            <div>
                <Flex
                    align={"center"}
                    h={{ base: 400, md: 400, xl: 500 }}
                    mt={{ base: "50px", md: "50px" }}
                    style={{
                        backgroundImage: 'url(/Bg.jpg)',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: 'container.xl',
                    }}>
                    <Container maxW="container.xl">
                        <Heading mb={10} color="#C99035" textAlign={"center"}>What People Say</Heading>
                        <Slider {...settings}>
                            <div>
                                <Text color='white' textAlign={"center"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text><br />
                                <Text color='#C99035' textAlign={"center"}>Name 1</Text><br />
                            </div>
                            <div>
                                <Text color='white' textAlign={"center"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text><br />
                                <Text color='#C99035' textAlign={"center"}>Name 2</Text><br />
                            </div>
                            <div>
                                <Text color='white' textAlign={"center"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</Text><br />
                                <Text color='#C99035' textAlign={"center"}>Name 3</Text><br />
                            </div>
                        </Slider>
                    </Container>
                </Flex>

            </div>
        );
    }
}