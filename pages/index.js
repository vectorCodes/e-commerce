import { Box, GridItem, SimpleGrid } from "@chakra-ui/react";

import Navbar from "../components/Navbar/Navbar";
import Trending from "../components/Trending/Trending";
import Products from "../components/Products/Products";
import FeaturedProduct from "../components/FeaturedProduct";
import Filters from "../components/Filters";
import OfferDetails from "../components/OfferDetails";

export default function Home() {
  return (
    <Box bg={"#F5F5F5"} h="100vh" overflow={"auto"}>
      <Navbar />
      <Box m={"0 auto"} maxW={"7xl"}>
        <Trending />
        <SimpleGrid columns={10} spacing={2} mt={2}>
          <GridItem colSpan={{ base: 10, lg: 3 }}>
            <FeaturedProduct />
          </GridItem>
          <GridItem colSpan={{ base: 10, lg: 7 }}>
            <Products />
            <SimpleGrid columns={10} spacing={2} mt={2}>
              <GridItem colSpan={3} display={{ base: "none", lg: "block" }}>
                <Filters />
              </GridItem>
              <GridItem colSpan={{ base: 10, lg: 7 }}>
                <OfferDetails />
              </GridItem>
            </SimpleGrid>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
}
