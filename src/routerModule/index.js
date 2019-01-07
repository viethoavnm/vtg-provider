import React from 'react';
import { HashRouter } from "react-router-dom";
import Routes from './Routes';

const Router = () =>
  (<HashRouter getUserConfirmation={getUserConfirmation}>
    <React.Fragment>
      <Routes />
    </React.Fragment>
  </HashRouter>);

const getUserConfirmation = (dialogKey, callback) => {
  const dialogTrigger = window[Symbol.for(dialogKey)];
  if (dialogTrigger) {
    return dialogTrigger(callback);
  }
  callback(true);
};

export default Router;