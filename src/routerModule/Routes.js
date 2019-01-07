import React from 'react';
import * as Modules from '../modules';
import PrivateRoute from './PrivateRoute';
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={Modules.Login} />
    <Route exact path="/register" component={Modules.Register} />
    <PrivateRoute exact path="/" component={Modules.InputHotel} />
    <Route exact path="/notAuthorized" component={Modules.NotAuthorized} />
    <Route component={Modules.NotFound} />
  </Switch>)
export default Routes;