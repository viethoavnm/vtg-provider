import React from 'react';
import * as Modules from '../modules';
import PrivateRoute from './PrivateRoute';
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route exact path="/login" />
    <PrivateRoute exact path="/" />
    <Route exact path="/notAuthorized" component={Modules.NotAuthorized} />
    <Route component={Modules.NotFound} />
  </Switch>)
export default Routes;