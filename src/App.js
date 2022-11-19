import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SingIn from "./routes/signin/sign-in.component";

const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index={true} element={<Home />} />
      <Route path="shop" element={ <Shop />}>
          {/* This is a nexted Routed */}
        </Route>
      </Route>
      <Route path="signin" element={<SingIn />}/>

      {/* Adding Full Routes */}
      {/* <Route path="/shop" element={<Shop />} /> */}
    </Routes>
  
  );
};

export default App;
