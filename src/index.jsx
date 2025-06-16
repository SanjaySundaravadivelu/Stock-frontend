import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "./layouts/Auth.jsx";
import AdminLayout from "./layouts/Admin.jsx";
import "./index.css";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin`} component={AdminLayout} />
      <Redirect from={`/`} to="/admin" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
