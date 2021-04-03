
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import Login from '../pages/authentication/Login';
import Orders from '../pages/order/Orders';
import OrderDetail from '../pages/order/OrderDetail';

const AppRoutes: React.FC = () => (
    <Router>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/orders/:orderid" component={OrderDetail} />
        </Switch>
    </Router>
);

export default AppRoutes;