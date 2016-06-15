import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store/PongAppStore';
import PongApp from '../containers/PongApp';
import { Router, browserHistory } from 'react-router';
import routes from '../routes/routes';

// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
export default (props) => {
  const store = createStore(props);

  const reactComponent = (
    <Provider store={store}>
      <Router history={browserHistory} children={routes} {...props} />
    </Provider>
  );
  return reactComponent;
};