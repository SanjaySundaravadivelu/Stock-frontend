import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    product: "",
  });
  const [currentSearch, setCurrentSearch] = useState("");
  const toast = useToast();

  const { searchStock } = useProductStore();

  const searchProduct = async () => {
    const res = await searchStock(currentSearch);
    setNewProduct({
      product: res.data,
    });
  };

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    //setNewProduct({ user_id: "sanjay", product: `` });
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Stock Name"
              name="name"
              value={newProduct.name}
              onChange={(e) => setCurrentSearch(e.target.value)}
            />
            <Button colorScheme="blue" onClick={searchProduct} w="full">
              Search
            </Button>
            {newProduct.product && (
              <>
                <h1>{JSON.parse(newProduct.product).companyName}</h1>
                <h2>
                  {JSON.parse(newProduct.product).companyProfile &&
                    JSON.parse(newProduct.product).companyProfile
                      .companyDescription}
                </h2>
              </>
            )}
            <Button colorScheme="blue" onClick={handleAddProduct} w="full">
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};
export default CreatePage;
