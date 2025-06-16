import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Grid,
  Icon,
  Badge,
  VStack,
  HStack,
  useColorModeValue,
  keyframes,
  SimpleGrid,
  Divider,
  Progress,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react";
import * as THREE from "three";
import SignIn from "./Google-Signin";

// Animation keyframes
const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
`;

const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
`;

const glow = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 136, 0.3); }
  50% { box-shadow: 0 0 40px rgba(0, 255, 136, 0.6); }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

// 3D Scene Component - Optimized
const ThreeScene = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    rendererRef.current = renderer;

    const shapes = [];
    const colors = [0x00ff88, 0xff6b6b, 0x4ecdc4, 0x45b7d1, 0xf39c12, 0x9b59b6];

    // Create optimized shapes
    for (let i = 0; i < 40; i++) {
      let geometry;
      const shapeType = Math.random();

      if (shapeType < 0.3) {
        geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
      } else if (shapeType < 0.6) {
        geometry = new THREE.SphereGeometry(0.25, 6, 4);
      } else if (shapeType < 0.8) {
        geometry = new THREE.OctahedronGeometry(0.3);
      } else {
        geometry = new THREE.TetrahedronGeometry(0.4);
      }

      const material = new THREE.MeshBasicMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 0.7,
        wireframe: Math.random() > 0.8,
      });

      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );

      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      mesh.userData = {
        originalY: mesh.position.y,
        originalX: mesh.position.x,
        speed: 0.0003 + Math.random() * 0.0007,
        rotationSpeed: 0.003 + Math.random() * 0.007,
      };

      scene.add(mesh);
      shapes.push(mesh);
    }

    camera.position.z = 15;

    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      shapes.forEach((shape, index) => {
        shape.rotation.x += shape.userData.rotationSpeed;
        shape.rotation.y += shape.userData.rotationSpeed;
        shape.rotation.z += shape.userData.rotationSpeed * 0.5;

        shape.position.y =
          shape.userData.originalY +
          Math.sin(Date.now() * shape.userData.speed + index) * 1.5;

        shape.position.x =
          shape.userData.originalX +
          Math.cos(Date.now() * shape.userData.speed * 0.7 + index) * 0.8;
      });

      scene.rotation.y += 0.0008;
      scene.rotation.x += 0.0003;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <Box
      ref={mountRef}
      position="fixed"
      top="0"
      left="0"
      w="100%"
      h="100%"
      zIndex="-1"
    />
  );
};

// Enhanced Feature Card Component
const FeatureCard = ({
  icon,
  title,
  description,
  delay = 0,
  isActive,
  onClick,
  progress = 0,
}) => {
  const bg = useColorModeValue(
    "rgba(255, 255, 255, 0.1)",
    "rgba(255, 255, 255, 0.05)"
  );
  const borderColor = useColorModeValue(
    "rgba(255, 255, 255, 0.2)",
    "rgba(255, 255, 255, 0.1)"
  );

  return (
    <Box
      bg={bg}
      border="1px solid"
      borderColor={isActive ? "green.400" : borderColor}
      borderRadius="xl"
      p={6}
      backdropFilter="blur(15px)"
      cursor="pointer"
      onClick={onClick}
      position="relative"
      overflow="hidden"
      _hover={{
        transform: "translateY(-8px)",
        boxShadow: "0 25px 50px rgba(0, 255, 136, 0.3)",
        borderColor: "green.400",
      }}
      transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      animation={`${slideUp} 0.8s ease-out ${delay}s both`}
      transform={isActive ? "translateY(-5px)" : "translateY(0)"}
      boxShadow={isActive ? "0 20px 40px rgba(0, 255, 136, 0.2)" : "none"}
    >
      {isActive && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          height="2px"
          bg="green.400"
          transform={`scaleX(${progress / 100})`}
          transformOrigin="left"
          transition="transform 0.1s linear"
        />
      )}

      <VStack spacing={4} align="start">
        <Box
          p={3}
          bg="green.400"
          borderRadius="lg"
          animation={isActive ? `${pulse} 2s ease-in-out infinite` : "none"}
        >
          {icon}
        </Box>
        <Heading size="md" color="white">
          {title}
        </Heading>
        <Text color="gray.300" fontSize="sm" lineHeight="1.6">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};

