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

function TablesTableRow(props) {
  const {
    name,
    symbol,
    bidding_start_date,
    bidding_end_date,
    lot_size,
    min_price,
    max_price,
    lastItem,
    status,
  } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");

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
              Minimum :{" "}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {min_price}
            </Text>
          </Flex>
          <Flex direction="row">
            <Text fontSize="sm" color="#fff" fontWeight="normal">
              Maximum :{" "}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {max_price}
            </Text>
          </Flex>
        </Flex>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor="#56577A">
        <Badge
          bg={"green.400"}
          color={"white"}
          fontSize="sm"
          p="3px 10px"
          borderRadius="8px"
          border={status === "Online" ? "none" : "1px solid #fff"}
          fontWeight="normal"
        >
          {lot_size}
        </Badge>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor="#56577A">
        <Text fontSize="sm" color="#fff" fontWeight="normal">
          {bidding_start_date}
        </Text>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor="#56577A">
        <Text fontSize="sm" color="#fff" fontWeight="normal">
          {bidding_end_date}
        </Text>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor="#56577A">
        <Button
          p="0px"
          bg="transparent"
          variant="no-hover"
          onClick={() =>
            window.open(
              "https://www.google.com/search?q=" + name + " ipo",
              "_blank"
            )
          }
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

export default TablesTableRow;
