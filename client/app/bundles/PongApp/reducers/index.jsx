// This file is our manifest of all reducers for the app.
// See also /client/app/bundles/PongApp/store/PongAppStore.jsx
// A real world app will likely have many reducers and it helps to organize them in one file.
import PongAppReducer from './PongAppReducer';
import { $$initialState as $$PongAppState } from './PongAppReducer';

export default {
  $$PongAppStore: PongAppReducer,
};

export const initialStates = {
  $$PongAppState,
};
