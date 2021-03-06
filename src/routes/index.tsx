import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

import Login from "../pages/authentication/Login";
import Orders from "../pages/order/Orders";
import OrderDetail from "../pages/order/OrderDetail";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/orders/:orderId" component={OrderDetail} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
