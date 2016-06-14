// See https://www.npmjs.com/package/mirror-creator
// Allows us to set up constants in a slightly more concise syntax. See:
// client/app/bundles/PongApp/actions/PongAppActionCreators.jsx
import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
  'ADD_RESULT',
  'UPDATE_RESULTS',
]);

// actionTypes = {ADD_RESULT: "ADD_RESULT"}
// Notice how we don't have to duplicate ADD_RESULT twice
// thanks to mirror-creator.
export default actionTypes;
