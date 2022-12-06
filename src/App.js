import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe =  onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);


  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index={true} element={<Home />} />
        <Route path="auth" element={<Authentication />}/>
        <Route path="shop/*" element={ <Shop />}>
            {/* This is a nexted Routed */}
        </Route>
        <Route path="checkout" element={<Checkout />} />
      </Route>
      
      {/* Adding Full Routes */}
      {/* <Route path="/shop" element={<Shop />} /> */}
    </Routes>
  
  );
};

export default App;
