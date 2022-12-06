// All reducers reacts to every single action

import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

// reducers RE JUST methods that alwasy return a new object
export  const userReducer =  (state = INITIAL_STATE, action) => {
  // action only take {type} and optional {payload}
  const {type, payload} = action;

  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }

    default:
      // throw new Error(`unhandled type ${type} in userReducer`);
      return state;
  }
}

