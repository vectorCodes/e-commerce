import React from "react";
import {
  Box,
  Center,
  HStack,
  Image,
  Spacer,
  Tag,
  Text,
} from "@chakra-ui/react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsFillBarChartFill, BsHeart } from "react-icons/bs";

const ProductCard = ({ title, price, expiry, image, cart }) => {
  return (
    <Box bg={"white"} rounded={"sm"} p={2} position="relative">
      <HStack alignItems={"flex-start"}>
        <Box position={"relative"}>
          <HiOutlineShoppingBag size={28} color={"gray"} />
          <Box
            bg={"black"}
            rounded={"full"}
            p={2}
            position={"absolute"}
            left={3}
            top={3}
          >
            <Center
              fontWeight={"thin"}
              fontSize={"xs"}
              textColor={"white"}
              h={"3px"}
              w={"3px"}
            >
              +{cart}
            </Center>
          </Box>
        </Box>
      </HStack>
      <Box position={"absolute"} top={4} right={4}>
        <Box rounded={"full"} bg={"white"} shadow={"lg"} p={2}>
          <BsFillBarChartFill size={23} color={"gray"} />
        </Box>
        <Box rounded={"full"} bg={"white"} shadow={"lg"} p={2} mt={2}>
          <BsHeart size={23} color={"gray"} />
        </Box>
      </Box>
      <Center>
        <Image height={"12em"} src={image} alt="logo" />
      </Center>
      <Box mt={2}>
        <Text fontWeight={"bold"} fontSize={"xl"} textAlign={"center"}>
          {title}
        </Text>
      </Box>
      <Center mt={2}>
        <Tag>Your Price</Tag>
      </Center>
      <Center mt={2}>
        <Text fontSize={"xl"} fontWeight={"semibold"}>
          ${price}
        </Text>
      </Center>
    </Box>
  );
};

export default ProductCard;
