import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  useToast,
  Fade,
  Spinner,
  Image,
  Icon,
} from "@chakra-ui/react";
import {
  BiHappy,
  BiHappyHeartEyes,
  BiDizzy,
  BiSad,
  BiAngry,
  BiRefresh,
} from "react-icons/bi";
import { useProductStore } from "../../store/product.jsx";
import { useHistory } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
const BEURL = import.meta.env.VITE_BE_URL;

const SignIn = () => {
  const { setIsAuth } = useProductStore();
  const history = useHistory();
  const toast = useToast();
  const [loaded, setLoaded] = useState(false);
  const [authenticating, setAuthenticating] = useState(false);

  const handleCredentialResponse = (response) => {
    const token = response.credential;
    setAuthenticating(true);

    fetch(BEURL + "/api/products/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ credential: token }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAuthenticating(false);
        if (data.token) {
          localStorage.setItem("token", data.token);
          setIsAuth(true);
          history.push("/auth/dashboard");
          window.location.reload();
        } else {
          throw new Error(data.message || "Login failed");
        }
      })
      .catch((err) => {
        setAuthenticating(false);
        toast({
          title: "Authentication Error",
          description: err.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    const initializeGoogle = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id:
            "1077196841355-p0e18p9oloids5omou8uahs5m0jmqbju.apps.googleusercontent.com",
          callback: handleCredentialResponse,
        });

        window.google.accounts.id.renderButton(
          document.getElementById("google-signin"),
          { theme: "outline", size: "large", width: "300" }
        );

        window.google.accounts.id.prompt();
      }
    };

    const waitForGoogle = setInterval(() => {
      if (window.google && window.google.accounts) {
        initializeGoogle();
        clearInterval(waitForGoogle);
      }
    }, 100);

    setTimeout(() => setLoaded(true), 100);
  }, []);

  const bgColor = useColorModeValue("gray.50", "gray.800");
  const boxBg = useColorModeValue(
    "rgba(255, 255, 255, 0.8)",
    "rgba(26, 32, 44, 0.7)"
  );
  const titleColor = useColorModeValue("white.800", "white");
  const textColor = useColorModeValue("white.600", "white.300");

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bgSize="cover"
      bgPosition="center"
    >
      <Fade in={loaded}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="center"
          backdropFilter="blur(70px)"
          p="10"
          rounded="2xl"
          boxShadow="xl"
          w="100%"
          maxW="4xl"
          border="1px solid rgba(255, 255, 255, 0.2)"
          gap={10}
        >
          {/* SVG Illustration */}
          <Box display={{ base: "none", md: "block" }}>
            <Box textAlign="center" flex="1">
              <Heading mb="4" fontSize="2xl" color="whiteAlpha.800">
                Welcome to Stock Pulse
              </Heading>
              <DotLottieReact
                src="https://lottie.host/980c164d-b1f2-4caf-9cb9-b6c691275690/jM8UciwjWn.lottie"
                loop
                autoplay
                style={{ width: "400px", height: "200px" }}
              />
            </Box>
            <Heading fontSize="l" color="whiteAlpha.800">
              Log in to Analyze stocks, mutual funds & IPOs – all in one place
            </Heading>
          </Box>

          {/* Auth Box */}
          <Box textAlign="center" flex="1">
            <DotLottieReact
              src="https://lottie.host/bc2f92ab-c25e-4c06-ae79-84f89c1e8a56/cH4vAwNmA3.lottie"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></DotLottieReact>

            {authenticating ? (
              <Spinner size="lg" color="green.400" />
            ) : (
              <Box id="google-signin" display="inline-block" />
            )}
          </Box>
        </Flex>
      </Fade>
    </Flex>
  );
};

export default SignIn;
