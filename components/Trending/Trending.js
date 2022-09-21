import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Trending = () => {
  return (
    <Box mt={2} rounded={"md"} bg={"white"}>
      <Text textColor={"gray.500"} px={4}>
        Whats...
      </Text>
      <Heading fontWeight={"semibold"} size={"md"} px={4}>
        Trending
      </Heading>
    </Box>
  );
};

export default Trending;
