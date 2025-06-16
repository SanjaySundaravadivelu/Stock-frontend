// Chakra imports
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  DarkMode,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  Switch,
  Text,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Progress,
  Spinner,
  VStack,
  Alert,
} from "@chakra-ui/react";
import avatar11 from "../../assets/img/avatars/avatar11.png";
// Images
import avatar2 from "../../assets/img/avatars/avatar2.png";
import avatar3 from "../../assets/img/avatars/avatar3.png";
import avatar4 from "../../assets/img/avatars/avatar4.png";
import avatar6 from "../../assets/img/avatars/avatar6.png";
import bgProfile from "../../assets/img/bgProfile.png";
import ProjectImage1 from "../../assets/img/ProjectImage1.png";
import ProjectImage2 from "../../assets/img/ProjectImage2.png";
import ProjectImage3 from "../../assets/img/ProjectImage3.png";
// Custom components
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import LineChart from "../../components/Charts/LineChart";
import FunnelChart from "../../components/Charts/FunnelChart";
import IconBox from "../../components/Icons/IconBox";
import BarChart from "../../components/Charts/BarChart";
import {
  CarIcon,
  FulgerIcon,
  FulgerWhiteIcon,
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  RocketIcon,
  StatsIcon,
  WalletIcon,
} from "../../components/Icons/Icons";
import { Separator } from "../../components/Separator/Separator";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
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
// Icons
import { IoDocumentsSharp } from "react-icons/io5";
// Data
import {
  lineChartDataProfile1,
  lineChartDataProfile2,
  lineChartOptionsProfile1,
  lineChartOptionsProfile2,
} from "../../variables/charts";
import { BellIcon, SearchIcon } from "@chakra-ui/icons";

import { useProductStore } from "../../store/product";
import {
  BiHappy,
  BiHappyHeartEyes,
  BiDizzy,
  BiSad,
  BiAngry,
  BiBookmarkPlus,
} from "react-icons/bi";

