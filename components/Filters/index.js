import React, { useState } from "react";
import { Box, HStack, Image, Stack, Tag, Text } from "@chakra-ui/react";

const Filters = () => {
  const [active, setActive] = useState(0);
  return (
    <Box p={4} bg={"white"} rounded={"sm"}>
      <Text textColor={"black"} fontSize={"lg"}>
        Condition
      </Text>
      <HStack mt={2} cursor={"pointer"}>
        <Tag
          colorScheme={"white"}
          onClick={() => {
            setActive(0);
          }}
          border={active === 0 ? "1px solid #000" : ""}
          rounded={"md"}
          textColor={active === 0 ? "black" : "gray.400"}
        >
          New
        </Tag>
        <Tag
          colorScheme={"white"}
          onClick={() => {
            setActive(1);
          }}
          border={active === 1 ? "1px solid #000" : ""}
          rounded={"md"}
          textColor={active === 1 ? "black" : "gray.400"}
        >
          New-Open Box
        </Tag>
      </HStack>
      <Box mt={2}>
        <Text textColor={"black"} fontSize={"lg"}>
          Color
        </Text>
        <HStack spacing={4}>
          <Stack spacing={1}>
            <Box border={"1px solid black"} p={1} rounded={"md"}>
              <Image src="/images/blue.svg" alt="blue" />
            </Box>
            <Text textAlign={"center"} textColor={"black"} fontSize={"lg"}>
              Blue
            </Text>
          </Stack>
          <Stack spacing={1}>
            <Box border={"1px solid gray"} p={1} rounded={"md"}>
              <Image src="/images/green.svg" alt="blue" />
            </Box>
            <Text textAlign={"center"} textColor={"gray.400"} fontSize={"lg"}>
              Green
            </Text>
          </Stack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Filters;
