import React, { useState, useEffect } from "react";

// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Icon,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

// Custom components
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";

// Table ../../Components
import TablesProjectRow from "../../components/Tables/TablesProjectRow";
import TablesTableRow from "../../components/Tables/TablesTableRow";
import TablesTableRow2 from "../../components/Tables/TablesTableRow2.jsx";

// Data
import { tablesProjectData, tablesTableData } from "../../variables/general";

// Icons
import { AiFillCheckCircle } from "react-icons/ai";

function Tables(props) {
  const [product, setProduct] = useState({
    upcoming: [
      {
        symbol: "LAMOSAIC",
        name: "Lamosaic India",
        status: "upcoming",
        is_sme: true,
        additional_text: "Bid starts on 21 Nov at 10 AM",
        min_price: 200.0,
        max_price: 200.0,
        issue_price: null,
        listing_gains: null,
        listing_price: null,
        bidding_start_date: "2024-11-21",
        bidding_end_date: null,
        listing_date: "2024-11-29",
        lot_size: null,
        document_url: "https://www.lamosaic.in/pdfs/prospectus.pdf",
      },
    ],
    listed: [
      {
        symbol: "NIVABUPA",
        name: "Niva Bupa Health Insurance",
        status: "listed",
        is_sme: false,
        additional_text: "Listed at 78.14 for 5.59% gains",
        min_price: 70.0,
        max_price: 74.0,
        issue_price: 74,
        listing_gains: 5.594594594594595,
        listing_price: 78.14,
        bidding_start_date: "2024-11-07",
        bidding_end_date: null,
        listing_date: "2024-11-14",
        lot_size: null,
        document_url:
          "https://www.sebi.gov.in/filings/public-issues/jul-2024/niva-bupa-health-insurance-company-limited_84557.html",
      },
    ],
    active: [
      {
        symbol: "BLACKBUCK",
        name: "Zinka Logistics Solution",
        status: "active",
        is_sme: false,
        additional_text: "Closes on 18 Nov at 4:50 PM",
        min_price: 259.0,
        max_price: 273.0,
        issue_price: null,
        listing_gains: null,
        listing_price: null,
        bidding_start_date: "2024-11-13",
        bidding_end_date: "2024-11-18",
        listing_date: null,
        lot_size: 54,
        document_url: null,
      },
    ],
    closed: [
      {
        symbol: "NEELAM",
        name: "Neelam Linens and Garments",
        status: "closed",
        is_sme: true,
        additional_text: "Listing on 18 Nov at 10 AM",
        min_price: 20.0,
        max_price: 24.0,
        issue_price: null,
        listing_gains: null,
        listing_price: null,
        bidding_start_date: "2024-11-08",
        bidding_end_date: null,
        listing_date: "2024-11-18",
        lot_size: null,
        document_url:
          "http://neelamgarments.com/index.php/draft-red-herring-prospectus/",
      },
    ],
  });
  useEffect(() => {
    setProduct(props.ipo);
  }, []);

  const test = (
    <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
      <CardHeader p="6px 0px 22px 0px">
        <Flex direction="column">
          <Text fontSize="lg" color="#fff" fontWeight="bold" mb=".5rem">
            Projects Table
          </Text>
          <Flex align="center">
            <Icon
              as={AiFillCheckCircle}
              color="green.500"
              w="15px"
              h="15px"
              me="5px"
            />
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              <Text fontWeight="bold" as="span" color="gray.400">
                +30%
              </Text>{" "}
              this month
            </Text>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Table variant="simple" color="#fff">
          <Thead>
            <Tr my=".8rem" ps="0px">
              <Th
                ps="0px"
                color="gray.400"
                fontFamily="Plus Jakarta Display"
                borderBottomColor="#56577A"
              >
                Companies
              </Th>
              <Th
                color="gray.400"
                fontFamily="Plus Jakarta Display"
                borderBottomColor="#56577A"
              >
                Budget
              </Th>
              <Th
                color="gray.400"
                fontFamily="Plus Jakarta Display"
                borderBottomColor="#56577A"
              >
                Status
              </Th>
              <Th
                color="gray.400"
                fontFamily="Plus Jakarta Display"
                borderBottomColor="#56577A"
              >
                Completion
              </Th>
              <Th borderBottomColor="#56577A"></Th>
            </Tr>
          </Thead>
          <Tbody>
            {tablesProjectData.map((row, index, arr) => {
              return (
                <TablesProjectRow
                  name={row.name}
                  logo={row.logo}
                  status={row.status}
                  budget={row.budget}
                  progression={row.progression}
                  lastItem={index === arr.length - 1 ? true : false}
                />
              );
            })}
          </Tbody>
        </Table>
      </CardBody>
    </Card>
  );
  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      {/* Active */}
      <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="lg" color="#fff" fontWeight="bold">
            Active IPOs
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color="#fff">
            <Thead>
              <Tr my=".8rem" ps="0px" color="gray.400">
                <Th
                  ps="0px"
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Name
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Price
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Lot size
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Bidding Start Date
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Bidding End Date
                </Th>
                <Th borderBottomColor="#56577A"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {product.active.map((row, index, arr) => {
                return (
                  <TablesTableRow
                    name={row.name}
                    symbol={row.symbol}
                    bidding_start_date={row.bidding_start_date}
                    bidding_end_date={row.bidding_end_date}
                    url={row.document_url}
                    lot_size={row.lot_size}
                    min_price={row.min_price}
                    max_price={row.max_price}
                    lastItem={index === arr.length - 1 ? true : false}
                    status="active"
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
      {/* Upcoming */}
      <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="lg" color="#fff" fontWeight="bold">
            Upcoming IPOs
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color="#fff">
            <Thead>
              <Tr my=".8rem" ps="0px" color="gray.400">
                <Th
                  ps="0px"
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Name
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Price
                </Th>

                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Bidding Start Date
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Listing Date
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Schedule
                </Th>
                <Th borderBottomColor="#56577A"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {product.upcoming.map((row, index, arr) => {
                return (
                  <TablesTableRow2
                    name={row.name}
                    symbol={row.symbol}
                    bidding_start_date={row.bidding_start_date}
                    listing_date={row.listing_date}
                    url={row.document_url}
                    lot_size={row.lot_size}
                    min_price={row.min_price}
                    max_price={row.max_price}
                    additional_text={row.additional_text}
                    lastItem={index === arr.length - 1 ? true : false}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
      {/* Closed */}
      <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="lg" color="#fff" fontWeight="bold">
            Closed IPOs
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color="#fff">
            <Thead>
              <Tr my=".8rem" ps="0px" color="gray.400">
                <Th
                  ps="0px"
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Name
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Price
                </Th>

                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Bidding Start Date
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Listing Date
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Schedule
                </Th>
                <Th borderBottomColor="#56577A"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {product.closed.map((row, index, arr) => {
                return (
                  <TablesTableRow2
                    name={row.name}
                    symbol={row.symbol}
                    bidding_start_date={row.bidding_start_date}
                    listing_date={row.listing_date}
                    url={row.document_url}
                    lot_size={row.lot_size}
                    min_price={row.min_price}
                    max_price={row.max_price}
                    additional_text={row.additional_text}
                    lastItem={index === arr.length - 1 ? true : false}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
      {/* Listed */}
      <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="lg" color="#fff" fontWeight="bold">
            Listed IPOs
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color="#fff">
            <Thead>
              <Tr my=".8rem" ps="0px" color="gray.400">
                <Th
                  ps="0px"
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Name
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Price
                </Th>

                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Bidding Start Date
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Listed Date
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Gains
                </Th>
                <Th borderBottomColor="#56577A"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {product.listed.map((row, index, arr) => {
                return (
                  <TablesTableRow2
                    name={row.name}
                    symbol={row.symbol}
                    bidding_start_date={row.bidding_start_date}
                    listing_date={row.listing_date}
                    url={row.document_url}
                    lot_size={row.lot_size}
                    min_price={row.min_price}
                    max_price={row.max_price}
                    additional_text={row.additional_text}
                    lastItem={index === arr.length - 1 ? true : false}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
