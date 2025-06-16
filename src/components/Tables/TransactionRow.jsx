import { BsArrowRight } from "react-icons/bs";

import { Box, Flex, Icon, Text, Avatar, Button } from "@chakra-ui/react";
import React from "react";
import {
  FaCube,
  FaFacebook,
  FaInstagram,
  FaPencilAlt,
  FaFunnelDollar,
  FaTwitter,
  FaFlag,
  FaArrowUp,
  FaArrowDown,
  FaRegCalendarAlt,
} from "react-icons/fa";

function TransactionRow(props) {
  const { name, net, logo, price } = props;

  return (
    <Flex
      mb="24px"
      justifyContent="space-between"
      direction={{ sm: "row", lg: "column" }}
      height={{ sm: "auto", lg: "100px" }}
    >
      <Flex alignItems="center">
        <Box
          me="14px"
          borderRadius="12px"
          color={net > 0 ? "#01B574" : net < 0 ? "red.500" : "gray.400"}
          border="1px solid"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Avatar src={logo} w="50px" borderRadius="12px" border="none" />
        </Box>
        <Flex direction="column">
          <Text fontSize="sm" color="#fff" mb="4px">
            {name}
          </Text>
          <Text
            fontSize={{ sm: "xs", md: "sm" }}
            color={net > 0 ? "#01B574" : net < 0 ? "red.500" : "gray.400"}
          >
            ₹{price}
          </Text>
        </Flex>
      </Flex>
      <Flex
        direction="row"
        color={net > 0 ? "#01B574" : net < 0 ? "red.500" : "gray.400"}
      >
        <Text fontSize="sm" alignContent="center">
          {net > 0 ? (
            <Icon color="white" as={FaArrowUp} me="6px" />
          ) : (
            <Icon color="white" as={FaArrowDown} me="6px" />
          )}{" "}
          {net} %
        </Text>
        <Button
          variant="no-hover"
          bg="transparent"
          onClick={() => {
            props.setStartSearch(name);
          }}
        >
          <Text
            fontSize="xs"
            color="#fff"
            me="5px"
            cursor="pointer"
            transition="all .3s ease"
            _hover={{ me: "6px" }}
          >
            See Deatils
          </Text>
          <Icon
            as={BsArrowRight}
            w="13px"
            h="13px"
            color="#fff"
            transition="all .3s ease"
            cursor="pointer"
            _hover={{ transform: "translateX(20%)" }}
          />
        </Button>
      </Flex>
    </Flex>
  );
}

export default TransactionRow;
