// combine place for all the reducers in redux
// generate store objects

import { compose, applyMiddleware, configureStore } from "redux";
import logger from 'redux-logger';
import { rootReducer } from "./root-reducer";

// root reducer

// what creates a store
// all a store needs is a root reducer to be created


// runs before an action hits the reducer
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = configureStore(rootReducer, undefined, composedEnhancers);   