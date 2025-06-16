import React from "react";
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";
import {
  JiraLogogreen,
  JiraLogoRed,
  JiraLogogrey,
  JiraLogoblue,
} from "../Icons/Icons";
import BarChart from "../Charts/BarChart";
import { StatsIcon } from "../Icons/Icons";
import { useDisclosure } from "@chakra-ui/react";

import {
  barChartDataDashboard,
  barChartOptionsDashboard1,
} from "../../variables/charts";

function DashboardTableRow(props) {
  const {
    name,
    asset_size,
    latest_nav,
    star_rating,
    percentage_change,
    lastItem,
    one_month_return,
    three_month_return,
    six_month_return,
    one_year_return,
    three_year_return,
    six_year_return,
  } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr>
      <Td
        minWidth={{ sm: "250px" }}
        ps="0px"
        borderBottomColor="#56577A"
        border={lastItem ? "none" : null}
      >
        <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Icon as={JiraLogogreen} h={"20px"} w={"20px"} me="18px" />
          <Text fontSize="sm" color="#fff" minWidth="100%">
            {name}
          </Text>
        </Flex>
      </Td>
      <Td borderBottomColor="#56577A" border={lastItem ? "none" : null}>
        <Text fontSize="sm" color="#fff" fontWeight="bold" pb=".5rem">
          {asset_size}
        </Text>
      </Td>
      <Td borderBottomColor="#56577A" border={lastItem ? "none" : null}>
        <Text fontSize="sm" color="#fff" fontWeight="bold" pb=".5rem">
          {latest_nav}
        </Text>
      </Td>
      <Td borderBottomColor="#56577A" border={lastItem ? "none" : null}>
        <Flex direction="column">
          <Text fontSize="sm" color="#fff" fontWeight="bold" pb=".2rem">{`${
            (star_rating / 5) * 100
          }%`}</Text>
          <Progress
            colorScheme="brand"
            maxW="125px"
            h="3px"
            bg="#2D2E5F"
            value={(star_rating / 5) * 100}
            borderRadius="15px"
          />
        </Flex>
      </Td>
      <Td borderBottomColor="#56577A" border={lastItem ? "none" : null}>
        <Text fontSize="sm" color="#fff" fontWeight="bold" pb=".5rem">
          {percentage_change}
        </Text>
      </Td>
      <Td borderBottomColor="#56577A" border={lastItem ? "none" : null}>
        <Button
          p="0px"
          bg="transparent"
          _hover="none"
          _active="none"
          onClick={onOpen}
        >
          <Icon as={StatsIcon} color="gray.400" cursor="pointer" />
        </Button>
      </Td>
      <>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          motionPreset="slideInBottom"
          size="xl"
        >
          <ModalOverlay />
          <ModalContent bg="linear-gradient(10deg, #dcdcdc 8.26%, rgb(4 12 48 / 97%) 99.2%)">
            <ModalHeader color="white">Modal Title</ModalHeader>
            <ModalCloseButton color="white" />
            <ModalBody height="300px">
              <Box>
                <BarChart
                  barChartOptions={barChartOptionsDashboard1}
                  barChartData={[
                    {
                      name: "Return",
                      data: [
                        one_month_return,
                        three_month_return,
                        six_month_return,
                        one_year_return,
                        three_year_return,
                        six_year_return,
                      ],
                    },
                  ]}
                />
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    </Tr>
  );
}

export default DashboardTableRow;
