import React from 'react';
import { Route } from 'react-router';

import PongApp from '../containers/PongApp';
import AddResult from '../components/AddResult';

export default (
  <Route path="/" component={PongApp}>
    <Route path="/new" component={AddResult} />
  </Route>
);
