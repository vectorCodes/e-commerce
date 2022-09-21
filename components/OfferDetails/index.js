import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Select,
  Text,
} from "@chakra-ui/react";

const OfferDetails = () => {
  return (
    <Box bg={"white"} p={4}>
      <Center>
        <Text textColor={"black"} fontSize={"2xl"} fontWeight={"semibold"}>
          My Offer Details
        </Text>
      </Center>
      <Box mt={6} pb={7}>
        <Flex maxW="sm" m="auto" gap={3}>
          <Box>
            <Text fontSize={10}>Request</Text>
            <Text fontWeight={"bold"}>Quantity</Text>
          </Box>
          <Box flexGrow={1}>
            <Select placeholder="Select">
              <option>1</option>
            </Select>
            <Button w="full" colorScheme={"blue"} mt={2}>
              My Offer
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default OfferDetails;
