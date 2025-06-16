import { ProfileIcon } from "../Icons/Icons";
import { SidebarResponsive } from "../Sidebar/Sidebar";
import { useHistory } from "react-router-dom";
import * as jwt_decode from "jwt-decode";
import PropTypes from "prop-types";
import routes from "../../routes";
import React, { useEffect, useState } from "react";
import userimg from "../../assets/img/user.png";
import cardbg from "../../assets/img/cardbg.jpg";

// Chakra Imports
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function HeaderLinks(props) {
  const { variant, fixed, secondary, onOpen, ...rest } = props;
  const history = useHistory();
  const [user, setUser] = useState();
  // Colors
  let navbarIcon = "white";
  let mainText = "gray.400";
  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }
  function getReamining(user) {
    const today = new Date();
    const date = new Date(user.createdAt);

    return Math.round((date - today) / (1000 * 60 * 60 * 24));
  }
  useEffect(() => {
    const token = localStorage.getItem("token");

    try {
      if (token) {
        const user1 = jwt_decode.jwtDecode(token);
        setUser(user1.user);
      }
    } catch (error) {
      console.error("Invalid token", error);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
      <SidebarResponsive
        iconColor="gray.500"
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        {...rest}
      />

      <Menu>
        <MenuButton align="center">
          <ProfileIcon
            color={navbarIcon}
            mt="-4px"
            w="18px"
            h="18px"
            ml="20px"
            mr="20px"
          />
        </MenuButton>

        <MenuList
          border="transparent"
          backdropFilter="blur(63px)"
          bg="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.69) 76.65%)"
          borderRadius="20px"
          px="16px"
          py="12px"
        >
          {user ? (
            <Center py={6} color="white">
              <Box
                maxW={"270px"}
                w={"full"}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
              >
                <Image
                  h={"120px"}
                  w={"full"}
                  src={cardbg}
                  objectFit="cover"
                  alt="#"
                />
                <Flex justify={"center"} mt={-12}>
                  <Avatar
                    size={"xl"}
                    src={userimg}
                    css={{
                      border: "2px solid white",
                    }}
                  />
                </Flex>

                <Box p={6}>
                  <Stack spacing={0} align={"center"}>
                    <Heading
                      fontSize={"2xl"}
                      fontWeight={500}
                      fontFamily={"body"}
                    >
                      {user.username || "User"}
                    </Heading>
                    <Text color={"gray.500"}> {user.email || "User"}</Text>
                  </Stack>
                  <Stack spacing={0} align={"center"}>
                    <Text color={"gray.500"}>
                      {" "}
                      Free trail - {getReamining(user) || "User"} days remaining
                    </Text>
                  </Stack>

                  <Button
                    w={"full"}
                    mt={8}
                    bg={useColorModeValue("#151f21", "gray.600")}
                    color={"white"}
                    rounded={"md"}
                    onClick={handleLogout}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                  >
                    Log out
                  </Button>
                </Box>
              </Box>
            </Center>
          ) : (
            <Text color="white">Not signed in</Text>
          )}
        </MenuList>
      </Menu>
    </Flex>
  );
}

HeaderLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};
