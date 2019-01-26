import React from 'react';
import * as Modules from '../modules';
import PrivateRoute from './PrivateRoute';
import { saveAttemptUrl } from 'utils/url';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

export default withRouter(class Routes extends React.PureComponent {
  constructor(props) {
    super(props);
    saveAttemptUrl(props.location.pathname);
  }

  render = () => (
    <Switch>
      <Route exact path="/login" component={Modules.Login} />
      <Route exact path="/register" component={Modules.Register} />
      <Redirect exact from="/" to="/hotels" />
      <PrivateRoute path="/hotels" exact component={Modules.HotelManagement} />
      <PrivateRoute path="/hotel" exact component={Modules.HotelDetail} />
      <PrivateRoute path="/hotel/:id" exact component={Modules.HotelDetail} />
      <Route exact path="/notAuthorized" component={Modules.NotAuthorized} />
      <Route component={Modules.NotFound} />
    </Switch>)
})