// Enhanced Stat Card with Counter Animation
const StatCard = ({ value, label, color = "green", trend }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const bg = useColorModeValue(
    "rgba(255, 255, 255, 0.1)",
    "rgba(255, 255, 255, 0.05)"
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentElement = document.getElementById(`stat-${label}`);
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => observer.disconnect();
  }, [label]);

  useEffect(() => {
    if (isVisible) {
      const numericValue = parseInt(value.replace(/[^\d]/g, ""));
      const suffix = value.replace(/[\d,]/g, "");
      let current = 0;
      const increment = numericValue / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= numericValue) {
          current = numericValue;
          clearInterval(timer);
        }
        setDisplayValue(Math.floor(current).toLocaleString() + suffix);
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <Box
      id={`stat-${label}`}
      bg={bg}
      border="1px solid rgba(255, 255, 255, 0.1)"
      borderRadius="xl"
      backdropFilter="blur(10px)"
      p={6}
      textAlign="center"
      _hover={{
        transform: "scale(1.05)",
        borderColor: "green.400",
      }}
      transition="all 0.3s ease"
    >
      <VStack spacing={2}>
        <Text fontSize="4xl" fontWeight="bold" color={`${color}.400`}>
          {displayValue}
        </Text>
        <Text color="gray.300" fontSize="sm" fontWeight="medium">
          {label}
        </Text>
        {trend && (
          <Text color="green.300" fontSize="xs">
            {trend}
          </Text>
        )}
      </VStack>
    </Box>
  );
};

