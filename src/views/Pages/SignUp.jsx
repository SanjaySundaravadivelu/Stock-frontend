// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Link,
  Switch,
  Text,
  Icon,
  DarkMode,
} from "@chakra-ui/react";

// Icons
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
// Custom Components
import AuthFooter from "../../components/Footer/AuthFooter";
import GradientBorder from "../../components/GradientBorder/GradientBorder";

// Assets
import signUpImage from "../../assets/img/signUpImage.png";
import { useHistory } from "react-router-dom";
import { useProductStore } from "../../store/product";
import React, { useEffect, useState } from "react";
function SignUp() {
  const titleColor = "white";
  const textColor = "gray.400";
  const history = useHistory();
  const navi = () => {
    setTimeout(() => {
      history.push("/admin/profile");
    }, 100);
  };
  const { signUp } = useProductStore();
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  const onSubmit = async () => {
    const res = await signUp(username, password, email);
  };

  return (
    <Flex position="relative">
      <Flex
        minH="100vh"
        h={{ base: "120vh", lg: "fit-content" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        alignItems="center"
        pt={{ sm: "100px", md: "0px" }}
        flexDirection="column"
      >
        <Flex
          alignItems="center"
          style={{ userSelect: "none" }}
          flexDirection="column"
        >
          <Flex
            direction="column"
            textAlign="center"
            justifyContent="center"
            align="center"
            mt={{ base: "60px", md: "140px", lg: "200px" }}
            mb="50px"
          >
            <Text
              fontSize="4xl"
              lineHeight="39px"
              color="white"
              fontWeight="bold"
            >
              Welcome!
            </Text>
            <Text
              fontSize="md"
              color="white"
              fontWeight="normal"
              mt="10px"
              w={{ base: "100%", md: "90%", lg: "90%", xl: "80%" }}
            >
              Use these awesome forms to login or create new account in your
              project for free.
            </Text>
          </Flex>
          <GradientBorder p="2px" me={{ base: "none", lg: "30px", xl: "none" }}>
            <Flex
              background="transparent"
              borderRadius="30px"
              direction="column"
              p="40px"
              minW={{ base: "unset", md: "430px", xl: "450px" }}
              w="100%"
              mx={{ base: "0px" }}
              bg={{
                base: "rgb(19,21,56)",
              }}
            >
              <Text
                fontSize="xl"
                color={textColor}
                fontWeight="bold"
                textAlign="center"
                mb="22px"
              >
                Register With
              </Text>
              <HStack spacing="15px" justify="center" mb="22px">
                <GradientBorder borderRadius="15px">
                  <Flex
                    _hover={{ filter: "brightness(120%)" }}
                    transition="all .25s ease"
                    cursor="pointer"
                    justify="center"
                    align="center"
                    bg="rgb(19,21,54)"
                    w="71px"
                    h="71px"
                    borderRadius="15px"
                  >
                    <Link href="#">
                      <Icon
                        color={titleColor}
                        as={FaFacebook}
                        w="30px"
                        h="30px"
                        _hover={{ filter: "brightness(120%)" }}
                      />
                    </Link>
                  </Flex>
                </GradientBorder>
                <GradientBorder borderRadius="15px">
                  <Flex
                    _hover={{ filter: "brightness(120%)" }}
                    transition="all .25s ease"
                    cursor="pointer"
                    justify="center"
                    align="center"
                    bg="rgb(19,21,54)"
                    w="71px"
                    h="71px"
                    borderRadius="15px"
                  >
                    <Link href="#">
                      <Icon
                        color={titleColor}
                        as={FaApple}
                        w="30px"
                        h="30px"
                        _hover={{ filter: "brightness(120%)" }}
                      />
                    </Link>
                  </Flex>
                </GradientBorder>
                <GradientBorder borderRadius="15px">
                  <Flex
                    _hover={{ filter: "brightness(120%)" }}
                    transition="all .25s ease"
                    cursor="pointer"
                    justify="center"
                    align="center"
                    bg="rgb(19,21,54)"
                    w="71px"
                    h="71px"
                    borderRadius="15px"
                  >
                    <Link href="#">
                      <Icon
                        color={titleColor}
                        as={FaGoogle}
                        w="30px"
                        h="30px"
                        _hover={{ filter: "brightness(120%)" }}
                      />
                    </Link>
                  </Flex>
                </GradientBorder>
              </HStack>
              <Text
                fontSize="lg"
                color="gray.400"
                fontWeight="bold"
                textAlign="center"
                mb="22px"
              >
                or
              </Text>
              <FormControl>
                <FormLabel
                  color={titleColor}
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                >
                  Name
                </FormLabel>

                <GradientBorder
                  mb="24px"
                  h="50px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)",
                    }}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="46px"
                    type="text"
                    placeholder="Your name"
                  />
                </GradientBorder>
                <FormLabel
                  color={titleColor}
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                >
                  Email
                </FormLabel>
                <GradientBorder
                  mb="24px"
                  h="50px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color={titleColor}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    bg={{
                      base: "rgb(19,21,54)",
                    }}
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="46px"
                    type="email"
                    placeholder="Your email address"
                  />
                </GradientBorder>
                <FormLabel
                  color={titleColor}
                  ms="4px"
                  fontSize="sm"
                  fontWeight="normal"
                >
                  Password
                </FormLabel>
                <GradientBorder
                  mb="24px"
                  h="50px"
                  w={{ base: "100%", lg: "fit-content" }}
                  borderRadius="20px"
                >
                  <Input
                    color={titleColor}
                    bg={{
                      base: "rgb(19,21,54)",
                    }}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    border="transparent"
                    borderRadius="20px"
                    fontSize="sm"
                    size="lg"
                    w={{ base: "100%", md: "346px" }}
                    maxW="100%"
                    h="46px"
                    type="password"
                    placeholder="Your password"
                  />
                </GradientBorder>
                <FormControl display="flex" alignItems="center" mb="24px">
                  <DarkMode>
                    <Switch id="remember-login" colorScheme="brand" me="10px" />
                  </DarkMode>

                  <FormLabel
                    color={titleColor}
                    htmlFor="remember-login"
                    mb="0"
                    fontWeight="normal"
                  >
                    Remember me
                  </FormLabel>
                </FormControl>
                <Button
                  variant="brand"
                  fontSize="10px"
                  type="submit"
                  w="100%"
                  maxW="350px"
                  h="45"
                  mb="20px"
                  mt="20px"
                  onClick={() => onSubmit()}
                >
                  SIGN UP
                </Button>
              </FormControl>
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                maxW="100%"
                mt="0px"
              >
                <Text color={textColor} fontWeight="medium">
                  Already have an account?
                  <Link
                    color={titleColor}
                    as="span"
                    ms="5px"
                    href="#"
                    fontWeight="bold"
                  >
                    Sign In
                  </Link>
                </Text>
              </Flex>
            </Flex>
          </GradientBorder>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
