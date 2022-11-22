import { createContext, useState } from "react";


// As the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// Actual component 
// .Provider is the component that will wrap around any other component that needs access to the values stored inside the context
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}