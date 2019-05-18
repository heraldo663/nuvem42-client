import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/auth/Login/index";
import Register from "./pages/auth/Register/index";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
