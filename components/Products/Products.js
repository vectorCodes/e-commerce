import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell",
    price: 1200,
    image: "https://www.pngmart.com/files/22/iPhone-14-PNG-Image.png",
  },
  {
    id: 2,
    title: "SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell",
    price: 1600,
    image: "https://www.pngmart.com/files/22/iPhone-14-PNG-Image.png",
  },
  {
    id: 3,
    title: "SAMSUNG Galaxy S20 FE 5G Factory Unlocked Android Cell",
    price: 100,
    image: "https://www.pngmart.com/files/22/iPhone-14-PNG-Image.png",
  },
];

const Products = () => {
  return (
    <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={2}>
      {products.map((product) => {
        return <ProductCard key={product.id} {...product} cart={2} />;
      })}
    </SimpleGrid>
  );
};

export default Products;
