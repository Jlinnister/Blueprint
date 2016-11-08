import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Index from './index/index';

class AppRouter extends React.Component {

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Index} />
      </Router>
    );
  }
}

AppRouter.contextTypes = {
  store: React.PropTypes.object.isRequired,
};

export default AppRouter;
