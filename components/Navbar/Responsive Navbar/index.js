import React from "react";
import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { RiVideoAddLine } from "react-icons/ri";

const ResponsiveNavbar = () => {
  return (
    <Box p={4} bg={"black"} w={"full"}>
      <HStack justifyContent={"space-between"}>
        <AiOutlineMenu size={20} color={"white"} />
        <Image src="/images/Koboldo_logo@2x.png" alt="logo" w="20" />
        <HStack spacing={6}>
          <FiSearch size={20} color={"white"} />
          <RiVideoAddLine size={20} color={"blue"} />
        </HStack>
      </HStack>
    </Box>
  );
};

export default ResponsiveNavbar;
