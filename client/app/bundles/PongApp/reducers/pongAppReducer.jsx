import Immutable from 'immutable';
import $ from 'jQuery';
import actionTypes from '../constants/PongAppConstants';
import { hydrateGame } from 'lib/hydrate';

export const $$initialState = Immutable.fromJS({
  results: [], // this is the default state that would be used if one were not passed into the store
});

export default function PongAppReducer($$state = $$initialState, action) {
  const { type, result, game } = action;
  switch (type) {
    case actionTypes.ADD_RESULT:
      return $$state.updateIn(['results'], arr => arr.push(result))

    case actionTypes.UPDATE_RESULTS:
      return hydrateGame(game);
    default:
      return $$state;
  }
}