// Data
import {
  barChartDataDashboard,
  barChartOptionsDashboard,
  lineChartDataDashboard,
} from "../../variables/charts";
import TransactionRow from "../../components/Tables/TransactionRow";
import { AiFillCheckCircle } from "react-icons/ai";
import { dashboardTableData, timelineData } from "../../variables/general";
import Tables from "./Tables";
import MutualTable from "./MutualTable";
function Profile() {
  // Chakra Color Mode
  let inputBg = "#0F1535";
  let mainText = "gray.400";
  let navbarIcon = "white";
  let searchIcon = "white";
  navbarIcon = "white";
  mainText = "white";

  //Main
  const [curSelection, setCurSelection] = useState("Stock");
  const [loading, setLoading] = useState(false);

  //Stock
  const [lineChartOptionsDashboard, setOptions] = useState({
    chart: {
      toolbar: {
        show: true,
      },
      id: "",
    },
    tooltip: {
      theme: "dark",
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [],
      labels: {
        style: {
          colors: "#c8cfca",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#c8cfca",
          fontSize: "12px",
        },
      },
    },
    legend: {
      show: false,
    },
    grid: {
      strokeDashArray: 5,
      borderColor: "#56577A",
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 0.8,
        opacityTo: 0,
        stops: [],
      },
      colors: ["#2CD9FF", "#582CFF"],
    },
    colors: ["#2CD9FF", "#582CFF"],
  });
  const [currentSearch, setCurrentSearch] = useState("");

  const { searchStock, history, createProduct, currProduct, updateStat } =
    useProductStore();
  useEffect(() => {
    if (currProduct != "") {
      setStartSearch(currProduct);
    }
  }, []);
  const [analyst, setAnalyst] = useState({
    total: 0,
    reco: "",
    colour: "",
    percentage: 0,
    min: 0,
  });
  const [axes, setAxes] = useState({
    x: [],
    y: [],
  });
  const [period, setPeriod] = useState("1m");
  const [product, setProducts] = useState({
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
  });

  const [historyData, setHistoryData] = useState({
    datasets: [
      {
        label: "",
        metric: "",
        values: [[]],
      },
    ],
  });
  const setStartSearch = async (obj) => {
    setLoading(true);
    //console.log(obj);
    const res = await searchStock(obj);
    const res1 = await history(obj + "-1m");
    setHistoryData(JSON.parse(res1.data));
    setProducts(res.data);
    setCurrentSearch(obj);
    setLoading(false);
  };

  const fetchHistory = async (obj) => {
    const res1 = await history(currentSearch + "-" + obj);
    //console.log(JSON.parse(res1.data));
    setHistoryData(JSON.parse(res1.data));
    setPeriod(obj);
    let temp = lineChartOptionsDashboard;
    temp.chart.id = Math.random();
    setOptions(temp);
  };
  const [notfound, setNotfound] = useState(false);
  const searchProduct = async () => {
    setLoading(true);
    const res = await searchStock(currentSearch);
    const res1 = await history(currentSearch + "-1m");
    //console.log(res.data);
    //console.log(JSON.parse(res1.data));
    if (res.data.companyName) {
      setNotfound(false);
      setHistoryData(JSON.parse(res1.data));
      setProducts(res.data);
    } else {
      setNotfound(true);
    }

    setLoading(false);
  };
  useEffect(() => {
    if (product.stockDetailsReusableData.stockAnalyst.length >= 1) {
      let max = Number(
        product.stockDetailsReusableData.stockAnalyst[0].numberOfAnalystsLatest
      );
      let reco = product.stockDetailsReusableData.stockAnalyst[0].ratingName;
      let colour = product.stockDetailsReusableData.stockAnalyst[0].colorCode;
      let total = 0;
      let min = 1000;
      product.stockDetailsReusableData.stockAnalyst.map((obj) => {
        if (obj.numberOfAnalystsLatest < min) {
          min = Number(obj.numberOfAnalystsLatest);
        }
        if (obj.numberOfAnalystsLatest > max && obj.colorCode != "") {
          max = Number(obj.numberOfAnalystsLatest);
          reco = obj.ratingName;
          colour = obj.colorCode;
        }
        total =
          obj.colorCode != ""
            ? total + Number(obj.numberOfAnalystsLatest)
            : total;
      });
      setAnalyst({
        percentage: ((max / total) * 100).toFixed(2),
        reco: reco,
        colour: colour,
        total: total,
        min: min,
      });
    }
  }, [product]);
  useEffect(() => {
    //Axes

    let x = [];
    let y = [];
    historyData.datasets[0].values.map((obj) => {
      x.push(obj[0]);
      y.push(obj[1]);
    });
    let temp = lineChartOptionsDashboard;
    temp.xaxis.categories = x;
    setOptions(temp);
    setAxes({
      x: x,
      y: y,
    });
  }, [historyData]);
  const [showAlert, setShowAlert] = useState(false);
  const callIcon = (obj) => {
    let res;
    switch (obj) {
      case "Buy":
        res = <Icon as={BiHappy} color="#fff" w="30px" h="30px" />;
        break;
      case "Strong Buy":
        res = <Icon as={BiHappyHeartEyes} color="#fff" w="30px" h="30px" />;
        break;
      case "Hold":
        res = <Icon as={BiDizzy} color="#fff" w="30px" h="30px" />;
        break;
      case "Sell":
        res = <Icon as={BiSad} color="#fff" w="30px" h="30px" />;
        break;
      default:
        res = <Icon as={BiAngry} color="#fff" w="30px" h="30px" />;
    }
    return res;
  };

  const [showProfile, setShowProfile] = useState(false);
  const stock = (
    <>
      {product.companyName == "1" && !notfound && (
        <>
          {" "}
          <Flex
            minH="300px"
            wrap="wrap"
            alignContent="center"
            justifyContent="center"
          >
            {" "}
            <VStack colorPalette="teal">
              <Text color="white">
                Enter the name and click on the search icon{" "}
              </Text>
            </VStack>
          </Flex>
        </>
      )}
      {notfound && (
        <>
          <Flex
            minH="300px"
            wrap="wrap"
            alignContent="center"
            justifyContent="center"
          >
            {" "}
            <VStack colorPalette="teal">
              <Text color="white">Stock not found try again </Text>
            </VStack>
          </Flex>
        </>
      )}
      {product.companyName != "1" && !notfound && (
        <>
          {" "}
          {/* Stock */}
          <Grid
            templateColumns={{
              sm: "1fr",
              xl: "repeat(2, 1fr)",
              "2xl": "1fr 2fr 1.2fr",
            }}
            gap="22px"
            mb="24px"
          >
            {/* Welcome Card */}
            <Card
              bgImage={bgProfile}
              bgSize="cover"
              maxW={{ sm: "325px", md: "725px", lg: "980px" }}
              h={{ sm: "320px", lg: "350px", xl: "410px" }}
              gridArea={{ xl: "1 / 1 / 2 / 2", "2xl": "auto" }}
            >
              <Flex direction="column" h="100%">
                <Text color="#fff" fontSize="30px" fontWeight="bold" mb="3px">
                  Company Description
                </Text>
                <Text color="#fff" fontSize="sm" mb="auto">
                  {product.companyProfile.companyDescription}
                </Text>
              </Flex>
            </Card>
            {/* Car Informations */}
            {product.stockDetailsReusableData.stockAnalyst.length >= 1 && (
              <Card
                p="16px"
                maxH={{ lg: "410px" }}
                maxW={{ sm: "325px", md: "725px", lg: "980px", xl: "100%" }}
                gridArea={{ xl: "2 / 1 / 3 / 3", "2xl": "auto" }}
              >
                <CardHeader p="12px 5px" mb="12px">
                  <Flex direction="column">
                    <Text fontSize="lg" color="#fff" fontWeight="bold" mb="6px">
                      Stock Analysts Summary
                    </Text>
                  </Flex>
                </CardHeader>
                <CardBody w="100%">
                  <Flex w="100%" direction={{ sm: "column", md: "row" }}>
                    <Flex
                      direction="column"
                      align="center"
                      me={{ md: "16px", lg: "50px" }}
                      mb={{ sm: "12px", md: "0px" }}
                    >
                      <CircularProgress
                        size={200}
                        value={analyst.percentage}
                        thickness={6}
                        color={analyst.colour}
                        variant="vision"
                      >
                        <CircularProgressLabel>
                          <Flex
                            direction="column"
                            justify="center"
                            align="center"
                          >
                            <FulgerIcon w="14px" h="22px" mb="8px" />
                            <Text
                              color="#fff"
                              fontSize="36px"
                              fontWeight="bold"
                              mb="6px"
                            >
                              {analyst.percentage}
                            </Text>
                            <Text color="gray.400" fontSize="sm">
                              {analyst.reco}
                            </Text>
                          </Flex>
                        </CircularProgressLabel>
                      </CircularProgress>
                      <Flex direction="column" mt="18px" align="center">
                        <Text color="gray.500" fontSize="sm">
                          Total Number of analysts
                        </Text>
                        <Text
                          color="#fff"
                          fontSize="lg"
                          fontWeight="bold"
                          mb="2px"
                        >
                          {analyst.total}
                        </Text>
                      </Flex>
                    </Flex>
                    <Grid
                      templateColumns={{ sm: "1fr", md: "repeat(2, 1fr)" }}
                      gap="24px"
                      w="100%"
                      alignSelf="flex-start"
                    >
                      {product.stockDetailsReusableData.stockAnalyst.map(
                        (obj) => {
                          if (
                            obj.colorCode != "" &&
                            Number(obj.numberOfAnalystsLatest) != analyst.min
                          ) {
                            return (
                              <Flex
                                align="center"
                                p="18px"
                                justify="space-between"
                                bg="linear-gradient(126.97deg, rgba(6, 11, 38, 0.74) 28.26%, rgba(26, 31, 55, 0.5) 91.2%)"
                                borderRadius="20px"
                              >
                                <Flex direction="column" me="auto">
                                  <Text fontSize="xs" color="gray.400" mb="3px">
                                    {obj.ratingName}
                                  </Text>
                                  <Text
                                    color="#fff"
                                    fontSize="22px"
                                    fontWeight="bold"
                                  >
                                    {(
                                      (obj.numberOfAnalystsLatest /
                                        analyst.total) *
                                      100
                                    ).toFixed(2)}{" "}
                                    %
                                  </Text>
                                </Flex>
                                <IconBox
                                  bg={obj.colorCode}
                                  w="56px"
                                  h="56px"
                                  direction="column"
                                >
                                  {callIcon(obj.ratingName)}
                                  <FulgerWhiteIcon
                                    w="8px"
                                    h="11px"
                                    transform="rotate(90deg)"
                                  />
                                </IconBox>
                              </Flex>
                            );
                          }
                        }
                      )}
                    </Grid>
                  </Flex>
                </CardBody>
              </Card>
            )}
            {/* Profile Information */}
            <Card
              p="16px"
              maxH={{ md: "410px" }}
              maxW={{ sm: "325px", md: "725px", lg: "980px" }}
              gridArea={{ xl: "1 / 2 / 2 / 3", "2xl": "auto" }}
            >
              <CardHeader p="12px 5px" mb="12px">
                <Text fontSize="lg" color="#fff" fontWeight="bold">
                  Company Profile
                </Text>
              </CardHeader>
              <CardBody
                px="5px"
                direction="row"
                justifyContent="space-around"
                alignItems="flex-start"
                paddingBottom="10px"
              >
                <Flex direction="column">
                  <Text
                    fontSize="sm"
                    color={"gray.400"}
                    fontWeight="400"
                    mb="15px"
                  >
                    {product.companyName}
                  </Text>

                  <Separator mb="30px" />
                  <Flex align="center" mb="18px">
                    <Text fontSize="sm" color={"gray.400"} me="10px">
                      Exchange Code Bse:{" "}
                    </Text>
                    <Text fontSize="sm" color="#fff" fontWeight="400">
                      {product.companyProfile.exchangeCodeBse}
                    </Text>
                  </Flex>
                  <Flex align="center" mb="18px">
                    <Text fontSize="sm" color={"gray.400"} me="10px">
                      Exchange Code Nse:{" "}
                    </Text>
                    <Text fontSize="sm" color="#fff" fontWeight="400">
                      {product.companyProfile.exchangeCodeNse}
                    </Text>
                  </Flex>
                  <Flex align="center" mb="18px">
                    <Text fontSize="sm" color={"gray.400"} me="10px">
                      Industry ID:{" "}
                    </Text>
                    <Text fontSize="sm" color="#fff" fontWeight="400">
                      {product.companyProfile.isInId}
                    </Text>
                  </Flex>
                  <Flex align="center" mb="18px">
                    <Text fontSize="sm" color={"gray.400"} me="10px">
                      Industry:{" "}
                    </Text>
                    <Text fontSize="sm" color="#fff" fontWeight="400">
                      {product.companyProfile.mgIndustry}
                    </Text>
                  </Flex>
                </Flex>
                <Button
                  bg="green"
                  w="56px"
                  h="56px"
                  direction="column"
                  onClick={async () => {
                    setShowAlert(true);
                    const res = await createProduct(product);
                    const res1 = await updateStat();
                    setTimeout(() => {
                      setShowAlert(false);
                    }, "5000");
                  }}
                >
                  <Icon as={BiBookmarkPlus} color="#fff" w="30px" h="30px" />
                </Button>
              </CardBody>
            </Card>
          </Grid>
          <Grid
            templateColumns={{ sm: "1fr", lg: "1.7fr 1.3fr" }}
            maxW={{ sm: "100%", md: "100%" }}
            gap="24px"
            mb="24px"
          >
            {/* Sales Overview */}
            <Card p="28px 0px 0px 0px">
              <CardHeader mb="20px" ps="22px">
                <Flex direction="column" alignSelf="flex-start">
                  <Text fontSize="lg" color="#fff" fontWeight="bold" mb="6px">
                    {product.companyName}
                  </Text>
                  <Text fontSize="md" fontWeight="medium" color="gray.400">
                    {product.companyProfile.exchangeCodeNse + " NSE - "}
                    {product.currentPrice.NSE}
                    {"     "}
                    {Number(product.stockDetailsReusableData.percentChange) >
                    0 ? (
                      <Icon color="white" as={FaArrowUp} me="6px" />
                    ) : (
                      <Icon color="white" as={FaArrowDown} me="6px" />
                    )}
                    <Text
                      as="span"
                      color={
                        Number(product.stockDetailsReusableData.percentChange) >
                        0
                          ? "green.400"
                          : "red.400"
                      }
                      fontWeight="bold"
                    >
                      {product.stockDetailsReusableData.percentChange}
                      {"%"}
                    </Text>{" "}
                  </Text>
                </Flex>
              </CardHeader>
              <Box w="100%" minH={{ sm: "300px" }}>
                <Flex
                  direction={{ sm: "row", lg: "row" }}
                  w={{ sm: "100%", md: "50%", lg: "auto" }}
                  marginLeft="50px"
                >
                  <Button
                    borderRadius="12px"
                    bg={period == "1m" ? "brand.200" : "transparent"}
                    _hover={{ opacity: "0.8" }}
                    _active={{ opacity: "0.9" }}
                    onClick={() => fetchHistory("1m")}
                    me={{ base: "none", lg: "20px", sm: "20px" }}
                  >
                    <Text fontSize="xs" color="#fff" fontWeight="bold">
                      1 Month
                    </Text>
                  </Button>
                  <Button
                    borderRadius="12px"
                    bg={period == "6m" ? "brand.200" : "transparent"}
                    _hover={{
                      bg: "brand.200",
                    }}
                    _active={{
                      bg: "brand.200",
                    }}
                    me={{ base: "none", lg: "20px", sm: "20px" }}
                    onClick={() => fetchHistory("6m")}
                  >
                    <Text fontSize="xs" color="#fff" fontWeight="bold">
                      6 Month
                    </Text>
                  </Button>
                  <Button
                    borderRadius="12px"
                    bg={period == "1yr" ? "brand.200" : "transparent"}
                    _hover={{
                      bg: "brand.200",
                    }}
                    _active={{
                      bg: "brand.200",
                    }}
                    onClick={() => fetchHistory("1yr")}
                  >
                    <Text fontSize="xs" color="#fff" fontWeight="bold">
                      1 year
                    </Text>
                  </Button>
                  <Button
                    borderRadius="12px"
                    bg={period == "3yr" ? "brand.200" : "transparent"}
                    _hover={{ bg: "brand.200" }}
                    _active={{ opacity: "0.9" }}
                    me={{ base: "none", lg: "20px", sm: "20px" }}
                    onClick={() => fetchHistory("3yr")}
                  >
                    <Text fontSize="xs" color="#fff" fontWeight="bold">
                      3 Year
                    </Text>
                  </Button>
                  <Button
                    borderRadius="12px"
                    bg={period == "5yr" ? "brand.200" : "transparent"}
                    _hover={{ bg: "brand.200" }}
                    _active={{ opacity: "0.9" }}
                    me={{ base: "none", lg: "20px", sm: "20px" }}
                    onClick={() => fetchHistory("5yr")}
                  >
                    <Text fontSize="xs" color="#fff" fontWeight="bold">
                      5 Year
                    </Text>
                  </Button>
                  <Button
                    borderRadius="12px"
                    bg={period == "max" ? "brand.200" : "transparent"}
                    _hover={{ bg: "brand.200" }}
                    _active={{ opacity: "0.9" }}
                    me={{ base: "none", lg: "20px", sm: "20px" }}
                    onClick={() => fetchHistory("max")}
                  >
                    <Text fontSize="xs" color="#fff" fontWeight="bold">
                      Max
                    </Text>
                  </Button>
                </Flex>
                <LineChart
                  period={period}
                  lineChartData={[{ name: "Price on NSE", data: axes.y }]}
                  lineChartOptions={lineChartOptionsDashboard}
                />
              </Box>
            </Card>
            {/* Active Users */}
            <Card p="16px">
              <CardBody>
                <Flex direction="column" w="100%">
                  <Box
                    bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                    borderRadius="20px"
                    display={{ sm: "flex", md: "block" }}
                    justify={{ sm: "center", md: "flex-start" }}
                    align={{ sm: "center", md: "flex-start" }}
                    minH={{ sm: "180px", md: "220px" }}
                    p={{ sm: "0px", md: "22px" }}
                  >
                    {product.companyName != "" && (
                      <FunnelChart
                        options={barChartOptionsDashboard}
                        series={[
                          {
                            name: "Price",
                            data: [
                              Number(product.stockDetailsReusableData.high),
                              Number(product.stockDetailsReusableData.low),
                              Number(product.stockDetailsReusableData.close),
                              Number(product.stockDetailsReusableData.yhigh),
                              Number(product.stockDetailsReusableData.ylow),
                            ],
                          },
                        ]}
                      />
                    )}
                  </Box>
                  <Flex
                    direction="column"
                    mt="24px"
                    mb="36px"
                    alignSelf="flex-start"
                  >
                    <Text fontSize="lg" color="#fff" fontWeight="bold" mb="6px">
                      Fiscal Year :
                    </Text>
                    <Text fontSize="md" fontWeight="medium" color="gray.400">
                      {product.stockDetailsReusableData.FiscalYear}
                    </Text>
                  </Flex>
                  <SimpleGrid gap={{ sm: "12px" }} columns={4}>
                    <Flex direction="column">
                      <Flex alignItems="center">
                        <Text
                          fontSize={{ sm: "md", lg: "lg" }}
                          color="#fff"
                          fontWeight="bold"
                          mb="6px"
                          my="6px"
                        >
                          {
                            product.stockDetailsReusableData
                              .price5DayPercentChange
                          }
                        </Text>
                      </Flex>
                      <Text fontSize="sm" color="gray.400">
                        5 Day Percent Change
                      </Text>
                    </Flex>
                    <Flex direction="column">
                      <Flex alignItems="center">
                        <Text
                          fontSize={{ sm: "md", lg: "lg" }}
                          color="#fff"
                          fontWeight="bold"
                          mb="6px"
                          my="6px"
                        >
                          {
                            product.stockDetailsReusableData
                              .priceYTDPricePercentChange
                          }
                        </Text>
                      </Flex>
                      <Text fontSize="sm" color="gray.400">
                        YTD Price Percent Change
                      </Text>
                    </Flex>
                    <Flex direction="column">
                      <Flex alignItems="center">
                        <Text
                          fontSize={{ sm: "md", lg: "lg" }}
                          color="#fff"
                          fontWeight="bold"
                          mb="6px"
                          my="6px"
                        >
                          {
                            product.stockDetailsReusableData
                              .sectorPriceToEarningsValueRatio
                          }
                        </Text>
                      </Flex>
                      <Text fontSize="sm" color="gray.400">
                        Sector Price To Earnings Value Ratio
                      </Text>
                    </Flex>
                    <Flex direction="column">
                      <Flex alignItems="center">
                        <Text
                          fontSize={{ sm: "md", lg: "lg" }}
                          color="#fff"
                          fontWeight="bold"
                          mb="6px"
                          my="6px"
                        >
                          {
                            product.stockDetailsReusableData
                              .totalDebtPerTotalEquityMostRecentQuarter
                          }
                        </Text>
                      </Flex>
                      <Text fontSize="sm" color="gray.400">
                        Total Debt Per Total Equity Most Recent Quarter
                      </Text>
                    </Flex>
                  </SimpleGrid>
                </Flex>
              </CardBody>
            </Card>
          </Grid>
          <Grid templateColumns={{ sm: "1fr", xl: "1fr 3fr" }} gap="20px">
            <DarkMode>
              {/* Orders Overview */}
              <Card>
                <CardHeader mb="32px">
                  <Flex direction="column" w="100%">
                    <Flex
                      direction={{ sm: "column", lg: "column" }}
                      justify={{ sm: "center", lg: "space-between" }}
                      align={{ sm: "center" }}
                      w="100%"
                      my={{ md: "12px" }}
                    >
                      <Text
                        color="#fff"
                        fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
                        fontWeight="bold"
                      >
                        Peer Company List
                      </Text>
                    </Flex>
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Flex direction="column" w="100%">
                    {product.stockDetailsReusableData.peerCompanyList.map(
                      (row) => {
                        return (
                          <>
                            <TransactionRow
                              name={row.companyName}
                              logo={row.imageUrl}
                              net={row.netChange}
                              price={row.price}
                              setCurrentSearch={setCurrentSearch}
                              setStartSearch={setStartSearch}
                            />

                            <br />
                            <br />
                          </>
                        );
                      }
                    )}
                  </Flex>
                </CardBody>
              </Card>
            </DarkMode>
            {/* Projects */}
            <Card gridArea={{ xl: "1 /2 /2/ 5" }} p="16px">
              <CardHeader p="12px 5px" mb="12px">
                <Flex direction="column">
                  <Text fontSize="lg" color="#fff" fontWeight="bold">
                    Recent news
                  </Text>
                </Flex>
              </CardHeader>
              <CardBody px="5px">
                <Grid
                  templateColumns={{
                    sm: "1fr",
                    md: "1fr 1fr",
                    xl: "repeat(3, 1fr)",
                  }}
                  templateRows={{
                    sm: "1fr 1fr 1fr auto",
                    md: "1fr 1fr",
                    xl: "1fr",
                  }}
                  gap="24px"
                >
                  {product.recentNews.map((obj, idx) => {
                    return (
                      <Flex direction="column">
                        <Box mb="5px" position="relative" borderRadius="5px">
                          <Image src={obj.listimage} borderRadius="5px" />
                        </Box>
                        <Flex direction="column">
                          <Text fontSize="10px" color={"gray.400"} mb="10px">
                            {obj.date}
                          </Text>
                          <Text
                            fontSize="xl"
                            color="#fff"
                            fontWeight="bold"
                            mb="10px"
                          >
                            Time to read : {obj.timeToRead} Minute
                          </Text>
                          <Text
                            fontSize="sm"
                            color={"gray.400"}
                            fontWeight="400"
                            mb="20px"
                          >
                            {obj.headline}
                          </Text>
                          <Flex justifyContent="space-between" mt="auto">
                            <Button
                              variant="outlineWhite"
                              minW="110px"
                              h="36px"
                              fontSize="10px"
                              px="1.5rem"
                              onClick={() => window.open(obj.url, "_blank")}
                            >
                              Read More
                            </Button>
                          </Flex>
                        </Flex>
                      </Flex>
                    );
                  })}
                  <Flex direction="column">
                    <Box mb="25px" position="relative" borderRadius="5px">
                      <Image src={""} borderRadius="5px" />
                    </Box>
                    <Flex direction="column">
                      <Button
                        alignSelf="flex-start"
                        variant="no-hover"
                        bg="transparent"
                        p="0px"
                      >
                        <Text
                          fontSize="xs"
                          color="#fff"
                          me="5px"
                          cursor="pointer"
                          transition="all .3s ease"
                          _hover={{ me: "6px" }}
                        >
                          More News
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
                </Grid>
              </CardBody>
            </Card>
          </Grid>
        </>
      )}
    </>
  );

  //IPO
  const { searchIpo } = useProductStore();
  const [ipo, setIpo] = useState({
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
  });
  const searchIpofun = async () => {
    setLoading(true);
    const res = await searchIpo();
    //console.log(res.data);
    setIpo(JSON.parse(res.data));
    setLoading(false);
  };

  const IPO = <>{ipo.listed.length > 2 != "" && <Tables ipo={ipo} />}</>;

  //MF
  const { searchMutual } = useProductStore();
  const [mf, setMf] = useState({
    Debt: {
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
          fund_name:
            "SBI Fixed Maturity Plan Series 1 3668 Days Regular Growth",
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
          fund_name:
            "Aditya Birla Sun Life Medium Term Plan Regular Plan Growth",
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
    },
    Equity: {
      "Focused Fund": [
        {
          fund_name: "HDFC Focused 30 Fund Growth",
          latest_nav: 206.79,
          percentage_change: 0.37,
          asset_size: 11945.94,
          "1_month_return": 6.27,
          "3_month_return": 13.86,
          "6_month_return": 19.64,
          "1_year_return": 43.94,
          "3_year_return": 28.95,
          "5_year_return": 21.43,
          star_rating: 4,
        },
      ],
      "Equity - Other": [
        {
          fund_name: "Invesco India PSU Equity Fund Growth",
          latest_nav: 67.1,
          percentage_change: -0.09,
          asset_size: 1137.59,
          "1_month_return": 8.18,
          "3_month_return": 29.73,
          "6_month_return": 43.11,
          "1_year_return": 94.95,
          "3_year_return": 40.72,
          "5_year_return": 30.52,
          star_rating: 1,
        },
      ],
      Contra: [
        {
          fund_name: "SBI Contra Fund Regular Growth",
          latest_nav: 371.86,
          percentage_change: -0.01,
          asset_size: 30520.42,
          "1_month_return": 4.95,
          "3_month_return": 13.26,
          "6_month_return": 19.74,
          "1_year_return": 47.81,
          "3_year_return": 29.76,
          "5_year_return": 28.31,
          star_rating: 2,
        },
      ],
      "Flexi Cap": [
        {
          fund_name: "JM Flexicap Fund Growth",
          latest_nav: 101.39,
          percentage_change: 0.54,
          asset_size: 2472.06,
          "1_month_return": 6.63,
          "3_month_return": 24.16,
          "6_month_return": 34.7,
          "1_year_return": 63.91,
          "3_year_return": 31.38,
          "5_year_return": 26.32,
          star_rating: 4,
        },
      ],
      "Equity - Consumption": [
        {
          fund_name: "SBI Consumption Opportunities Fund Regular Plan Growth",
          latest_nav: 304.17,
          percentage_change: 0.03,
          asset_size: 2182.94,
          "1_month_return": 6.31,
          "3_month_return": 16.55,
          "6_month_return": 16.56,
          "1_year_return": 34.34,
          "3_year_return": 25.7,
          "5_year_return": 22.65,
          star_rating: null,
        },
      ],
      "Sector - FMCG": [
        {
          fund_name: "ICICI Prudential FMCG Fund Growth",
          latest_nav: 482.7,
          percentage_change: -0.97,
          asset_size: 1509.7,
          "1_month_return": 3.84,
          "3_month_return": 9.47,
          "6_month_return": 4.78,
          "1_year_return": 10.89,
          "3_year_return": 17.9,
          "5_year_return": 15.25,
          star_rating: 5,
        },
      ],
      "Sector - Financial Services": [
        {
          fund_name:
            "Sundaram Financial Services Opportunities Fund Institutional Growth",
          latest_nav: 111.77,
          percentage_change: 0.04,
          asset_size: 1268.85,
          "1_month_return": 6.95,
          "3_month_return": 14.39,
          "6_month_return": 11.25,
          "1_year_return": 38.77,
          "3_year_return": 22.71,
          "5_year_return": 19.14,
          star_rating: 5,
        },
      ],
      "Mid-Cap": [
        {
          fund_name: "Motilal Oswal Midcap Regular Growth",
          latest_nav: 93.34,
          percentage_change: 0.74,
          asset_size: 10378.16,
          "1_month_return": 10.57,
          "3_month_return": 24.14,
          "6_month_return": 30.1,
          "1_year_return": 61.22,
          "3_year_return": 38.59,
          "5_year_return": 30.39,
          star_rating: 4,
        },
      ],
      "Equity - Infrastructure": [
        {
          fund_name: "ICICI Prudential Infrastructure Fund Growth",
          latest_nav: 187.78,
          percentage_change: 0.49,
          asset_size: 5034.14,
          "1_month_return": 4.67,
          "3_month_return": 18.88,
          "6_month_return": 30.36,
          "1_year_return": 67.43,
          "3_year_return": 39.66,
          "5_year_return": 29.19,
          star_rating: 3,
        },
      ],
      "Multi-Cap": [
        {
          fund_name: "Nippon India Multi Cap Fund - Growth",
          latest_nav: 285.63,
          percentage_change: 0.03,
          asset_size: 31963.02,
          "1_month_return": 6.28,
          "3_month_return": 20.59,
          "6_month_return": 25.36,
          "1_year_return": 53.17,
          "3_year_return": 32.81,
          "5_year_return": 24.08,
          star_rating: 2,
        },
      ],
      "Large-Cap": [
        {
          fund_name: "Nippon India Large Cap Fund - Growth",
          latest_nav: 84.95,
          percentage_change: 0.31,
          asset_size: 26925.1,
          "1_month_return": 4.92,
          "3_month_return": 12.28,
          "6_month_return": 17.05,
          "1_year_return": 40.13,
          "3_year_return": 24.58,
          "5_year_return": 19.44,
          star_rating: 4,
        },
      ],
      "Small-Cap": [
        {
          fund_name: "Quant Small Cap Fund Growth",
          latest_nav: 268.36,
          percentage_change: 0.75,
          asset_size: 21242.79,
          "1_month_return": 6.65,
          "3_month_return": 20.18,
          "6_month_return": 27.2,
          "1_year_return": 66.31,
          "3_year_return": 34.33,
          "5_year_return": 43.01,
          star_rating: 4,
        },
      ],
      "Dividend Yield": [
        {
          fund_name: "ICICI Prudential Dividend Yield Equity Fund Growth",
          latest_nav: 48.32,
          percentage_change: 0.04,
          asset_size: 3930.84,
          "1_month_return": 3.21,
          "3_month_return": 10.98,
          "6_month_return": 20.33,
          "1_year_return": 53.28,
          "3_year_return": 29.21,
          "5_year_return": 24.19,
          star_rating: 3,
        },
      ],
      "ELSS (Tax Savings)": [
        {
          fund_name:
            "Sundaram Long Term Micro Cap Tax Advantage Fund Series IV Regular Growth",
          latest_nav: 28.43,
          percentage_change: 0.18,
          asset_size: 38.56,
          "1_month_return": 7.99,
          "3_month_return": 21.73,
          "6_month_return": 13.85,
          "1_year_return": 42.6,
          "3_year_return": 30.87,
          "5_year_return": 27.23,
          star_rating: null,
        },
      ],
      "Large & Mid-Cap": [
        {
          fund_name: "Quant Large and Mid Cap Fund Growth",
          latest_nav: 127.33,
          percentage_change: 0.8,
          asset_size: 2954.58,
          "1_month_return": 5.35,
          "3_month_return": 18.75,
          "6_month_return": 30.85,
          "1_year_return": 67.35,
          "3_year_return": 29.91,
          "5_year_return": 28.79,
          star_rating: 5,
        },
      ],
      "Sector - Healthcare": [
        {
          fund_name: "SBI Healthcare Opportunities Fund Regular Growth",
          latest_nav: 356.55,
          percentage_change: -0.67,
          asset_size: 2612.73,
          "1_month_return": 3.27,
          "3_month_return": 8.45,
          "6_month_return": 19.76,
          "1_year_return": 44.2,
          "3_year_return": 17.05,
          "5_year_return": 27.22,
          star_rating: null,
        },
      ],
      Value: [
        {
          fund_name: "JM Value Fund Growth",
          latest_nav: 101.1,
          percentage_change: 0.88,
          asset_size: 733.51,
          "1_month_return": 6.35,
          "3_month_return": 23.24,
          "6_month_return": 30.35,
          "1_year_return": 64.26,
          "3_year_return": 30.94,
          "5_year_return": 25.73,
          star_rating: 5,
        },
      ],
      "Equity - ESG": [
        {
          fund_name: "Quant ESG Equity Fund Regular Growth",
          latest_nav: 33.87,
          percentage_change: 0.16,
          asset_size: 266.07,
          "1_month_return": 6.62,
          "3_month_return": 13.26,
          "6_month_return": 22.07,
          "1_year_return": 51.02,
          "3_year_return": 29.61,
          "5_year_return": null,
          star_rating: 5,
        },
      ],
      "Sector - Technology": [
        {
          fund_name: "Franklin India Technology Fund Growth",
          latest_nav: 478.51,
          percentage_change: 0.39,
          asset_size: 1435.18,
          "1_month_return": 2.64,
          "3_month_return": 8.37,
          "6_month_return": 12.32,
          "1_year_return": 48.93,
          "3_year_return": 16.9,
          "5_year_return": 24.29,
          star_rating: null,
        },
      ],
    },
    "Global Fund of Funds": {
      "Global - Other": [
        {
          fund_name: "Mirae Asset NYSE FANG+ ETF Fund of Fund Regular Growth",
          latest_nav: 20.03,
          percentage_change: 0.12,
          asset_size: 1541.06,
          "1_month_return": -0.22,
          "3_month_return": 14.85,
          "6_month_return": 33.18,
          "1_year_return": 47.12,
          "3_year_return": 22.15,
          "5_year_return": null,
          star_rating: null,
        },
      ],
    },
    Hybrid: {
      "Fund of Funds": [
        {
          fund_name: "ICICI Prudential BHARAT 22 FOF Growth",
          latest_nav: 32.47,
          percentage_change: 0.14,
          asset_size: 1362.13,
          "1_month_return": 3.1,
          "3_month_return": 15.98,
          "6_month_return": 23.74,
          "1_year_return": 67.14,
          "3_year_return": 41.15,
          "5_year_return": 23.6,
          star_rating: null,
        },
      ],
      "Multi Asset Allocation": [
        {
          fund_name: "Quant Multi Asset Fund Growth",
          latest_nav: 133.39,
          percentage_change: 0.44,
          asset_size: 2400.49,
          "1_month_return": 2.49,
          "3_month_return": 12.41,
          "6_month_return": 25.02,
          "1_year_return": 48.94,
          "3_year_return": 24.78,
          "5_year_return": 28.99,
          star_rating: 3,
        },
      ],
      "Equity Savings": [
        {
          fund_name: "HSBC Equity Savings Growth",
          latest_nav: 31.46,
          percentage_change: 0.33,
          asset_size: 292.11,
          "1_month_return": 3.93,
          "3_month_return": 12.55,
          "6_month_return": 14.21,
          "1_year_return": 24.75,
          "3_year_return": 13.36,
          "5_year_return": 12.4,
          star_rating: 4,
        },
      ],
      "Balanced Allocation": [
        {
          fund_name: "360 ONE Balanced Hybrid Fund Regular Growth",
          latest_nav: 11.95,
          percentage_change: -0.07,
          asset_size: 706.85,
          "1_month_return": 4.18,
          "3_month_return": 11.31,
          "6_month_return": 13.21,
          "1_year_return": null,
          "3_year_return": null,
          "5_year_return": null,
          star_rating: null,
        },
      ],
      "Dynamic Asset Allocation": [
        {
          fund_name: "HDFC Balanced Advantage Fund Growth",
          latest_nav: 488.71,
          percentage_change: 0.06,
          asset_size: 86471.32,
          "1_month_return": 3.31,
          "3_month_return": 10.94,
          "6_month_return": 15.11,
          "1_year_return": 40.84,
          "3_year_return": 24.12,
          "5_year_return": 19.24,
          star_rating: 5,
        },
      ],
      "Conservative Allocation": [
        {
          fund_name: "Bank of India Conservative Hybrid Fund Eco Growth",
          latest_nav: 33.93,
          percentage_change: 0.07,
          asset_size: 72.17,
          "1_month_return": 1.64,
          "3_month_return": 3.78,
          "6_month_return": 6.51,
          "1_year_return": 14.36,
          "3_year_return": 14.61,
          "5_year_return": 11.12,
          star_rating: 4,
        },
      ],
      "Aggressive Allocation": [
        {
          fund_name: "ICICI Prudential Equity & Debt Fund Growth",
          latest_nav: 354,
          percentage_change: 0.01,
          asset_size: 35122.02,
          "1_month_return": 2.58,
          "3_month_return": 8.07,
          "6_month_return": 15.49,
          "1_year_return": 38.27,
          "3_year_return": 24.14,
          "5_year_return": 21.35,
          star_rating: 5,
        },
      ],
    },
    "Index Funds": {
      "Index Funds": [
        {
          fund_name:
            "Aditya Birla Sun Life Nifty Midcap 150 Index Fund Regular Growth",
          latest_nav: 22.92,
          percentage_change: 0.85,
          asset_size: 196.37,
          "1_month_return": 6.94,
          "3_month_return": 20.73,
          "6_month_return": 22.49,
          "1_year_return": 56.1,
          "3_year_return": 27.05,
          "5_year_return": null,
          star_rating: null,
        },
      ],
    },
    Other: {
      Liquid: [
        {
          fund_name:
            "Quant Liquid Fund Unclaimed Redemption Plan Growth Option",
          latest_nav: 12.31,
          percentage_change: 0.02,
          asset_size: 2625.41,
          "1_month_return": 0.63,
          "3_month_return": 1.81,
          "6_month_return": 3.7,
          "1_year_return": 7.35,
          "3_year_return": 5.89,
          "5_year_return": null,
          star_rating: null,
        },
      ],
      Overnight: [
        {
          fund_name: "Bank of India Overnight Fund Regular Growth",
          latest_nav: 1228.69,
          percentage_change: 0.02,
          asset_size: 70.61,
          "1_month_return": 0.56,
          "3_month_return": 1.68,
          "6_month_return": 3.38,
          "1_year_return": 6.87,
          "3_year_return": 5.48,
          "5_year_return": null,
          star_rating: null,
        },
      ],
      "Arbitrage Fund": [
        {
          fund_name: "Invesco India Arbitrage Fund Growth",
          latest_nav: 29.78,
          percentage_change: 0.01,
          asset_size: 20894.12,
          "1_month_return": 0.71,
          "3_month_return": 2,
          "6_month_return": 4.12,
          "1_year_return": 7.99,
          "3_year_return": 6.01,
          "5_year_return": 5.42,
          star_rating: 2,
        },
      ],
      "Sector - Precious Metals": [
        {
          fund_name: "Axis Gold Growth",
          latest_nav: 21.65,
          percentage_change: 0.5,
          asset_size: 495.31,
          "1_month_return": -1.79,
          "3_month_return": 9.58,
          "6_month_return": 15.63,
          "1_year_return": 20.16,
          "3_year_return": 13.99,
          "5_year_return": 15.91,
          star_rating: null,
        },
      ],
    },
    "Solutions Oriented": {
      Children: [
        {
          fund_name:
            "SBI Magnum Children's Benefit Fund- Investment Plan Regular Growth",
          latest_nav: 37.75,
          percentage_change: 1.37,
          asset_size: 2023.42,
          "1_month_return": 7.26,
          "3_month_return": 19.6,
          "6_month_return": 21.6,
          "1_year_return": 40.51,
          "3_year_return": 31.35,
          "5_year_return": null,
          star_rating: null,
        },
      ],
      Retirement: [
        {
          fund_name:
            "ICICI Prudential Retirement Fund Pure Equity Plan Regular Growth",
          latest_nav: 29.66,
          percentage_change: 0.44,
          asset_size: 795.85,
          "1_month_return": 4.16,
          "3_month_return": 16.17,
          "6_month_return": 24.49,
          "1_year_return": 55.09,
          "3_year_return": 30.56,
          "5_year_return": 23.19,
          star_rating: null,
        },
      ],
    },
  });
  const [currMf, setCurrMf] = useState("debt");
  const [tabmf, setTabmf] = useState();
  const searchMf = async () => {
    setLoading(true);
    const res = await searchMutual();
    //console.log(res.data);
    setMf(JSON.parse(res.data));
    setTabmf(JSON.parse(res.data).Debt);
    setLoading(false);
  };
  useEffect(() => {
    switch (currMf) {
      case "debt":
        setTabmf(mf.Debt);
        break;
      case "equity":
        setTabmf(mf.Equity);
        break;
      case "global":
        setTabmf(mf["Global Fund of Funds"]);
        break;
      case "hybrid":
        setTabmf(mf.Hybrid);
        break;
      case "index":
        setTabmf(mf["Index Funds"]);
        break;
      case "other":
        setTabmf(mf.Other);
        break;
      case "solution":
        setTabmf(mf["Solutions Oriented"]);
        break;

      default:
        break;
    }
  }, [currMf]);

  const mutual = (
    <>
      {mf.Equity["Large-Cap"].length > 2 != "" && (
        <>
          <Box>
            <Flex direction={{ sm: "row", lg: "row" }} marginLeft="50px">
              <Button
                borderRadius="12px"
                bg={currMf == "debt" ? "brand.200" : "transparent"}
                _hover={{ bg: "brand.200" }}
                _active={{ opacity: "0.9" }}
                onClick={() => {
                  setCurrMf("debt");
                }}
                me={{ base: "none", lg: "20px", sm: "20px" }}
              >
                <Text fontSize="xs" color="#fff" fontWeight="bold">
                  Debt
                </Text>
              </Button>
              <Button
                borderRadius="12px"
                bg={currMf == "equity" ? "brand.200" : "transparent"}
                _hover={{
                  bg: "brand.200",
                }}
                _active={{
                  bg: "brand.200",
                }}
                me={{ base: "none", lg: "20px", sm: "20px" }}
                onClick={() => {
                  setCurrMf("equity");
                }}
              >
                <Text fontSize="xs" color="#fff" fontWeight="bold">
                  Equity
                </Text>
              </Button>
              <Button
                borderRadius="12px"
                bg={currMf == "global" ? "brand.200" : "transparent"}
                _hover={{
                  bg: "brand.200",
                }}
                _active={{
                  bg: "brand.200",
                }}
                onClick={() => {
                  setCurrMf("global");
                }}
              >
                <Text fontSize="xs" color="#fff" fontWeight="bold">
                  Global fund of funds
                </Text>
              </Button>
              <Button
                borderRadius="12px"
                bg={currMf == "hybrid" ? "brand.200" : "transparent"}
                _hover={{ bg: "brand.200" }}
                _active={{ opacity: "0.9" }}
                me={{ base: "none", lg: "20px", sm: "20px" }}
                onClick={() => {
                  setCurrMf("hybrid");
                }}
              >
                <Text fontSize="xs" color="#fff" fontWeight="bold">
                  Hybrid
                </Text>
              </Button>
              <Button
                borderRadius="12px"
                bg={currMf == "index" ? "brand.200" : "transparent"}
                _hover={{ bg: "brand.200" }}
                _active={{ opacity: "0.9" }}
                me={{ base: "none", lg: "20px", sm: "20px" }}
                onClick={() => {
                  setCurrMf("index");
                }}
              >
                <Text fontSize="xs" color="#fff" fontWeight="bold">
                  Index funds
                </Text>
              </Button>
              <Button
                borderRadius="12px"
                bg={currMf == "other" ? "brand.200" : "transparent"}
                _hover={{ bg: "brand.200" }}
                _active={{ opacity: "0.9" }}
                me={{ base: "none", lg: "20px", sm: "20px" }}
                onClick={() => {
                  setCurrMf("other");
                }}
              >
                <Text fontSize="xs" color="#fff" fontWeight="bold">
                  Other
                </Text>
              </Button>
              <Button
                borderRadius="12px"
                bg={currMf == "solution" ? "brand.200" : "transparent"}
                _hover={{ bg: "brand.200" }}
                _active={{ opacity: "0.9" }}
                me={{ base: "none", lg: "20px", sm: "20px" }}
                onClick={() => {
                  setCurrMf("solution");
                }}
              >
                <Text fontSize="xs" color="#fff" fontWeight="bold">
                  Solution oriented
                </Text>
              </Button>
            </Flex>
          </Box>

          <MutualTable mutual={tabmf} />
        </>
      )}
    </>
  );
  return (
    <Flex direction="column" mt={{ sm: "25px", md: "0px" }}>
      <Box
        mb={{ sm: "24px", md: "50px", xl: "20px" }}
        borderRadius="15px"
        px="0px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        align="center"
      >
        {/* Header */}

        <Card
          direction={{ sm: "column", md: "row" }}
          mx="auto"
          maxH="330px"
          w={{ sm: "90%", xl: "100%" }}
          justifyContent={{ sm: "center", md: "space-between" }}
          align="center"
          p="24px"
          borderRadius="20px"
          mt="100px"
        >
          <Flex align="center" direction={{ sm: "column", md: "row" }}>
            <Flex
              align="center"
              mb={{ sm: "10px", md: "0px" }}
              direction={{ sm: "column", md: "row" }}
              w={{ sm: "100%" }}
              textAlign={{ sm: "center", md: "start" }}
            >
              <Avatar
                me={{ md: "22px" }}
                src={avatar11}
                w="80px"
                h="80px"
                borderRadius="15px"
              ></Avatar>
              <Flex direction="column" maxWidth="100%" my={{ sm: "14px" }}>
                {curSelection == "Stock" && (
                  <InputGroup
                    cursor="pointer"
                    bg={inputBg}
                    borderRadius="15px"
                    borderColor="rgba(226, 232, 240, 0.3)"
                    w={{
                      sm: "128px",
                      md: "200px",
                    }}
                    me={{ sm: "auto", md: "20px" }}
                  >
                    <InputLeftElement
                      children={
                        <IconButton
                          bg="inherit"
                          borderRadius="inherit"
                          onClick={searchProduct}
                          _hover="none"
                          _active={{
                            bg: "inherit",
                            transform: "none",
                            borderColor: "transparent",
                          }}
                          _focus={{
                            boxShadow: "none",
                          }}
                          icon={
                            <SearchIcon color={searchIcon} w="15px" h="15px" />
                          }
                        ></IconButton>
                      }
                    />
                    <Input
                      fontSize="xs"
                      py="11px"
                      color={mainText}
                      placeholder="Type here..."
                      borderRadius="inherit"
                      value={currentSearch}
                      onChange={(e) => setCurrentSearch(e.target.value)}
                    />
                  </InputGroup>
                )}
              </Flex>
            </Flex>
            <Flex
              direction={{ sm: "column", lg: "row" }}
              w={{ sm: "100%", md: "50%", lg: "auto" }}
            >
              <Button
                borderRadius="12px"
                bg={curSelection == "Stock" ? "brand.200" : "transparent"}
                onClick={() => {
                  setCurSelection("Stock");
                }}
                _hover={{
                  bg: "brand.200",
                }}
                _active={{
                  bg: "brand.200",
                }}
                me={{ base: "none", lg: "20px" }}
                leftIcon={<Icon color="white" as={FaCube} me="6px" />}
              >
                <Text fontSize="xs" color="#fff" fontWeight="bold">
                  STOCK
                </Text>
              </Button>
              <Button
                borderRadius="12px"
                bg={curSelection == "Ipo" ? "brand.200" : "transparent"}
                onClick={() => {
                  setCurSelection("Ipo");
                  searchIpofun();
                }}
                _hover={{
                  bg: "brand.200",
                }}
                _active={{
                  bg: "brand.200",
                }}
                me={{ base: "none", lg: "20px" }}
                leftIcon={<Icon color="white" as={FaFlag} me="6px" />}
              >
                <Text fontSize="xs" color="#fff" fontWeight="bold">
                  IPO
                </Text>
              </Button>
              <Button
                borderRadius="12px"
                bg={curSelection == "Mutual" ? "brand.200" : "transparent"}
                onClick={() => {
                  setCurSelection("Mutual");
                  searchMf();
                }}
                _hover={{
                  bg: "brand.200",
                }}
                _active={{
                  bg: "brand.200",
                }}
                leftIcon={<Icon color="white" as={FaFunnelDollar} me="6px" />}
              >
                <Text fontSize="xs" color="#fff" fontWeight="bold">
                  MUTUAL FUND
                </Text>
              </Button>
            </Flex>
          </Flex>
        </Card>
      </Box>
      {showAlert && (
        <Alert
          status="success"
          variant="solid"
          title="Data uploaded to the server"
          color="white"
          alignContent="center"
          justifyContent="center"
          width="60%"
        >
          Data uploaded to the server
        </Alert>
      )}
      <br />
      {loading && (
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
      )}
      {curSelection == "Stock" && !loading && stock}
      {curSelection == "Ipo" && !loading && IPO}
      {curSelection == "Mutual" && !loading && mutual}
    </Flex>
  );
}

export default Profile;