// Enhanced Testimonial Component
const TestimonialCard = ({ quote, author, role, avatar, rating = 5 }) => {
  const bg = useColorModeValue(
    "rgba(255, 255, 255, 0.08)",
    "rgba(255, 255, 255, 0.03)"
  );

  return (
    <Box
      bg={bg}
      border="1px solid rgba(255, 255, 255, 0.1)"
      borderRadius="xl"
      p={6}
      backdropFilter="blur(10px)"
      _hover={{
        transform: "translateY(-4px)",
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)",
      }}
      transition="all 0.3s ease"
    >
      <VStack spacing={4} align="start">
        <HStack spacing={1}>
          {[...Array(rating)].map((_, i) => (
            <Icon key={i} viewBox="0 0 24 24" boxSize={3} color="yellow.400">
              <path
                fill="currentColor"
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              />
            </Icon>
          ))}
        </HStack>
        <Text
          color="gray.300"
          fontSize="sm"
          fontStyle="italic"
          lineHeight="1.7"
        >
          "{quote}"
        </Text>
        <Divider borderColor="gray.600" />
        <HStack spacing={3}>
          <Avatar size="sm" name={author} bg="green.400" />
          <VStack spacing={0} align="start">
            <Text color="white" fontWeight="semibold" fontSize="sm">
              {author}
            </Text>
            <Text color="green.400" fontSize="xs">
              {role}
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

// Loading Button Component
const LoadingButton = ({ children, isLoading = false, ...props }) => {
  return (
    <Button
      {...props}
      position="relative"
      overflow="hidden"
      _before={
        isLoading
          ? {
              content: '""',
              position: "absolute",
              top: 0,
              left: "-200px",
              width: "200px",
              height: "100%",
              background: `linear-gradient(
                90deg,
                transparent,
                rgba(255, 255, 255, 0.2),
                transparent
              )`,
              animation: `${shimmer} 2s infinite`,
            }
          : {}
      }
    >
      {children}
    </Button>
  );
};

// Main Component
export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const isMobile = useBreakpointValue({ base: true, md: false });

  const features = [
    {
      icon: (
        <Icon viewBox="0 0 24 24" boxSize={6} color="white">
          <path
            fill="currentColor"
            d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
          />
        </Icon>
      ),
      title: "Advanced Stock Analysis",
      description:
        "Deep dive into stock fundamentals, technical indicators, earnings reports, and market sentiment to make informed investment decisions.",
    },
    {
      icon: (
        <Icon viewBox="0 0 24 24" boxSize={6} color="white">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          />
        </Icon>
      ),
      title: "Mutual Fund Insights",
      description:
        "Comprehensive mutual fund analysis with expense ratios, performance tracking, fund manager insights, and sector allocation breakdowns.",
    },
    {
      icon: (
        <Icon viewBox="0 0 24 24" boxSize={6} color="white">
          <path
            fill="currentColor"
            d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"
          />
        </Icon>
      ),
      title: "IPO Analysis & Tracking",
      description:
        "Stay ahead with upcoming IPO listings, detailed company analysis, subscription status, and post-listing performance tracking.",
    },
    {
      icon: (
        <Icon viewBox="0 0 24 24" boxSize={6} color="white">
          <path
            fill="currentColor"
            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
          />
        </Icon>
      ),
      title: "Smart Watchlist",
      description:
        "Create personalized watchlists with real-time price alerts, custom notifications, and performance tracking for your favorite stocks and funds.",
    },
  ];

  const stats = [
    { value: "5,000+", label: "Stocks Analyzed", trend: "↗ Updated daily" },
    { value: "2,000+", label: "Mutual Funds", trend: "↗ All categories" },
    { value: "500+", label: "IPOs Tracked", trend: "↗ Live updates" },
    {
      value: "10,000+",
      label: "Active Watchlists",
      trend: "↗ Real-time alerts",
    },
  ];

  const testimonials = [
    {
      quote:
        "Stock Pulse helped me identify undervalued stocks before they took off. The analysis tools are incredibly detailed and accurate.",
      author: "Lakshmi Kaanthan",
      role: "Individual Investor",
      rating: 5,
    },
    {
      quote:
        "The mutual fund comparison feature saved me thousands in fees. I found better performing funds with lower expense ratios.",
      author: "Kartick K",
      role: "Individual Investor",
      rating: 5,
    },
    {
      quote:
        "IPO tracking on Stock Pulse is phenomenal. I never miss a good opportunity and the pre-listing analysis is spot-on.",
      author: "Eyuwankg Subramaniyan",
      role: "Individual Investor",
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(0);
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [features.length]);

  const handleGetStarted = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Box color="white" minH="100vh" position="relative" overflow="hidden">
      <ThreeScene />

      <Container maxW="7xl" py={20} position="relative" zIndex="10">
        {/* Enhanced Hero Section */}
        <VStack spacing={8} textAlign="center" mb={20}>
          <Box
            px={4}
            py={2}
            bg="rgba(0, 255, 136, 0.1)"
            border="1px solid rgba(0, 255, 136, 0.3)"
            borderRadius="full"
            animation={`${slideUp} 1s ease-out`}
          >
            <Text fontSize="sm" color="green.400" fontWeight="medium">
              📈 Now tracking 500+ IPOs, 5000+ Stocks, and 2000+ Mutual Funds
            </Text>
          </Box>

          <Heading
            fontWeight="black"
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            letterSpacing="tight"
            bgGradient="linear(to-r, white, green.400, cyan.400)"
            bgClip="text"
            animation={`${slideUp} 1s ease-out 0.1s both`}
            lineHeight="1.1"
          >
            Stock Pulse
            <br />
            <Text
              as="span"
              color="green.400"
              fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
            >
              Your Investment Intelligence Hub
            </Text>
          </Heading>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="gray.300"
            maxW="3xl"
            lineHeight="1.8"
            animation={`${slideUp} 1s ease-out 0.2s both`}
          >
            Analyze stocks, mutual funds, and IPOs with comprehensive data and
            insights. Build smart watchlists and track your investments with
            real-time market intelligence.
          </Text>
        </VStack>

        {/* Enhanced Features Section */}
        <Box mb={20}>
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading
              size="xl"
              bgGradient="linear(to-r, white, green.400)"
              bgClip="text"
            >
              Everything You Need for Smart Investing
            </Heading>
            <Text color="gray.400" maxW="2xl">
              Comprehensive tools for stocks, mutual funds, IPOs, and watchlist
              management
            </Text>
          </VStack>

          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={6}
          >
            {features.map((feature, i) => (
              <FeatureCard
                key={i}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={i * 0.2}
                isActive={activeFeature === i}
                onClick={() => setActiveFeature(i)}
                progress={activeFeature === i ? progress : 0}
              />
            ))}
          </Grid>
        </Box>

        {/* Enhanced Stats Section */}
        <Box mb={20}>
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading
              size="xl"
              bgGradient="linear(to-r, white, green.400)"
              bgClip="text"
            >
              Trusted by Smart Investors
            </Heading>
          </VStack>

          <SimpleGrid
            columns={{ base: 2, md: 4 }}
            spacing={6}
            maxW="5xl"
            mx="auto"
          >
            {stats.map((stat, i) => (
              <StatCard
                key={i}
                value={stat.value}
                label={stat.label}
                color="green"
                trend={stat.trend}
              />
            ))}
          </SimpleGrid>
        </Box>

        {/* Enhanced Testimonials Section */}
        <Box mb={20}>
          <VStack spacing={4} textAlign="center" mb={12}>
            <Heading
              size="xl"
              bgGradient="linear(to-r, white, green.400)"
              bgClip="text"
            >
              What Our Users Say
            </Heading>
            <Text color="gray.400" maxW="2xl">
              See how Stock Pulse is helping investors make better decisions
            </Text>
          </VStack>

          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
            {testimonials.map((testimonial, i) => (
              <TestimonialCard
                key={i}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                rating={testimonial.rating}
              />
            ))}
          </Grid>
        </Box>

        {/* Enhanced CTA Section */}
        <Box
          textAlign="center"
          bg="rgba(0, 255, 136, 0.1)"
          border="1px solid rgba(0, 255, 136, 0.3)"
          borderRadius="2xl"
          p={12}
          backdropFilter="blur(15px)"
          position="relative"
          overflow="hidden"
        >
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgGradient="linear(45deg, transparent, rgba(0, 255, 136, 0.05), transparent)"
            opacity="0.5"
          />

          <VStack spacing={6} position="relative">
            <Heading size="xl" color="white">
              Ready to Start Your Stock Pulse Journey?
            </Heading>
            <Text color="gray.300" fontSize="lg" maxW="2xl">
              Join thousands of investors using Stock Pulse to analyze stocks,
              mutual funds, and IPOs
            </Text>

            <SignIn />

            <HStack spacing={6} fontSize="sm" color="gray.400" pt={4}>
              <Text>✓ No credit card required</Text>
              <Text>✓ 6-day free trial</Text>
              <Text>✓ Cancel anytime</Text>
            </HStack>
            <Text fontSize="xs" color="gray.500" mt={4}>
              Made by Sanjay 😇
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
