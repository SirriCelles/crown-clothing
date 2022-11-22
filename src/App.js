import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";

const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index={true} element={<Home />} />
      <Route path="auth" element={<Authentication />}/>
      <Route path="shop" element={ <Shop />}>
          {/* This is a nexted Routed */}
        </Route>
      </Route>
      
      {/* Adding Full Routes */}
      {/* <Route path="/shop" element={<Shop />} /> */}
    </Routes>
  
  );
};

export default App;
