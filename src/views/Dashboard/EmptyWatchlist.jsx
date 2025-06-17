import React from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  useColorModeValue,
  Container,
  Heading,
  keyframes,
  Flex,
  Circle,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const EmptyWatchlist = () => {
  const history = useHistory();

  const accentColor = useColorModeValue("blue.500", "blue.300");
  const borderColor = useColorModeValue("white.200", "white.600");

  // Smooth wave animation
  const wave = keyframes`
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  `;

  // Gentle rotation
  const rotate = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

  // Scale pulse
  const scalePulse = keyframes`
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  `;

  return (
    <Container maxW="lg" py={20}>
      <VStack spacing={8} textAlign="center">
        {/* Animated Illustration */}
        <Box position="relative" w="48" h="32">
          {/* Background circles */}
          <Circle
            size="16"
            bg="transparent"
            border="2px solid"
            borderColor={borderColor}
            position="absolute"
            top="0"
            left="16"
            animation={`${rotate} 20s linear infinite`}
            opacity={0.3}
          />
          <Circle
            size="12"
            bg="transparent"
            border="2px solid"
            borderColor={accentColor}
            position="absolute"
            top="4"
            left="18"
            animation={`${rotate} 15s linear infinite reverse`}
            opacity={0.4}
          />

          {/* Floating task icons */}
          <Box
            position="absolute"
            top="8"
            left="8"
            animation={`${wave} 3s ease-in-out infinite`}
            animationDelay="0s"
          >
            <Circle size="8" bg={accentColor} opacity={0.2}></Circle>
          </Box>

          <Box
            position="absolute"
            top="12"
            right="8"
            animation={`${wave} 3s ease-in-out infinite`}
            animationDelay="1s"
          >
            <Circle size="6" bg={accentColor} opacity={0.3}></Circle>
          </Box>

          <Box
            position="absolute"
            bottom="8"
            left="20"
            animation={`${wave} 3s ease-in-out infinite`}
            animationDelay="2s"
          >
            <Circle size="10" bg={accentColor} opacity={0.25}></Circle>
          </Box>

          {/* Central empty state indicator */}
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            w="20"
            h="16"
            border="3px dashed"
            borderColor={"white"}
            borderRadius="2xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            animation={`${scalePulse} 4s ease-in-out infinite`}
          >
            <Text fontSize="3xl">📋</Text>
          </Box>
        </Box>

        {/* Content */}
        <VStack spacing={4} maxW="md">
          <Heading
            size="xl"
            color={"white"}
            fontWeight="bold"
            letterSpacing="tight"
          >
            No Stock is added Yet
          </Heading>

          <Text
            color={"white"}
            fontSize="lg"
            lineHeight="1.8"
            textAlign="center"
          >
            Your watchlist is waiting for its first stock 😊
          </Text>
        </VStack>

        {/* Action Button */}
        <Flex direction="column" align="center" spacing={4}>
          <Button
            colorScheme="blue"
            onClick={() => {
              history.push("/auth/profile");
            }}
            size="lg"
            px={12}
            py={8}
            fontSize="lg"
            fontWeight="semibold"
            borderRadius="full"
            boxShadow="xl"
            _hover={{
              transform: "translateY(-3px)",
              boxShadow: "2xl",
              bg: "blue.500",
            }}
            _active={{
              transform: "translateY(0px)",
            }}
            transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
            bg="blue.400"
          >
            Explore Stocks
          </Button>

          <Text fontSize="sm" color={"white"} opacity={0.8} mt={2}>
            ✨ Start building your portfolio
          </Text>
        </Flex>
      </VStack>
    </Container>
  );
};

export default EmptyWatchlist;
