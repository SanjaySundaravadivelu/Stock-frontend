// Chakra imports
import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Grid,
  Icon,
  Progress,
  SimpleGrid,
  Spacer,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
  Spinner,
  Alert,
} from "@chakra-ui/react";
import * as jwt_decode from "jwt-decode";

// Styles for the circular progressbar
import medusa from "../../assets/img/stock.jpg";
// Custom components
import Card from "../../components/Card/Card.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import BarChart from "../../components/Charts/BarChart";
import LineChart from "../../components/Charts/LineChart";
import IconBox from "../../components/Icons/IconBox";
import EmptyWatchlist from "./EmptyWatchlist.jsx";
// Icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "../../components/Icons/Icons.jsx";
import DashboardTableRow from "../../components/Tables/DashboardTableRow";
import DashboardMainTable from "../../components/Tables/DashboardMainTable.jsx";
import RecosTable from "../../components/Tables/RecosTable.jsx";
import TimelineRow from "../../components/Tables/TimelineRow";
import { AiFillCheckCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";

import {
  BiHappy,
  BiHappyHeartEyes,
  BiDizzy,
  BiSad,
  BiAngry,
  BiRefresh,
} from "react-icons/bi";
import {
  FaFilePdf,
  FaFlag,
  FaArrowUp,
  FaArrowDown,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import {
  IoCheckmarkDoneCircleSharp,
  IoEllipsisHorizontal,
} from "react-icons/io5";
// Data
import {
  barChartDataDashboard,
  barChartOptionsDashboard,
  lineChartDataDashboard,
  lineChartOptionsDashboard,
} from "../../variables/charts";
import { useProductStore } from "../../store/product";
import React, { useEffect, useState } from "react";

import { dashboardTableData, timelineData } from "../../variables/general";

export default function Dashboard() {
  const history = useHistory();
  const [user, setUser] = useState();

  const navi = () => {
    setTimeout(() => {
      history.push("/auth/profile");
    }, 100);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    try {
      if (token) {
        const user1 = jwt_decode.jwtDecode(token);
        setUser(user1.user);
      }
    } catch (error) {
      console.error("Invalid token", error);
    }
  }, []);
  const { fetchProducts, fetchStat, fetchReco, updateProduct } =
    useProductStore();
  const [loading, setLoading] = useState(false);

  const [product, setProducts] = useState([
    {
      _id: "",
      createdAt: "",
      product: {
        companyName: "1",
        industry: "Software & Programming",
        companyProfile: {
          companyDescription:
            "Tata Consultancy Services Limited (TCS) is an India-based company engaged in providing information technology (IT) services, consulting, and business solutions The business segments include Banking, Financial Services and Insurance; Manufacturing; Consumer Business; Communication, Media and Technology; Life Sciences and Healthcare and Others such as Energy, Resources and Utilities, s-Governance and Products. The Company’s products include TCS ADD, TCS BaNCS, TCS BFSI Platforms, TCS CHROMA, TCS Customer Intelligence & Insights, TCS ERP on Cloud, TCS Intelligent Urban Exchange, Quartz-The Smart Ledgers, Jile, TCS Optumera, TCS TwinX, TCS TAP and TCS OmniStore. Its services portfolio consists of Artificial Intelligence, Cloud, Cognitive Business Operations, Consulting, Cybersecurity, Data and Analytics, Enterprise Solutions, Internet of Things (IoT) and Digital Engineering, TCS Interactive, TCS and AWS Cloud, TCS Enterprise Cloud, TCS and Google Cloud, TCS and Microsoft Cloud and others.",
          mgIndustry: "Software & Programming",
          isInId: "INE467B01029",
          officers: {
            officer: [
              {
                rank: 1,
                since: "03/16/2023",
                firstName: "K.",
                mI: null,
                lastName: "Krithivasan",
                age: "60 ",
                title: {
                  startYear: "2023",
                  startMonth: "06",
                  startDay: "01",
                  iD1: "CEO",
                  abbr1: "CEO",
                  iD2: "MDR",
                  abbr2: "Mgng.Dir.",
                  Value:
                    "Chief Executive Officer, Managing Director, Executive Director",
                },
              },
              {
                rank: 2,
                since: "05/01/2021",
                firstName: "Samir",
                mI: null,
                lastName: "Seksaria",
                age: null,
                title: {
                  startYear: "2021",
                  startMonth: "05",
                  startDay: "01",
                  iD1: "CFO",
                  abbr1: "CFO",
                  iD2: "",
                  abbr2: "",
                  Value: "Chief Financial Officer",
                },
              },
              {
                rank: 3,
                since: "05/2019",
                firstName: "Milind",
                mI: null,
                lastName: "Lakkad",
                age: null,
                title: {
                  startYear: "2021",
                  startMonth: "",
                  startDay: "",
                  iD1: "CHO",
                  abbr1: "Chief HR",
                  iD2: "",
                  abbr2: "",
                  Value: "Chief Human Resource Officer",
                },
              },
              {
                rank: 4,
                since: "2023",
                firstName: "Harrick",
                mI: null,
                lastName: "Vin",
                age: null,
                title: {
                  startYear: "2023",
                  startMonth: "",
                  startDay: "",
                  iD1: "CTO",
                  abbr1: "CTO",
                  iD2: "",
                  abbr2: "",
                  Value: "Chief Technology Officer",
                },
              },
              {
                rank: 5,
                since: "2023",
                firstName: "Abhinav",
                mI: null,
                lastName: "Kumar",
                age: null,
                title: {
                  startYear: "2023",
                  startMonth: "",
                  startDay: "",
                  iD1: "CMO",
                  abbr1: "CMO",
                  iD2: "",
                  abbr2: "",
                  Value: "Chief Marketing Officer",
                },
              },
              {
                rank: 6,
                since: "11/01/2024",
                firstName: "Yashaswin",
                mI: null,
                lastName: "Sheth",
                age: null,
                title: {
                  startYear: "2024",
                  startMonth: "11",
                  startDay: "01",
                  iD1: "CCO",
                  abbr1: "Chief Comp.",
                  iD2: "SEC",
                  abbr2: "Secy.",
                  Value: "Compliance Officer, Company Secretary",
                },
              },
              {
                rank: 7,
                since: "2019",
                firstName: "Madhav",
                mI: null,
                lastName: "Anchan",
                age: null,
                title: {
                  startYear: "2021",
                  startMonth: "",
                  startDay: "",
                  iD1: "GCN",
                  abbr1: "Counsel",
                  iD2: "",
                  abbr2: "",
                  Value: "General Counsel Legal",
                },
              },
            ],
          },
          exchangeCodeBse: "532540",
          exchangeCodeNse: "TCS",
          peerCompanyList: [
            {
              tickerId: "S0003051",
              companyName: "Tata Consultancy Services",
              priceToBookValueRatio: 16.55,
              priceToEarningsValueRatio: 32.39,
              marketCap: 1499697.28,
              price: 4145,
              percentChange: -0.11,
              netChange: -4.4,
              returnOnAverageEquity5YearAverage: 43.43,
              returnOnAverageEquityTrailing12Month: 46.93,
              ltDebtPerEquityMostRecentFiscalYear: 7.2,
              netProfitMargin5YearAverage: 19.59,
              netProfitMarginPercentTrailing12Month: 19.16,
              dividendYieldIndicatedAnnualDividend: 1.38,
              totalSharesOutstanding: 361.808752,
              languageSupport: "Tata Consultancy Services",
              imageUrl: "https://logo.clearbit.com/tcs.com/",
              ylow: 3307.03,
              yhigh: 4585.9,
            },
            {
              tickerId: "S0003032",
              companyName: "Infosys",
              priceToBookValueRatio: 8.57,
              priceToEarningsValueRatio: 28.72,
              marketCap: 756037.79,
              price: 1826.2,
              percentChange: 1.31,
              netChange: 23.55,
              returnOnAverageEquity5YearAverage: 29.36,
              returnOnAverageEquityTrailing12Month: 31.48,
              ltDebtPerEquityMostRecentFiscalYear: 7.26,
              netProfitMargin5YearAverage: 17.7,
              netProfitMarginPercentTrailing12Month: 17.18,
              dividendYieldIndicatedAnnualDividend: 2.25,
              totalSharesOutstanding: 413.995064,
              languageSupport: "Infosys",
              imageUrl: "https://logo.clearbit.com/infosys.com/",
              ylow: 1353.56,
              yhigh: 1990.9,
            },
            {
              tickerId: "S0003045",
              companyName: "HCL Technologies",
              priceToBookValueRatio: 7.31,
              priceToEarningsValueRatio: 31.78,
              marketCap: 496872.08,
              price: 1831,
              percentChange: 0,
              netChange: -0.05,
              returnOnAverageEquity5YearAverage: 22.59,
              returnOnAverageEquityTrailing12Month: 25.01,
              ltDebtPerEquityMostRecentFiscalYear: 6.68,
              netProfitMargin5YearAverage: 14.96,
              netProfitMarginPercentTrailing12Month: 14.79,
              dividendYieldIndicatedAnnualDividend: 2.94,
              totalSharesOutstanding: 271.36651,
              languageSupport: "HCL Technologies",
              imageUrl: "https://logo.clearbit.com/hcltech.com/",
              ylow: 1235,
              yhigh: 1886.6,
            },
            {
              tickerId: "S0003160",
              companyName: "LTI Mindtree",
              priceToBookValueRatio: 8.86,
              priceToEarningsValueRatio: 39.11,
              marketCap: 174766,
              price: 5901,
              percentChange: 0.33,
              netChange: 19.65,
              returnOnAverageEquity5YearAverage: 29.25,
              returnOnAverageEquityTrailing12Month: 23.78,
              ltDebtPerEquityMostRecentFiscalYear: 8.63,
              netProfitMargin5YearAverage: 13.89,
              netProfitMarginPercentTrailing12Month: 12.76,
              dividendYieldIndicatedAnnualDividend: 1.09,
              totalSharesOutstanding: 29.616336999999998,
              languageSupport: "LTI Mindtree",
              imageUrl: "https://logo.clearbit.com/lntinfotech.com/",
              ylow: 4518.35,
              yhigh: 6575,
            },
            {
              tickerId: "S0003115",
              companyName: "Tech Mahindra",
              priceToBookValueRatio: 5.6,
              priceToEarningsValueRatio: 55.72,
              marketCap: 148491.75,
              price: 1682.5,
              percentChange: 1.9,
              netChange: 31.4,
              returnOnAverageEquity5YearAverage: 16.98,
              returnOnAverageEquityTrailing12Month: 12.38,
              ltDebtPerEquityMostRecentFiscalYear: 2.9,
              netProfitMargin5YearAverage: 9.41,
              netProfitMarginPercentTrailing12Month: 6.33,
              dividendYieldIndicatedAnnualDividend: 2.54,
              totalSharesOutstanding: 88.256615,
              languageSupport: "Tech Mahindra",
              imageUrl: "https://logo.clearbit.com/techmahindra.com/",
              ylow: 1117.55,
              yhigh: 1761.3,
            },
          ],
        },
        currentPrice: {
          BSE: "4145",
          NSE: "4147",
        },
        yearHigh: "4585.9",
        yearLow: "3307.03",
        recosBar: {
          stockAnalyst: [
            {
              colorCode: "#B40000",
              ratingName: "Strong Sell",
              ratingValue: 5,
              minValue: 4.2,
              maxValue: 5,
              numberOfAnalysts: 2,
            },
            {
              colorCode: "#FF0000",
              ratingName: "Sell",
              ratingValue: 4,
              minValue: 3.4,
              maxValue: 4.2,
              numberOfAnalysts: 3,
            },
            {
              colorCode: "#898989",
              ratingName: "Hold",
              ratingValue: 3,
              minValue: 2.6,
              maxValue: 3.4,
              numberOfAnalysts: 11,
            },
            {
              colorCode: "#06AA5A",
              ratingName: "Buy",
              ratingValue: 2,
              minValue: 1.8,
              maxValue: 2.6,
              numberOfAnalysts: 21,
            },
            {
              colorCode: "#02552E",
              ratingName: "Strong Buy",
              ratingValue: 1,
              minValue: 1,
              maxValue: 1.8,
              numberOfAnalysts: 5,
            },
          ],
          tickerRatingValue: 2,
          isDataPresent: true,
          noOfRecommendations: 42,
          meanValue: 2.42857143,
          tickerPercentage: 78.57,
        },
        recentNews: [
          {
            id: "11729246434397",
            headline:
              "Tata Communications' AI cloud to be launched next year: CEO Lakshminarayanan",
            date: "Fri, 18 Oct 2024 17:05 PM IST IST",
            timeToRead: "3",
            url: "https://www.livemint.com/companies/tata-communications-ai-chips-artificial-intelligence-ai-cloud-nvidia-ai-solutions-ai-computing-infrastructure-tcs-11729246434397.html",
            listimage:
              "https://www.livemint.com/lm-img/img/2024/10/18/90x90/AS_Lakshmi_Tata_Communications_1721576192420_1729246768423.jpg",
            thumbnailimage:
              "https://www.livemint.com/lm-img/img/2024/10/18/90x90/AS_Lakshmi_Tata_Communications_1721576192420_1729246768423.jpg",
          },
          {
            id: "11729232609356",
            headline: "Infosys’ mixed signals give cold vibes to investors",
            date: "Fri, 18 Oct 2024 12:46 PM IST IST",
            timeToRead: "2",
            url: "https://www.livemint.com/market/mark-to-market/infosys-shares-q2-results-it-companies-wipro-tcs-cc-revenue-growth-it-spending-deal-wins-guidance-ebit-margin-11729232609356.html",
            listimage:
              "https://www.livemint.com/lm-img/img/2024/10/18/90x90/INFOSYS-TAX--0_1729235497089_1729235519654.JPG",
            thumbnailimage:
              "https://www.livemint.com/lm-img/img/2024/10/18/90x90/INFOSYS-TAX--0_1729235497089_1729235519654.JPG",
          },
          {
            id: "11728982143595",
            headline: "HCL Tech’s rich valuation clouds re-rating prospects",
            date: "Tue, 15 Oct 2024 15:20 PM IST IST",
            timeToRead: "2",
            url: "https://www.livemint.com/market/mark-to-market/hcl-tech-result-valuation-revenue-profit-margin-guidance-share-price-tata-consultancy-services-infosys-september-quarter-11728982143595.html",
            listimage:
              "https://www.livemint.com/lm-img/img/2024/10/15/90x90/HCLTECH-RESULTS--0_1728983051095_1728983221097.JPG",
            thumbnailimage:
              "https://www.livemint.com/lm-img/img/2024/10/15/90x90/HCLTECH-RESULTS--0_1728983051095_1728983221097.JPG",
          },
          {
            id: "11728737035918",
            headline:
              "Dividend Stocks: TCS, Anand Rathi Wealth, NRB Bearings among others to trade ex-dividend next week; Full list here",
            date: "Sat, 12 Oct 2024 19:37 PM IST IST",
            timeToRead: "1",
            url: "https://www.livemint.com/market/stock-market-news/dividend-stocks-tcs-anand-rathi-wealth-nrb-bearings-among-others-to-trade-ex-dividend-next-week-full-list-here-11728737035918.html",
            listimage:
              "https://www.livemint.com/lm-img/img/2024/10/12/90x90/g2a760d0ef8762c8efd8b3e521e8cbda9a22616b1da84e058b_1707120816781_1728740267152.jpg",
            thumbnailimage:
              "https://www.livemint.com/lm-img/img/2024/10/12/90x90/g2a760d0ef8762c8efd8b3e521e8cbda9a22616b1da84e058b_1707120816781_1728740267152.jpg",
          },
          {
            id: "11728630392313",
            headline: "TCS’ Q2 margin miss drives earnings downgrades",
            date: "Fri, 11 Oct 2024 13:19 PM IST IST",
            timeToRead: "2",
            url: "https://www.livemint.com/market/mark-to-market/tcs-q2-earnings-tata-consultancy-services-results-september-quarter-tcs-deals-margin-ebit-revenue-profit-forecast-11728630392313.html",
            listimage:
              "https://www.livemint.com/lm-img/img/2024/10/11/90x90/TCS-NASSCOM-AI-0_1728631946604_1728631991311.JPG",
            thumbnailimage:
              "https://www.livemint.com/lm-img/img/2024/10/11/90x90/TCS-NASSCOM-AI-0_1728631946604_1728631991311.JPG",
          },
        ],
        stockDetailsReusableData: {
          close: "4149.40",
          date: "08 Nov 2024",
          time: "10:29:04",
          price: "4145.00",
          percentChange: "-0.11",
          marketCap: "1501832.00",
          yhigh: "4585.90",
          ylow: "3307.03",
          high: "4169.15",
          low: "4119.70",
          pPerEBasicExcludingExtraordinaryItemsTTM: "32.62",
          currentDividendYieldCommonStockPrimaryIssueLTM: "1.37",
          totalDebtPerTotalEquityMostRecentQuarter: "0.09",
          priceYTDPricePercentChange: "9.93",
          price5DayPercentChange: "4.60",
          NetIncome: "45908.00",
          FiscalYear: "2024",
          interimNetIncome: "11909.00",
          stockAnalyst: [
            {
              colorCode: "#02552E",
              ratingName: "Strong Buy",
              ratingValue: 1,
              numberOfAnalystsLatest: "5",
              numberOfAnalysts1WeekAgo: "5",
              numberOfAnalysts1MonthAgo: "5",
              numberOfAnalysts2MonthAgo: "5",
              numberOfAnalysts3MonthAgo: "5",
            },
            {
              colorCode: "#06AA5A",
              ratingName: "Buy",
              ratingValue: 2,
              numberOfAnalystsLatest: "21",
              numberOfAnalysts1WeekAgo: "21",
              numberOfAnalysts1MonthAgo: "21",
              numberOfAnalysts2MonthAgo: "20",
              numberOfAnalysts3MonthAgo: "20",
            },
            {
              colorCode: "#898989",
              ratingName: "Hold",
              ratingValue: 3,
              numberOfAnalystsLatest: "11",
              numberOfAnalysts1WeekAgo: "11",
              numberOfAnalysts1MonthAgo: "10",
              numberOfAnalysts2MonthAgo: "10",
              numberOfAnalysts3MonthAgo: "10",
            },
            {
              colorCode: "#FF0000",
              ratingName: "Sell",
              ratingValue: 4,
              numberOfAnalystsLatest: "3",
              numberOfAnalysts1WeekAgo: "3",
              numberOfAnalysts1MonthAgo: "3",
              numberOfAnalysts2MonthAgo: "4",
              numberOfAnalysts3MonthAgo: "5",
            },
            {
              colorCode: "#B40000",
              ratingName: "Strong Sell",
              ratingValue: 5,
              numberOfAnalystsLatest: "2",
              numberOfAnalysts1WeekAgo: "2",
              numberOfAnalysts1MonthAgo: "2",
              numberOfAnalysts2MonthAgo: "2",
              numberOfAnalysts3MonthAgo: "2",
            },
            {
              colorCode: "",
              ratingName: "Total",
              ratingValue: 6,
              numberOfAnalystsLatest: "42",
              numberOfAnalysts1WeekAgo: "42",
              numberOfAnalysts1MonthAgo: "41",
              numberOfAnalysts2MonthAgo: "41",
              numberOfAnalysts3MonthAgo: "42",
            },
          ],
          peerCompanyList: [
            {
              tickerId: "S0003051",
              companyName: "Tata Consultancy Services",
              priceToBookValueRatio: 16.55,
              priceToEarningsValueRatio: 32.39,
              marketCap: 1499697.28,
              price: 4145,
              percentChange: -0.11,
              netChange: -4.4,
              returnOnAverageEquity5YearAverage: 43.43,
              returnOnAverageEquityTrailing12Month: 46.93,
              ltDebtPerEquityMostRecentFiscalYear: 7.2,
              netProfitMargin5YearAverage: 19.59,
              netProfitMarginPercentTrailing12Month: 19.16,
              dividendYieldIndicatedAnnualDividend: 1.38,
              totalSharesOutstanding: 361.808752,
              languageSupport: "Tata Consultancy Services",
              imageUrl: "https://logo.clearbit.com/tcs.com/",
              ylow: 3307.03,
              yhigh: 4585.9,
            },
            {
              tickerId: "S0003032",
              companyName: "Infosys",
              priceToBookValueRatio: 8.57,
              priceToEarningsValueRatio: 28.72,
              marketCap: 756037.79,
              price: 1826.2,
              percentChange: 1.31,
              netChange: 23.55,
              returnOnAverageEquity5YearAverage: 29.36,
              returnOnAverageEquityTrailing12Month: 31.48,
              ltDebtPerEquityMostRecentFiscalYear: 7.26,
              netProfitMargin5YearAverage: 17.7,
              netProfitMarginPercentTrailing12Month: 17.18,
              dividendYieldIndicatedAnnualDividend: 2.25,
              totalSharesOutstanding: 413.995064,
              languageSupport: "Infosys",
              imageUrl: "https://logo.clearbit.com/infosys.com/",
              ylow: 1353.56,
              yhigh: 1990.9,
            },
            {
              tickerId: "S0003045",
              companyName: "HCL Technologies",
              priceToBookValueRatio: 7.31,
              priceToEarningsValueRatio: 31.78,
              marketCap: 496872.08,
              price: 1831,
              percentChange: 0,
              netChange: -0.05,
              returnOnAverageEquity5YearAverage: 22.59,
              returnOnAverageEquityTrailing12Month: 25.01,
              ltDebtPerEquityMostRecentFiscalYear: 6.68,
              netProfitMargin5YearAverage: 14.96,
              netProfitMarginPercentTrailing12Month: 14.79,
              dividendYieldIndicatedAnnualDividend: 2.94,
              totalSharesOutstanding: 271.36651,
              languageSupport: "HCL Technologies",
              imageUrl: "https://logo.clearbit.com/hcltech.com/",
              ylow: 1235,
              yhigh: 1886.6,
            },
          ],
          sectorPriceToEarningsValueRatio: "33.01",
          averageRating: "Buy",
        },
      },
    },
  ]);
  const [recos, setRecos] = useState({
    trending_stocks: {
      top_gainers: [
        {
          ticker_id: "S0003022",
          company_name: "Tata Motors",
          price: "816.8",
          percent_change: "3.06",
          net_change: "24.25",
          bid: "816.8",
          ask: "0",
          high: "818.85",
          low: "785.3",
          open: "793",
          low_circuit_limit: "735.15",
          up_circuit_limit: "898.45",
          volume: "19716910",
          date: "2024-12-06",
          time: "10:29:50",
          close: "792.55",
          bid_size: "117285",
          ask_size: "0",
          exchange_type: "NSI",
          lot_size: "1",
          overall_rating: "Neutral",
          short_term_trends: "Bullish",
          long_term_trends: "Bearish",
          year_low: "694.11",
          year_high: "1179",
          ric: "TAMO.NS",
        },
        {
          ticker_id: "S0003120",
          company_name: "Bajaj Auto",
          price: "9099.9",
          percent_change: "2.34",
          net_change: "207.95",
          bid: "0",
          ask: "9099.9",
          high: "9148.95",
          low: "8930.1",
          open: "8953.9",
          low_circuit_limit: "8189.95",
          up_circuit_limit: "10009.85",
          volume: "746013",
          date: "2024-12-06",
          time: "10:25:18",
          close: "8891.95",
          bid_size: "0",
          ask_size: "20",
          exchange_type: "NSI",
          lot_size: "1",
          overall_rating: "Bearish",
          short_term_trends: "Bearish",
          long_term_trends: "Bearish",
          year_low: "5987.85",
          year_high: "12774",
          ric: "BAJA.NS",
        },
        {
          ticker_id: "S0003048",
          company_name: "Axis Bank",
          price: "1184.55",
          percent_change: "1.56",
          net_change: "18.15",
          bid: "0",
          ask: "1184.55",
          high: "1193.85",
          low: "1160",
          open: "1167.5",
          low_circuit_limit: "1066.1",
          up_circuit_limit: "1303",
          volume: "7542210",
          date: "2024-12-06",
          time: "10:29:16",
          close: "1166.4",
          bid_size: "0",
          ask_size: "7286",
          exchange_type: "NSI",
          lot_size: "1",
          overall_rating: "Bullish",
          short_term_trends: "Bullish",
          long_term_trends: "Neutral",
          year_low: "995.7",
          year_high: "1339.65",
          ric: "AXBK.NS",
        },
      ],
      top_losers: [
        {
          ticker_id: "S0003086",
          company_name: "Adani Ports & Special Economic Zone",
          price: "1259.05",
          percent_change: "-1.41",
          net_change: "-18",
          bid: "0",
          ask: "1259.05",
          high: "1282.5",
          low: "1256.1",
          open: "1279",
          low_circuit_limit: "1133.15",
          up_circuit_limit: "1384.95",
          volume: "2232531",
          date: "2024-12-06",
          time: "10:28:12",
          close: "1277.05",
          bid_size: "0",
          ask_size: "6324",
          exchange_type: "NSI",
          lot_size: "1",
          overall_rating: "Neutral",
          short_term_trends: "Bullish",
          long_term_trends: "Bearish",
          year_low: "858.5",
          year_high: "1621.4",
          ric: "APSE.NS",
        },
        {
          ticker_id: "S0003049",
          company_name: "Cipla",
          price: "1477.4",
          percent_change: "-1.39",
          net_change: "-20.85",
          bid: "1477.4",
          ask: "0",
          high: "1513.25",
          low: "1476",
          open: "1513.25",
          low_circuit_limit: "1329.7",
          up_circuit_limit: "1625.1",
          volume: "3768932",
          date: "2024-12-06",
          time: "10:27:52",
          close: "1498.25",
          bid_size: "116",
          ask_size: "0",
          exchange_type: "NSI",
          lot_size: "1",
          overall_rating: "Bearish",
          short_term_trends: "Bearish",
          long_term_trends: "Bearish",
          year_low: "1192.1",
          year_high: "1702.05",
          ric: "CIPL.NS",
        },
        {
          ticker_id: "S0003039",
          company_name: "Bharti Airtel",
          price: "1597.85",
          percent_change: "-1.08",
          net_change: "-17.5",
          bid: "1597.85",
          ask: "0",
          high: "1624.65",
          low: "1594.8",
          open: "1618",
          low_circuit_limit: "1438.1",
          up_circuit_limit: "1757.6",
          volume: "4296866",
          date: "2024-12-06",
          time: "10:28:20",
          close: "1615.35",
          bid_size: "120",
          ask_size: "0",
          exchange_type: "NSI",
          lot_size: "1",
          overall_rating: "Bullish",
          short_term_trends: "Bullish",
          long_term_trends: "Bullish",
          year_low: "960",
          year_high: "1779",
          ric: "BRTI.NS",
        },
      ],
    },
  });
  const [total, setTotal] = useState(0);
  const [currTopId, setCurrTopId] = useState(0);

  const [currReco, setCurrReco] = useState("gain");
  const [stat, setStat] = useState([
    {
      _id: "674ae6ca6792a4465cc175f0",
      stat: {
        strongbuy: 0,
        buy: 0,
        sell: 0,
        strongsell: 0,
        hold: 0,
      },
      createdAt: "2024-11-30T10:19:54.736Z",
      updatedAt: "2024-12-01T06:07:42.294Z",
      __v: 0,
    },
  ]);
  const getProducts = async () => {
    setLoading(true);
    const res = await fetchProducts();
    const res1 = await fetchStat();
    //const res2 = await fetchReco();

    let tot = 0;
    let max = 0;
    let id = 0;
    res.data.map((obj, index) => {
      if (
        parseFloat(obj.product.stockDetailsReusableData.percentChange) > 0.0
      ) {
        tot += 1;
        if (
          parseFloat(obj.product.stockDetailsReusableData.percentChange) > max
        ) {
          id = index;
          max = parseFloat(obj.product.stockDetailsReusableData.percentChange);
        }
      }
    });
    setTotal(tot);
    setCurrTopId(id);
    setProducts(res.data);
    setStat(res1.data);
    //setRecos(res2.data);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const test = (
    <>
      <Card>
        <CardHeader mb="32px">
          <Flex direction="column">
            <Text fontSize="lg" color="#fff" fontWeight="bold" mb="6px">
              Orders overview
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
          <Flex direction="column" lineHeight="21px">
            {timelineData.map((row, index, arr) => {
              return (
                <TimelineRow
                  logo={row.logo}
                  title={row.title}
                  date={row.date}
                  color={row.color}
                  index={index}
                  arrLength={arr.length}
                />
              );
            })}
          </Flex>
        </CardBody>
      </Card>
    </>
  );

  return (
    <>
      {loading ? (
        <Flex
          minH="300px"
          wrap="wrap"
          alignContent="center"
          justifyContent="center"
        >
          {" "}
          <VStack colorPalette="teal">
            <Spinner color="white" />
            <Text color="white">Loading...</Text>
          </VStack>
        </Flex>
      ) : (
        <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
          <SimpleGrid columns={{ sm: 1, md: 2, xl: 5 }} spacing="24px">
            {/* MiniStatistics Card */}
            <Card>
              <CardBody>
                <Flex
                  flexDirection="row"
                  align="center"
                  justify="center"
                  w="100%"
                >
                  <Stat me="auto">
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      Strong buy
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize="lg" color="#fff">
                        {stat[0].stat.strongbuy}
                      </StatNumber>
                    </Flex>
                  </Stat>
                  <IconBox as="box" h={"45px"} w={"45px"} bg="#02552E">
                    <Icon
                      as={BiHappyHeartEyes}
                      color="#fff"
                      w="30px"
                      h="30px"
                    />
                  </IconBox>
                </Flex>
              </CardBody>
            </Card>
            {/*nh*/}
            <Card>
              <CardBody>
                <Flex
                  flexDirection="row"
                  align="center"
                  justify="center"
                  w="100%"
                >
                  <Stat me="auto">
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      Buy
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize="lg" color="#fff">
                        {stat[0].stat.buy}
                      </StatNumber>
                    </Flex>
                  </Stat>
                  <IconBox as="box" h={"45px"} w={"45px"} bg="#06AA5A">
                    <Icon as={BiHappy} color="#fff" w="30px" h="30px" />
                  </IconBox>
                </Flex>
              </CardBody>
            </Card>
            {/* MiniStatistics Card */}
            <Card minH="83px">
              <CardBody>
                <Flex
                  flexDirection="row"
                  align="center"
                  justify="center"
                  w="100%"
                >
                  <Stat me="auto">
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      Hold
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize="lg" color="#fff">
                        {stat[0].stat.hold}
                      </StatNumber>
                    </Flex>
                  </Stat>
                  <IconBox as="box" h={"45px"} w={"45px"} bg="#898989">
                    <Icon as={BiDizzy} color="#fff" w="30px" h="30px" />
                  </IconBox>
                </Flex>
              </CardBody>
            </Card>
            {/* MiniStatistics Card */}
            <Card>
              <CardBody>
                <Flex
                  flexDirection="row"
                  align="center"
                  justify="center"
                  w="100%"
                >
                  <Stat>
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      Sell
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize="lg" color="#fff">
                        {stat[0].stat.sell}
                      </StatNumber>
                    </Flex>
                  </Stat>
                  <Spacer />
                  <IconBox as="box" h={"45px"} w={"45px"} bg="#FF0000">
                    <Icon as={BiSad} color="#fff" w="30px" h="30px" />
                  </IconBox>
                </Flex>
              </CardBody>
            </Card>
            {/* MiniStatistics Card */}
            <Card>
              <CardBody>
                <Flex
                  flexDirection="row"
                  align="center"
                  justify="center"
                  w="100%"
                >
                  <Stat me="auto">
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      Strong sell
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize="lg" color="#fff" fontWeight="bold">
                        {stat[0].stat.strongsell}
                      </StatNumber>
                    </Flex>
                  </Stat>
                  <IconBox as="box" h={"45px"} w={"45px"} bg="#B40000">
                    <Icon as={BiAngry} color="#fff" w="30px" h="30px" />
                  </IconBox>
                </Flex>
              </CardBody>
            </Card>
          </SimpleGrid>
          {/* Projects */}
          {product.length <= 0 ? (
            <EmptyWatchlist />
          ) : (
            <>
              {" "}
              <Card
                p="16px"
                overflowX={{ sm: "scroll", xl: "hidden" }}
                my="26px"
              >
                <CardHeader p="12px 0px 28px 0px">
                  <Flex
                    direction="row"
                    width="-webkit-fill-available"
                    justifyContent="space-between"
                  >
                    <Text fontSize="lg" color="#fff" fontWeight="bold" pb="8px">
                      Your stocks
                    </Text>
                    <Flex align="center" justifyContent="space-between">
                      {product.length > 0 && (
                        <>
                          <button
                            onClick={async () => {
                              const res = await updateProduct();
                              getProducts();
                            }}
                          >
                            <IconBox
                              as="box"
                              h={"45px"}
                              w={"45px"}
                              bg="#582cff"
                              marginRight="10px"
                            >
                              <Icon
                                as={FaFilePdf}
                                color="#fff"
                                w="30px"
                                h="30px"
                              />
                            </IconBox>
                          </button>
                          <Flex direction="column">
                            <Text
                              fontWeight="bold"
                              as="span"
                              fontSize="sm"
                              color="gray.400"
                            >
                              Send summary
                            </Text>{" "}
                          </Flex>
                        </>
                      )}
                    </Flex>
                  </Flex>
                </CardHeader>
                <Table variant="simple" color="#fff">
                  <Thead>
                    <Tr my=".8rem" ps="0px">
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
                        Percentage change
                      </Th>
                      <Th
                        color="gray.400"
                        fontFamily="Plus Jakarta Display"
                        borderBottomColor="#56577A"
                      >
                        Analyst Recommendation
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {product.map((row, index, arr) => {
                      return (
                        <DashboardMainTable
                          name={row.product.companyName}
                          symbol={row.product.companyProfile.exchangeCodeNse}
                          nse={row.product.currentPrice.NSE}
                          bse={row.product.currentPrice.BSE}
                          percent={
                            row.product.stockDetailsReusableData.percentChange
                          }
                          reco={row.product.recosBar.meanValue}
                          lastItem={index === arr.length - 1 ? true : false}
                        />
                      );
                    })}
                  </Tbody>
                </Table>
              </Card>
              <Grid
                templateColumns={{
                  sm: "1fr",
                  md: "1fr 1fr",
                  "2xl": "2fr 1.2fr 1.5fr",
                }}
                my="26px"
                gap="18px"
              >
                {/* Welcome Card */}
                <Card
                  p="0px"
                  gridArea={{ md: "1 / 1 / 2 / 3", "2xl": "auto" }}
                  bgImage={medusa}
                  bgSize="cover"
                  bgPosition="50%"
                >
                  <CardBody w="100%" h="100%">
                    <Flex
                      flexDirection={{ sm: "column", lg: "row" }}
                      w="100%"
                      h="100%"
                    >
                      <Flex
                        flexDirection="column"
                        h="100%"
                        p="22px"
                        minW="100%"
                        lineHeight="1.6"
                        alignContent="flex-end"
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <Text fontSize="sm" color="gray.400" fontWeight="bold">
                          Welcome back,
                        </Text>
                        <Text
                          fontSize="28px"
                          color="#fff"
                          fontWeight="bold"
                          mb="18px"
                        >
                          {(user && user.username) || "User"}
                        </Text>

                        <Spacer />
                        <Flex align="center">
                          <Button
                            p="0px"
                            variant="no-hover"
                            bg="transparent"
                            my={{ sm: "1.5rem", lg: "0px" }}
                            onClick={() => navi()}
                          >
                            <Text
                              fontSize="sm"
                              color="#fff"
                              fontWeight="bold"
                              cursor="pointer"
                              transition="all .3s ease"
                              my={{ sm: "1.5rem", lg: "0px" }}
                              _hover={{ me: "4px" }}
                            >
                              Explore Stocks , IPO and Mutual Funds
                            </Text>
                            <Icon
                              as={BsArrowRight}
                              w="20px"
                              h="20px"
                              color="#fff"
                              fontSize="2xl"
                              transition="all .3s ease"
                              mx=".3rem"
                              cursor="pointer"
                              pt="4px"
                              _hover={{ transform: "translateX(20%)" }}
                            />
                          </Button>
                        </Flex>
                      </Flex>
                    </Flex>
                  </CardBody>
                </Card>
                {/* Satisfaction Rate */}
                <Card gridArea={{ md: "2 / 1 / 3 / 2", "2xl": "auto" }}>
                  <CardHeader mb="24px">
                    <Flex direction="column">
                      <Text
                        color="#fff"
                        fontSize="lg"
                        fontWeight="bold"
                        mb="4px"
                      >
                        Positive performance Rate
                      </Text>
                      <Text color="gray.400" fontSize="sm">
                        From all stocks
                      </Text>
                    </Flex>
                  </CardHeader>
                  <Flex direction="column" justify="center" align="center">
                    <Box zIndex="-1">
                      <CircularProgress
                        size={200}
                        value={100 * (total / product.length)}
                        thickness={6}
                        color="#582CFF"
                        variant="vision"
                        rounded
                      >
                        <CircularProgressLabel>
                          <IconBox
                            mb="20px"
                            mx="auto"
                            bg="brand.200"
                            borderRadius="50%"
                            w="48px"
                            h="48px"
                          >
                            <Icon as={BiHappy} color="#fff" w="30px" h="30px" />
                          </IconBox>
                        </CircularProgressLabel>
                      </CircularProgress>
                    </Box>
                    <Stack
                      direction="row"
                      spacing={{ sm: "42px", md: "68px" }}
                      justify="center"
                      maxW={{ sm: "270px", md: "300px", lg: "100%" }}
                      mx={{ sm: "auto", md: "0px" }}
                      p="18px 22px"
                      bg="linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgba(10, 14, 35) 91.2%)"
                      borderRadius="20px"
                      position="absolute"
                      bottom="5%"
                    >
                      <Text fontSize="xs" color="gray.400">
                        0%
                      </Text>
                      <Flex direction="column" align="center" minW="80px">
                        <Text color="#fff" fontSize="28px" fontWeight="bold">
                          {Math.round(100 * (total / product.length))}{" "}
                          {" " + "%"}
                        </Text>
                        <Text fontSize="xs" color="gray.400">
                          {total +
                            " out of " +
                            product.length +
                            " stocks are performing well "}
                        </Text>
                      </Flex>
                      <Text fontSize="xs" color="gray.400">
                        100%
                      </Text>
                    </Stack>
                  </Flex>
                </Card>
                {/* Referral Tracking */}
                <Card gridArea={{ md: "2 / 2 / 3 / 3", "2xl": "auto" }}>
                  <Flex direction="column">
                    <Flex justify="space-between" align="center" mb="40px">
                      <Text color="#fff" fontSize="lg" fontWeight="bold">
                        Top performance
                      </Text>
                      <Button
                        borderRadius="12px"
                        w="38px"
                        h="38px"
                        bg="#22234B"
                        _hover="none"
                        _active="none"
                      >
                        <Icon as={IoEllipsisHorizontal} color="#7551FF" />
                      </Button>
                    </Flex>
                    <Flex direction={{ sm: "column", md: "row" }}>
                      <Flex
                        direction="column"
                        me={{ md: "6px", lg: "52px" }}
                        mb={{ sm: "16px", md: "0px" }}
                      >
                        <Flex
                          direction="column"
                          p="22px"
                          pe={{ sm: "22e", md: "8px", lg: "22px" }}
                          minW={{ sm: "220px", md: "140px", lg: "220px" }}
                          bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                          borderRadius="20px"
                          mb="20px"
                        >
                          <Text color="gray.400" fontSize="sm" mb="4px">
                            Name
                          </Text>
                          <Text color="#fff" fontSize="lg" fontWeight="bold">
                            {product[currTopId] &&
                              product[currTopId].product.companyName}
                          </Text>
                        </Flex>
                        <Flex
                          direction="column"
                          p="22px"
                          pe={{ sm: "22px", md: "8px", lg: "22px" }}
                          minW={{ sm: "170px", md: "140px", lg: "170px" }}
                          bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                          borderRadius="20px"
                        >
                          <Text color="gray.400" fontSize="sm" mb="4px">
                            Price
                          </Text>
                          <Text color="#fff" fontSize="lg" fontWeight="bold">
                            {product[currTopId] &&
                              product[currTopId].product.currentPrice.NSE}
                          </Text>
                        </Flex>
                      </Flex>
                      <Box mx={{ sm: "auto", md: "0px" }}>
                        <CircularProgress
                          size={
                            window.innerWidth >= 1024
                              ? 200
                              : window.innerWidth >= 768
                              ? 180
                              : 200
                          }
                          value={100}
                          thickness={6}
                          color="#05CD99"
                          variant="vision"
                        >
                          <CircularProgressLabel>
                            <Flex
                              direction="column"
                              justify="center"
                              align="center"
                            >
                              <Text color="gray.400" fontSize="sm">
                                Percentage change
                              </Text>
                              <Text
                                color="#fff"
                                fontSize={{ md: "16px", lg: "25px" }}
                                fontWeight="bold"
                                mb="4px"
                              >
                                {product[currTopId] &&
                                  product[currTopId].product
                                    .stockDetailsReusableData.percentChange +
                                    " "}{" "}
                                {product[currTopId] &&
                                product[currTopId].product
                                  .stockDetailsReusableData.percentChange >
                                  0 ? (
                                  <Icon color="white" as={FaArrowUp} me="6px" />
                                ) : (
                                  <Icon
                                    color="white"
                                    as={FaArrowDown}
                                    me="6px"
                                  />
                                )}
                              </Text>
                            </Flex>
                          </CircularProgressLabel>
                        </CircularProgress>
                      </Box>
                    </Flex>
                  </Flex>
                </Card>
              </Grid>
            </>
          )}
          <Grid maxW={{ sm: "100%", md: "100%" }} gap="24px" mb="24px">
            {/* Recos */}
            <Card p="16px" overflowX={{ sm: "scroll", xl: "hidden" }} my="26px">
              <CardHeader p="12px 0px 28px 0px">
                <Flex
                  direction="row"
                  width="-webkit-fill-available"
                  justifyContent="space-around"
                >
                  <Text fontSize="lg" color="#fff" fontWeight="bold" pb="8px">
                    Trending stocks
                  </Text>
                  <Box w="100%">
                    <Flex
                      direction={{ sm: "row", lg: "row" }}
                      w={{ sm: "100%", md: "50%", lg: "auto" }}
                      marginLeft="50px"
                    >
                      <Button
                        borderRadius="12px"
                        bg={currReco == "gain" ? "brand.200" : "transparent"}
                        _hover={{ opacity: "0.8" }}
                        _active={{ opacity: "0.9" }}
                        onClick={() => setCurrReco("gain")}
                        me={{ base: "none", lg: "20px", sm: "20px" }}
                      >
                        <Text fontSize="xs" color="#fff" fontWeight="bold">
                          Top Gainers
                        </Text>
                      </Button>
                      <Button
                        borderRadius="12px"
                        bg={currReco == "lose" ? "brand.200" : "transparent"}
                        _hover={{
                          bg: "brand.200",
                        }}
                        _active={{
                          bg: "brand.200",
                        }}
                        me={{ base: "none", lg: "20px", sm: "20px" }}
                        onClick={() => setCurrReco("lose")}
                      >
                        <Text fontSize="xs" color="#fff" fontWeight="bold">
                          Top Losers
                        </Text>
                      </Button>
                    </Flex>
                  </Box>
                </Flex>
              </CardHeader>
              <Table variant="simple" color="#fff">
                <Thead>
                  <Tr my=".8rem" ps="0px">
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
                      Percentage change
                    </Th>
                    <Th
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      Short term Trend
                    </Th>
                    <Th
                      color="gray.400"
                      fontFamily="Plus Jakarta Display"
                      borderBottomColor="#56577A"
                    >
                      Long term Trend
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {currReco == "gain"
                    ? recos.trending_stocks.top_gainers.map(
                        (row, index, arr) => {
                          return (
                            <RecosTable
                              name={row.company_name}
                              symbol={row.exchange_type}
                              high={row.high}
                              low={row.low}
                              close={row.price}
                              percent={row.percent_change}
                              short={row.short_term_trends}
                              long={row.long_term_trends}
                              lastItem={index === arr.length - 1 ? true : false}
                            />
                          );
                        }
                      )
                    : recos.trending_stocks.top_losers.map(
                        (row, index, arr) => {
                          return (
                            <RecosTable
                              name={row.company_name}
                              symbol={row.exchange_type}
                              high={row.high}
                              low={row.low}
                              close={row.price}
                              percent={row.percent_change}
                              short={row.short_term_trends}
                              long={row.long_term_trends}
                              lastItem={index === arr.length - 1 ? true : false}
                            />
                          );
                        }
                      )}
                </Tbody>
              </Table>
            </Card>
          </Grid>
          <Grid>{/* Orders Overview */}</Grid>
        </Flex>
      )}
    </>
  );
}
