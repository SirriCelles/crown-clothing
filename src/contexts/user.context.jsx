import { createContext, useState, useEffect} from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener, signOutUser } from "../utils/firebase/firebase.utils";



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

  signOutUser();

  // I only want ot run this fumction once WHEN the component mounts
  useEffect(() => {
    const unsubscribe =  onAuthStateChangedListener(async (user) => {
      console.log(user);
      if(user) {
        await createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{ children }</UserContext.Provider>
}