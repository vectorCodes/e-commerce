import React, { useState } from "react";
import { Box, HStack, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import ResponsiveFeaturedProduct from "./ResponsiveFeaturedProduct";

export const images = [
  "/assets/1@2x.png",
  "/assets/2@2x.png",
  "/assets/71usm8vWd1L._AC_SL1500_.png",
  "/assets/Group 3336@2x.png",
];

const FeaturedProduct = () => {
  const [active, setActive] = useState(0);
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <Box p={4} rounded={"sm"} bg={"white"}>
      <HStack
        spacing={4}
        alignItems="flex-start"
        display={{ base: "none", lg: "flex" }}
      >
        <Stack spacing={2} h="300px" overflow={"auto"} cursor={"pointer"}>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              w={"20"}
              h={"20"}
              alt="logo"
              onClick={() => {
                setActive(index);
              }}
              border={index === active ? "2px solid gray" : "2px solid white"}
            />
          ))}
        </Stack>

        <Box>
          <Image src={images[active]} w={"300px"} alt="logo" />
        </Box>
      </HStack>
      <Box display={{ base: "block", lg: "none" }}>
        <ResponsiveFeaturedProduct />
      </Box>
      <Box mt={6}>
        <Text
          textColor={"black"}
          fontSize={{ base: "xl", lg: "2xl" }}
          fontWeight={"semibold"}
        >
          SAMSUNG Galaxy S20 FE 5G Factory Unlocked New Android Cell Phone New
          64GB Orange
        </Text>
      </Box>
      <HStack>
        <ReactStars
          count={5}
          onChange={handleRating}
          size={24}
          activeColor="#ffd700"
          value={rating}
        />
        <Text textColor={"gray.500"} fontSize={"sm"}>
          (7,144 ratings)
        </Text>
      </HStack>
      <Box mt={{ base: 2, lg: 4 }}>
        <Text textColor={"gray.500"} fontSize={"sm"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo
        </Text>
      </Box>
    </Box>
  );
};

export default FeaturedProduct;
