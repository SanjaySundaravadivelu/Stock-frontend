import React, { useEffect, useState } from "react";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  DarkMode,
} from "@chakra-ui/react";
import { useProductStore } from "../../store/product.jsx";
// Assets
import signInImage from "../../assets/img/signInImage.png";

// Custom Components
import AuthFooter from "../../components/Footer/AuthFooter";
import GradientBorder from "../../components/GradientBorder/GradientBorder";
import { useHistory } from "react-router-dom";

function SignIn() {
  const titleColor = "white";
  const textColor = "gray.400";
  const { isAuth, setIsAuth, login } = useProductStore();
  const history = useHistory();
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const onSubmit = async () => {
    const res = await login(email, password);
    localStorage.setItem("token", res.data.token);
    setIsAuth(true);
    history.push("/admin/dashboard");
  };
  return (
    <Flex position="relative">
      <Flex
        minH="100vh"
        h={{ base: "120vh", lg: "fit-content" }}
        w={{ base: "335px", md: "450px" }}
        alignItems="center"
        maxW="1044px"
        mx="auto"
        pt={{ sm: "100px", md: "0px" }}
        flexDirection="column"
      >
        <Flex
          direction="column"
          w="100%"
          background="transparent"
          mt={{ base: "50px", md: "150px", lg: "160px", xl: "245px" }}
          mb={{ base: "60px", lg: "95px" }}
          alignItems="baseline"
        >
          <Heading color={titleColor} fontSize="32px" mb="10px">
            Nice to see you!
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColor}
            fontWeight="bold"
            fontSize="14px"
          >
            Enter your email and password to sign in
          </Text>
        </Flex>

        <Box
          w={{ base: "335px", md: "450px" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          mb="80px"
        >
          <AuthFooter />
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
