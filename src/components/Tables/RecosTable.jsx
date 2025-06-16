import {
  JiraLogogreen,
  JiraLogoRed,
  JiraLogogrey,
  JiraLogoblue,
} from "../Icons/Icons";

import {
  Icon,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
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
import { useHistory } from "react-router-dom";

import { useProductStore } from "../../store/product";

function RecosTable(props) {
  const { name, symbol, short, long, percent, high, low, close, lastItem } =
    props;
  const { fetchProducts, fetchStat } = useProductStore();
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const { setProduct } = useProductStore();
  const history = useHistory();
  const navi = () => {
    setTimeout(() => {
      history.push("/auth/profile");
    }, 1000);
  };
  const recommendation = (value) => {
    if (value == "Bearish") {
      return (
        <Badge
          bg={"#02552E"}
          color={"white"}
          fontSize="sm"
          p="3px 10px"
          borderRadius="8px"
          border={status === "Online" ? "none" : "1px solid #fff"}
          fontWeight="normal"
        >
          {value}
        </Badge>
      );
    }

    if (value == "Neutral") {
      return (
        <Badge
          bg="#898989"
          color={"white"}
          fontSize="sm"
          p="3px 10px"
          borderRadius="8px"
          border={status === "Online" ? "none" : "1px solid #fff"}
          fontWeight="normal"
        >
          {value}
        </Badge>
      );
    }

    return (
      <Badge
        bg="#B40000"
        color={"white"}
        fontSize="sm"
        p="3px 10px"
        borderRadius="8px"
        border={status === "Online" ? "none" : "1px solid #fff"}
        fontWeight="normal"
      >
        {value}
      </Badge>
    );
  };

  return (
    <Tr>
      <Td
        minWidth={{ sm: "250px" }}
        ps="0px"
        border={lastItem ? "none" : null}
        borderBottomColor="#56577A"
      >
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Icon as={JiraLogogreen} h={"20px"} w={"20px"} me="18px" />
          <Flex direction="column">
            <Text
              fontSize="sm"
              color="#fff"
              fontWeight="normal"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {symbol}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td
        border={lastItem ? "none" : null}
        borderBottomColor="#56577A"
        minW="150px"
      >
        <Flex direction="column">
          <Flex direction="row">
            <Text fontSize="sm" color="#fff" fontWeight="normal">
              High :{" "}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {high}
            </Text>
          </Flex>
          <Flex direction="row">
            <Text fontSize="sm" color="#fff" fontWeight="normal">
              Low :{" "}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {low}
            </Text>
          </Flex>
          <Flex direction="row">
            <Text fontSize="sm" color="#fff" fontWeight="normal">
              Close :{" "}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {close}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor="#56577A">
        <Text fontSize="sm" color="#fff" fontWeight="normal">
          {percent + " "}{" "}
          {percent > 0 ? (
            <Icon color="white" as={FaArrowUp} me="6px" />
          ) : (
            <Icon color="white" as={FaArrowDown} me="6px" />
          )}
        </Text>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor="#56577A">
        {recommendation(short)}
      </Td>

      <Td border={lastItem ? "none" : null} borderBottomColor="#56577A">
        {recommendation(long)}
      </Td>

      <Td border={lastItem ? "none" : null} borderBottomColor="#56577A">
        <Button
          p="0px"
          bg="transparent"
          variant="no-hover"
          onClick={() => {
            setProduct(name);
            navi();
          }}
        >
          <Text
            fontSize="sm"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            More
          </Text>
        </Button>
      </Td>
    </Tr>
  );
}

export default RecosTable;
