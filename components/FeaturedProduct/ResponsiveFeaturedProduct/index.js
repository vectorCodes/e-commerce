import React from "react";
import { Box, Center, HStack, Image } from "@chakra-ui/react";
import { images } from "../index";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResponsiveFeaturedProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box>
      <Slider {...settings}>
        {images.map((image, index) => (
          <HStack key={index}>
            <Center>
              <Image src={image} h={"60"} alt="logo" />
            </Center>
          </HStack>
        ))}
      </Slider>
    </Box>
  );
};

export default ResponsiveFeaturedProduct;
