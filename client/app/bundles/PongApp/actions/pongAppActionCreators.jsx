import actionTypes from '../constants/PongAppConstants';

export function addResult(result) {
  return {
    type: actionTypes.ADD_RESULT,
    result,
  };
}

export function updateResults(game) {
  return {
    type: actionTypes.UPDATE_RESULTS,
    game,
  };
}
