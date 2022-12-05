import { createContext, useEffect, useReducer} from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";
import createAction from "../utils/reducer/reducer.utils";

// useReducer hook is same as useState


// As the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER"
}

// reducers RE JUST methods that alwasy return a new object
const userReducer =  (state, action) => {
  // action only take {type} and optional {payload}
  const {type, payload} = action;

  switch(type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      }

    default:
      throw new Error(`unhandled type ${type} in userReducer`);
  }
}

const INITIAL_STATE = {
  currentUser: null,
};

// Actual component 
// .Provider is the component that will wrap around any other component that needs access to the values stored inside the context
export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);

  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;

  const setCurrentUser = (user) => {
    dispatch(
      createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
    );
  }

  const value = { currentUser, setCurrentUser };

  signOutUser();

  // I only want ot run this fumction once WHEN the component mounts
  useEffect(() => {
    const unsubscribe =  onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}

/*

*/ 