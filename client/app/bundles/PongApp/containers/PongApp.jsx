import React, { PropTypes } from 'react';
import PongAppWidget from '../components/PongAppWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as PongAppActionCreators from '../actions/PongAppActionCreators';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return { $$PongAppStore: state.$$PongAppStore };
}

// Simple example of a React "smart" component
const PongApp = (props) => {
  const { dispatch, $$PongAppStore } = props;
  const actions = bindActionCreators(PongAppActionCreators, dispatch);
  const { addResult, updateResults } = actions;
  const game = $$PongAppStore.get('game');
  // updateResults(game);
  const results = $$PongAppStore.get('results');
  const players = $$PongAppStore.get('players');

  // This uses the ES2015 spread operator to pass properties as it is more DRY
  // This is equivalent to:
  // <PongAppWidget $$PongAppStore={$$PongAppStore} actions={actions} />
  return (
    <PongAppWidget {...{ addResult, updateResults, game, results, players }} />
  );
};

PongApp.propTypes = {
  dispatch: PropTypes.func.isRequired,

  // This corresponds to the value used in function select above.
  // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
  // This allows us to immediately know we don't call $$PongAppStore['someProperty'], but
  // instead use the Immutable.js `get` API for Immutable.Map
  $$PongAppStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

// Don't forget to actually use connect!
// Note that we don't export PongApp, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(select)(PongApp);
