import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Button,
  Badge,
  List,
  ListItem,
  ListIcon,
  Divider,
  Switch,
  FormControl,
  FormLabel,
  useColorModeValue,
  Icon,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { CheckIcon, StarIcon } from "@chakra-ui/icons";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bgColor = "gray.900";
  const cardBg = "gray.800";
  const primaryColor = "blue.300";
  const textColor = "gray.300";

  const plans = [
    {
      name: "Starter",
      description: "Perfect for beginners exploring the stock market",
      monthlyPrice: 299,
      annualPrice: 2390, // 20% discount
      features: [
        "Basic stock analysis for 50 stocks",
        "Market news and updates",
        "Simple portfolio tracker",
        "Basic charts and indicators",
        "Email support",
        "1 watchlist (up to 20 stocks)",
      ],
      color: "gray",
      popular: false,
    },
    {
      name: "Professional",
      description: "Advanced tools for serious investors",
      monthlyPrice: 999,
      annualPrice: 7992, // 33% discount
      features: [
        "Advanced analysis for 500+ stocks",
        "Mutual fund recommendations",
        "IPO alerts and analysis",
        "Custom dashboard",
        "Technical & fundamental analysis",
        "Weekly email reports",
        "5 watchlists (unlimited stocks)",
        "Real-time market data",
        "Priority email & chat support",
      ],
      color: "blue",
      popular: true,
    },
    {
      name: "Premium",
      description: "Complete solution for professional traders",
      monthlyPrice: 1999,
      annualPrice: 15992, // 33% discount
      features: [
        "Unlimited stock analysis",
        "AI-powered recommendations",
        "Advanced IPO insights",
        "Personalized portfolio optimization",
        "Daily market reports via email",
        "Custom alerts and notifications",
        "Unlimited watchlists",
        "API access for data export",
        "Advanced risk management tools",
        "Dedicated account manager",
        "24/7 priority support",
      ],
      color: "purple",
      popular: false,
    },
  ];

  const features = [
    {
      icon: "📈",
      title: "Advanced Analytics",
      description:
        "Deep dive into stock performance with comprehensive technical and fundamental analysis",
    },
    {
      icon: "🤖",
      title: "AI Recommendations",
      description:
        "Get personalized investment recommendations powered by machine learning algorithms",
    },
    {
      icon: "⚡",
      title: "Real-time Data",
      description:
        "Access live market data and instant notifications for better decision making",
    },
  ];

  return (
    <Box minH="100vh" py={16}>
      <Container maxW="7xl">
        {/* Header Section */}
        <VStack spacing={8} textAlign="center" mb={16}>
          <Heading size="2xl" color={primaryColor}>
            Choose Your Investment Journey
          </Heading>
          <Text fontSize="xl" color={textColor} maxW="2xl">
            Unlock the power of data-driven investing with StockPulse. From
            beginners to professionals, we have the right plan for your
            financial goals.
          </Text>

          {/* Billing Toggle */}
          <FormControl
            display="flex"
            alignItems="center"
            justifyContent="center"
            w="auto"
          >
            <FormLabel
              htmlFor="billing-toggle"
              mb="0"
              fontSize="lg"
              color={textColor}
            >
              Monthly
            </FormLabel>
            <Switch
              id="billing-toggle"
              size="lg"
              colorScheme="blue"
              isChecked={isAnnual}
              onChange={(e) => setIsAnnual(e.target.checked)}
            />
            <FormLabel
              htmlFor="billing-toggle"
              mb="0"
              fontSize="lg"
              ml={3}
              color={textColor}
            >
              Annual
              <Badge ml={2} colorScheme="green" variant="solid">
                Save up to 33%
              </Badge>
            </FormLabel>
          </FormControl>
        </VStack>

        {/* Pricing Cards */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} mb={16}>
          {plans.map((plan, index) => (
            <Box
              key={index}
              bg={cardBg}
              shadow="xl"
              borderRadius="xl"
              border={plan.popular ? "3px solid" : "1px solid"}
              borderColor={plan.popular ? "blue.400" : "gray.600"}
              position="relative"
              transform={plan.popular ? "scale(1.05)" : "scale(1)"}
              transition="all 0.3s"
              _hover={{
                transform: plan.popular ? "scale(1.08)" : "scale(1.03)",
              }}
              p={8}
            >
              {plan.popular && (
                <Badge
                  position="absolute"
                  top="-12px"
                  left="50%"
                  transform="translateX(-50%)"
                  colorScheme="blue"
                  px={4}
                  py={1}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="bold"
                >
                  MOST POPULAR
                </Badge>
              )}

              <VStack spacing={6}>
                <VStack spacing={4}>
                  <Heading
                    size="lg"
                    color={
                      plan.color === "gray"
                        ? "gray.400"
                        : plan.color === "blue"
                        ? "blue.400"
                        : "purple.400"
                    }
                  >
                    {plan.name}
                  </Heading>
                  <Text color={textColor} textAlign="center" fontSize="sm">
                    {plan.description}
                  </Text>
                  <VStack spacing={0}>
                    <HStack align="baseline">
                      <Text
                        fontSize="4xl"
                        fontWeight="bold"
                        color={primaryColor}
                      >
                        ₹
                        {isAnnual
                          ? Math.floor(plan.annualPrice / 12)
                          : plan.monthlyPrice}
                      </Text>
                      <Text color={textColor}>/month</Text>
                    </HStack>
                    {isAnnual && (
                      <Text
                        fontSize="sm"
                        color="green.500"
                        fontWeight="semibold"
                      >
                        Billed annually ₹{plan.annualPrice}
                      </Text>
                    )}
                  </VStack>
                </VStack>

                <VStack spacing={6} w="100%">
                  <List spacing={3} w="100%">
                    {plan.features.map((feature, featureIndex) => (
                      <ListItem
                        key={featureIndex}
                        display="flex"
                        alignItems="flex-start"
                      >
                        <ListIcon as={CheckIcon} color="green.500" mt={1} />
                        <Text fontSize="sm" color={textColor}>
                          {feature}
                        </Text>
                      </ListItem>
                    ))}
                  </List>

                  <Button
                    colorScheme={plan.color}
                    size="lg"
                    w="100%"
                    _hover={{
                      transform: "translateY(-2px)",
                      shadow: "lg",
                    }}
                    onClick={() => setIsModalOpen(true)}
                  >
                    {plan.popular ? "Get Started Now" : "Choose Plan"}
                  </Button>
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>

        {/* Features Section */}
        <Box mb={16}>
          <VStack spacing={12}>
            <Heading size="xl" textAlign="center" color={primaryColor}>
              Why Choose StockPulse?
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {features.map((feature, index) => (
                <VStack key={index} spacing={4} textAlign="center" p={6}>
                  <Text fontSize="4xl">{feature.icon}</Text>
                  <Heading size="md" color="white">
                    {feature.title}
                  </Heading>
                  <Text color={textColor}>{feature.description}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>

        {/* FAQ Section */}
        <Box mb={16}>
          <VStack spacing={8}>
            <Heading size="xl" textAlign="center" color={primaryColor}>
              Frequently Asked Questions
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
              <Box
                bg={cardBg}
                p={6}
                borderRadius="lg"
                shadow="md"
                border="1px"
                borderColor="gray.700"
              >
                <VStack align="start" spacing={3}>
                  <Heading size="sm" color="white">
                    Can I switch plans anytime?
                  </Heading>
                  <Text fontSize="sm" color={textColor}>
                    Yes, you can upgrade or downgrade your plan at any time.
                    Changes will be reflected in your next billing cycle.
                  </Text>
                </VStack>
              </Box>

              <Box
                bg={cardBg}
                p={6}
                borderRadius="lg"
                shadow="md"
                border="1px"
                borderColor="gray.700"
              >
                <VStack align="start" spacing={3}>
                  <Heading size="sm" color="white">
                    Is there a free trial?
                  </Heading>
                  <Text fontSize="sm" color={textColor}>
                    We offer a 7-day free trial for all plans. No credit card
                    required to get started.
                  </Text>
                </VStack>
              </Box>

              <Box
                bg={cardBg}
                p={6}
                borderRadius="lg"
                shadow="md"
                border="1px"
                borderColor="gray.700"
              >
                <VStack align="start" spacing={3}>
                  <Heading size="sm" color="white">
                    What payment methods do you accept?
                  </Heading>
                  <Text fontSize="sm" color={textColor}>
                    We accept all major credit cards, debit cards, UPI, and net
                    banking for Indian customers.
                  </Text>
                </VStack>
              </Box>

              <Box
                bg={cardBg}
                p={6}
                borderRadius="lg"
                shadow="md"
                border="1px"
                borderColor="gray.700"
              >
                <VStack align="start" spacing={3}>
                  <Heading size="sm" color="white">
                    Is my data secure?
                  </Heading>
                  <Text fontSize="sm" color={textColor}>
                    Absolutely. We use bank-grade encryption and comply with all
                    Indian financial data protection regulations.
                  </Text>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Box>

        {/* CTA Section */}
        <Box
          bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          borderRadius="2xl"
          p={12}
          textAlign="center"
          color="white"
        >
          <VStack spacing={6}>
            <Heading size="xl">
              Ready to Transform Your Investment Strategy?
            </Heading>
            <Text fontSize="lg" opacity={0.9}>
              Join thousands of successful investors who trust StockPulse for
              their financial decisions.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                size="lg"
                bg="white"
                color="blue.600"
                _hover={{ bg: "gray.100", transform: "translateY(-2px)" }}
                px={8}
                onClick={() => setIsModalOpen(true)}
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
                px={8}
                onClick={() => setIsModalOpen(true)}
              >
                Schedule Demo
              </Button>
            </Stack>
          </VStack>
        </Box>

        {/* Subscription Paused Modal */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          isCentered
        >
          <ModalOverlay bg="blackAlpha.600" />
          <ModalContent bg={cardBg} borderRadius="xl" mx={4}>
            <ModalHeader>
              <HStack spacing={3}>
                <Text color="white">Subscription Currently Paused</Text>
              </HStack>
            </ModalHeader>
            <ModalCloseButton color={textColor} />
            <ModalBody pb={6}>
              <VStack spacing={4} align="start">
                <Text color={textColor} fontSize="md">
                  We appreciate your interest in StockPulse! Our subscription
                  service is currently paused as we're working on exciting new
                  features and improvements.
                </Text>
                <Text color={textColor} fontSize="md">
                  For more details about our launch timeline and to get notified
                  when subscriptions resume, please contact:
                </Text>
                <Box
                  bg="blue.900"
                  p={4}
                  borderRadius="lg"
                  border="1px"
                  borderColor="blue.600"
                  w="100%"
                >
                  <Text
                    color="blue.300"
                    fontSize="lg"
                    fontWeight="semibold"
                    textAlign="center"
                  >
                    s.sanjaysundarm@gmail.com
                  </Text>
                </Box>
                <Text color={textColor} fontSize="sm">
                  We'll be back soon with an even better experience!
                </Text>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                onClick={() => setIsModalOpen(false)}
                w="100%"
              >
                Got it, Thanks!
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

export default PricingPage;
