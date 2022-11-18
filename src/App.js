import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";

const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () => {
  
  return (
    <Routes>
      {/* Adding Full Routes */}
      <Route path="/shop" element={<Shop />} />
      <Route path="/home" element={<Home />}>
        <Route path="shop" element={ <Shop />}>
          {/* This is a nexted Routed */}
        </Route>
      </Route>
    </Routes>
  
  );
};

export default App;
