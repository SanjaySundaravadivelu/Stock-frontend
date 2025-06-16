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

function MutualTable(props) {
  const [product, setProduct] = useState({
    "Floating Rate": [
      {
        fund_name: "HDFC Floating Rate Debt - Plan - Growth",
        latest_nav: 45.89,
        percentage_change: 0.02,
        asset_size: 14535.71,
        "1_month_return": 0.75,
        "3_month_return": 2.07,
        "6_month_return": 4.08,
        "1_year_return": 7.95,
        "3_year_return": 6.09,
        "5_year_return": 6.76,
        star_rating: 5,
      },
    ],
    "Fixed Maturity Intermediate-Term Bond": [
      {
        fund_name: "SBI Fixed Maturity Plan Series 1 3668 Days Regular Growth",
        latest_nav: 14.95,
        percentage_change: 0.09,
        asset_size: 44.51,
        "1_month_return": 0.8,
        "3_month_return": 1.92,
        "6_month_return": 4.06,
        "1_year_return": 7.17,
        "3_year_return": 5.91,
        "5_year_return": 7.15,
        star_rating: null,
      },
    ],
    "Dynamic Bond": [
      {
        fund_name: "UTI Dynamic Bond Fund Regular Plan Growth",
        latest_nav: 28.49,
        percentage_change: 0.01,
        asset_size: 581.37,
        "1_month_return": 0.86,
        "3_month_return": 1.88,
        "6_month_return": 4.31,
        "1_year_return": 7.01,
        "3_year_return": 10.36,
        "5_year_return": 7.93,
        star_rating: 4,
      },
    ],
    "Ultra Short Duration": [
      {
        fund_name:
          "UTI - Ultra Short Duration Fund - Discontinued - Institutional Growth Option",
        latest_nav: 2824.92,
        percentage_change: 0.02,
        asset_size: 2514.62,
        "1_month_return": 0.62,
        "3_month_return": 1.84,
        "6_month_return": 3.68,
        "1_year_return": 7.12,
        "3_year_return": 6.51,
        "5_year_return": 6.06,
        star_rating: 4,
      },
    ],
    "Corporate Bond": [
      {
        fund_name: "ICICI Prudential Corporate Bond Fund Growth",
        latest_nav: 27.39,
        percentage_change: 0.01,
        asset_size: 27147.52,
        "1_month_return": 0.73,
        "3_month_return": 2,
        "6_month_return": 3.93,
        "1_year_return": 7.59,
        "3_year_return": 6.04,
        "5_year_return": 7.06,
        star_rating: 5,
      },
    ],
    "Short Duration": [
      {
        fund_name: "Bank of India Short Term Income Fund Regular Growth",
        latest_nav: 24.31,
        percentage_change: 0.01,
        asset_size: 78.8,
        "1_month_return": 0.69,
        "3_month_return": 1.7,
        "6_month_return": 3.43,
        "1_year_return": 6.1,
        "3_year_return": 12.02,
        "5_year_return": 4.54,
        star_rating: 2,
      },
    ],
    "10 yr Government Bond": [
      {
        fund_name: "SBI Magnum Constant Maturity Fund Regular Growth",
        latest_nav: 58.03,
        percentage_change: -0.01,
        asset_size: 1626.25,
        "1_month_return": 1.1,
        "3_month_return": 2.24,
        "6_month_return": 4.49,
        "1_year_return": 6.89,
        "3_year_return": 5.15,
        "5_year_return": 6.36,
        star_rating: 4,
      },
    ],
    "Government Bond": [
      {
        fund_name: "SBI Magnum Gilt Fund PF Plan Fixed Period 3 year Growth",
        latest_nav: 36.65,
        percentage_change: 0.02,
        asset_size: 8876.49,
        "1_month_return": 1.32,
        "3_month_return": 2.55,
        "6_month_return": 4.92,
        "1_year_return": 7.8,
        "3_year_return": 6.24,
        "5_year_return": 7.29,
        star_rating: 5,
      },
    ],
    "Money Market": [
      {
        fund_name: "Nippon India Money Market Fund Growth",
        latest_nav: 3840.6,
        percentage_change: 0.02,
        asset_size: 16562.01,
        "1_month_return": 0.66,
        "3_month_return": 1.93,
        "6_month_return": 3.91,
        "1_year_return": 7.51,
        "3_year_return": 6.03,
        "5_year_return": 5.97,
        star_rating: 4,
      },
    ],
    "Long Duration": [
      {
        fund_name: "Nippon India Nivesh Lakshya Fund - Regular Plan - Growth",
        latest_nav: 16.5,
        percentage_change: 0.04,
        asset_size: 7706.43,
        "1_month_return": 1.69,
        "3_month_return": 2.52,
        "6_month_return": 6.49,
        "1_year_return": 8.19,
        "3_year_return": 6.26,
        "5_year_return": 6.75,
        star_rating: null,
      },
    ],
    "Other Bond": [
      {
        fund_name: "Franklin India Short Term Income Plan Growth",
        latest_nav: 5149.41,
        percentage_change: 0,
        asset_size: 12.51,
        "1_month_return": 0,
        "3_month_return": 0,
        "6_month_return": 0,
        "1_year_return": 1.66,
        "3_year_return": 7.74,
        "5_year_return": 5.06,
        star_rating: 3,
      },
    ],
    "Low Duration": [
      {
        fund_name: "UTI - Low Duration Fund - Regular Plan - Growth Option",
        latest_nav: 3276.14,
        percentage_change: 0.02,
        asset_size: 2455.66,
        "1_month_return": 0.64,
        "3_month_return": 1.85,
        "6_month_return": 3.73,
        "1_year_return": 7.16,
        "3_year_return": 7.45,
        "5_year_return": 7.12,
        star_rating: 4,
      },
    ],
    "Credit Risk": [
      {
        fund_name: "Bank of India Credit Risk Fund Regular Growth",
        latest_nav: 11.51,
        percentage_change: 0.02,
        asset_size: 129.09,
        "1_month_return": 0.23,
        "3_month_return": 1.23,
        "6_month_return": 3.63,
        "1_year_return": 6.4,
        "3_year_return": 39.44,
        "5_year_return": 3.18,
        star_rating: 3,
      },
    ],
    "Banking & PSU": [
      {
        fund_name: "UTI Banking & PSU Fund Regular Plan Growth",
        latest_nav: 20.15,
        percentage_change: -0.01,
        asset_size: 895.64,
        "1_month_return": 0.61,
        "3_month_return": 1.77,
        "6_month_return": 3.63,
        "1_year_return": 6.42,
        "3_year_return": 7.36,
        "5_year_return": 7.03,
        star_rating: 4,
      },
    ],
    "Medium to Long Duration": [
      {
        fund_name: "UTI Medium to Long Duration Fund Regular Plan Growth",
        latest_nav: 67.52,
        percentage_change: 0.01,
        asset_size: 300.38,
        "1_month_return": 1.04,
        "3_month_return": 2.05,
        "6_month_return": 4.2,
        "1_year_return": 6.22,
        "3_year_return": 9.83,
        "5_year_return": 6.36,
        star_rating: 3,
      },
    ],
    "Fixed Maturity Short-Term Bond": [
      {
        fund_name: "UTI Annual Interval Fund - I Institutional Growth",
        latest_nav: 33.48,
        percentage_change: 0.02,
        asset_size: 20.4,
        "1_month_return": 0.67,
        "3_month_return": 1.86,
        "6_month_return": 3.61,
        "1_year_return": 7.04,
        "3_year_return": 6.71,
        "5_year_return": 5.9,
        star_rating: null,
      },
    ],
    "Medium Duration": [
      {
        fund_name: "Aditya Birla Sun Life Medium Term Plan Regular Plan Growth",
        latest_nav: 35.04,
        percentage_change: 0.01,
        asset_size: 1864.14,
        "1_month_return": 1.32,
        "3_month_return": 2.4,
        "6_month_return": 4.24,
        "1_year_return": 7.2,
        "3_year_return": 12.51,
        "5_year_return": 8.78,
        star_rating: 5,
      },
    ],
    "Fixed Maturity Ultrashort Bond": [
      {
        fund_name:
          "Aditya Birla Sun Life Interval Income Fund Quarterly Series I Growth",
        latest_nav: 31.72,
        percentage_change: 0.02,
        asset_size: 271.27,
        "1_month_return": 0.62,
        "3_month_return": 1.88,
        "6_month_return": 3.81,
        "1_year_return": 7.45,
        "3_year_return": 6.02,
        "5_year_return": 5.3,
        star_rating: null,
      },
    ],
  });
  useEffect(() => {
    setProduct(props.mutual);
  }, [props.mutual]);

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
    <Flex direction="column" pt={{ base: "20px", md: "20px" }}>
      {/* Active */}
      {Object.keys(product).map((key) => {
        return (
          <Card my="22px" overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
            <CardHeader p="6px 0px 22px 0px">
              <Flex direction="column">
                <Text fontSize="lg" color="#fff" fontWeight="bold" mb=".5rem">
                  {key}
                </Text>
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
                      Fund Name
                    </Th>
                    <Th
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      Asset Size
                    </Th>
                    <Th
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      Net asset value
                    </Th>
                    <Th
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      Rating
                    </Th>
                    <Th
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      Percentage Change
                    </Th>
                    <Th borderBottomColor="#56577A"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {product[key].map((row, index, arr) => {
                    return (
                      <TablesProjectRow
                        name={row.fund_name}
                        asset_size={row.asset_size}
                        latest_nav={row.latest_nav}
                        star_rating={row.star_rating}
                        percentage_change={row.percentage_change}
                        lastItem={index === arr.length - 1 ? true : false}
                        one_month_return={row["1_month_return"]}
                        three_month_return={row["3_month_return"]}
                        six_month_return={row["6_month_return"]}
                        one_year_return={row["1_year_return"]}
                        three_year_return={row["1_year_return"]}
                        six_year_return={row["1_year_return"]}
                      />
                    );
                  })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        );
      })}
    </Flex>
  );
}

export default MutualTable;
