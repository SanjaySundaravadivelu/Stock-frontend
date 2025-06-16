// Chakra imports
import {
  ChakraProvider,
  Portal,
  useDisclosure,
  Box,
  Flex,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import Configurator from "../components/Configurator/Configurator";
import Footer from "../components/Footer/Footer.jsx";
// Layout ../components
import AdminNavbar from "../components/Navbars/AdminNavbar.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../routes.jsx";
// Custom Chakra theme
import theme from "../theme/themeAdmin.jsx";
import FixedPlugin from "../components/FixedPlugin/FixedPlugin";
// Custom components
import MainPanel from "../components/Layout/MainPanel";
import PanelContainer from "../components/Layout/PanelContainer";
import PanelContent from "../components/Layout/PanelContent";
import AuthNavbar from "../components/Navbars/AuthNavbar.jsx";
import { useProductStore } from "../store/product.jsx";
import { useHistory } from "react-router-dom";
import Pricing from "../views/Pages/Pricing.jsx";
import * as jwt_decode from "jwt-decode";

export default function Dashboard(props) {
  const { ...rest } = props;
  // states and functions
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const [fixed, setFixed] = useState(false);
  // ref for main panel div
  const mainPanel = React.createRef();
  // functions for changing the states from components
  const getRoute = () => {
    return window.location.pathname !== "/auth/full-screen-maps";
  };
  const wrapper = React.createRef();
  const { isAuth, setIsAuth, verifyToken } = useProductStore();
  const history = useHistory();
  const [user, setUser] = useState();
  const [isValid, setisvalid] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      verify(token);
    } else {
      history.push("/");
    }
  }, []);
  const verify = async (token) => {
    const res = await verifyToken(token);

    if (res.success) {
      setIsAuth(true);
      try {
        if (token) {
          const user1 = jwt_decode.jwtDecode(token);
          setUser(user1.user);
          if (user1.user && user1.user.createdAt) {
            const today = new Date();
            const date = new Date(user1.user.createdAt);
            if ((date - today) / (1000 * 60 * 60 * 24) <= 0) {
              setisvalid(true);
            } else {
              setisvalid(false);
            }
          }
        }
      } catch (error) {
        console.error("Invalid token", error);
      }
    } else {
      history.push("/");
    }
  };

  const getActiveRoute = (routes) => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  // This changes navbar state(fixed or not)
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (
          window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
        ) {
          if (routes[i].secondaryNavbar) {
            return routes[i].secondaryNavbar;
          }
        }
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      }
      if (prop.category === "account") {
        return getRoutes(prop.views);
      }
      if (prop.layout === "/auth") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  document.documentElement.dir = "ltr";

  return (
    <>
      {isValid ? (
        <ChakraProvider theme={theme} resetCss={false}>
          <Sidebar
            routes={routes}
            logoText={"Stock Pulse"}
            display="none"
            sidebarVariant={sidebarVariant}
            {...rest}
          />
          <MainPanel
            ref={mainPanel}
            w={{
              base: "100%",
              xl: "calc(100% - 275px)",
            }}
          >
            <Portal>
              <AdminNavbar
                onOpen={onOpen}
                logoText={"VISION UI FREE"}
                brandText={getActiveRoute(routes)}
                secondary={getActiveNavbar(routes)}
                fixed={fixed}
                {...rest}
              />
            </Portal>
            {getRoute() ? (
              <PanelContent>
                <PanelContainer>
                  <Switch>
                    {getRoutes(routes)}
                    <Redirect from="/auth" to="/auth/dashboard" />
                  </Switch>
                </PanelContainer>
              </PanelContent>
            ) : null}

            <Configurator
              secondary={getActiveNavbar(routes)}
              isOpen={isOpen}
              onClose={onClose}
              isChecked={fixed}
              onSwitch={(value) => {
                setFixed(value);
              }}
              onOpaque={() => setSidebarVariant("opaque")}
              onTransparent={() => setSidebarVariant("transparent")}
            />
          </MainPanel>
        </ChakraProvider>
      ) : (
        <ChakraProvider theme={theme} resetCss={false}>
          <MainPanel
            ref={mainPanel}
            w={{
              base: "100%",
              xl: "calc(100% - 275px)",
            }}
          >
            <Pricing />
          </MainPanel>
        </ChakraProvider>
      )}
    </>
  );
}
