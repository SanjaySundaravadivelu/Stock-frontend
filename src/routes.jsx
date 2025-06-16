// import
import Dashboard from "./views/Dashboard/Dashboard.jsx";
import Profile from "./views/Dashboard/Profile.jsx";
import Pricing from "./views/Pages/Pricing.jsx";
import React from "react";
import { HomeIcon, StatsIcon } from "./components/Icons/Icons";

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: <HomeIcon color="inherit" />,
    component: Dashboard,
    layout: "/auth",
  },
  {
    path: "/profile",
    name: "Explore",
    rtlName: "لوحة القيادة",
    icon: <StatsIcon color="inherit" />,
    component: Profile,
    layout: "/auth",
  },
];
export default dashRoutes;
