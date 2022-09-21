import React from "react";
import {
  Box,
  Heading,
  HStack,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineFire } from "react-icons/ai";
import { FiMapPin, FiFilter, FiSearch } from "react-icons/fi";
import { RiVideoAddLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi";
import ResponsiveNavbar from "./Responsive Navbar";

const Navbar = () => {
  return (
    <Box>
      <HStack
        px={8}
        py={4}
        bg={"#000000"}
        spacing={16}
        display={{ base: "none", lg: "flex" }}
      >
        <Heading size={"md"} color={"white"}>
          Logo
        </Heading>
        <HStack>
          <AiOutlineMenu size={20} color={"white"} />
          <Text textColor={"white"} fontWeight={"thin"}>
            {" "}
            Menu
          </Text>
        </HStack>
        <HStack>
          <FiMapPin size={20} color={"white"} />
          <Text textColor={"white"} fontWeight={"thin"}>
            Location
          </Text>
        </HStack>
        <HStack spacing={0} flexGrow={1}>
          <IconButton
            bg={"#C0C8D2"}
            roundedLeft={"md"}
            roundedRight={"none"}
            icon={<FiFilter color={"white"} />}
          />

          <InputGroup>
            <InputLeftElement>
              <FiSearch size={20} color={"gray"} />
            </InputLeftElement>
            <Input
              roundedLeft={"none"}
              placeholder="search...."
              bg={"white"}
              type={"search"}
            />
          </InputGroup>
        </HStack>
        <HStack spacing={6}>
          <RiVideoAddLine size={30} color={"#254fe2"} />
          <Text textColor={"white"}>Road Shows</Text>
          <AiOutlineFire size={30} color={"white"} />
          <HiOutlineShoppingBag size={30} color={"white"} />
        </HStack>
      </HStack>
      <Box display={{ base: "flex", lg: "none" }}>
        <ResponsiveNavbar />
      </Box>
    </Box>
  );
};

export default Navbar;
