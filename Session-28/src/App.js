import "./App.css";

import Nav from "./components/nav/Nav";
import Products from "./components/products/Products";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Support from "./components/support/Support";
import ProductDetails from "./components/productdetails/ProductDetails";
import PageNotfound from "./components/pagenotfound/PageNotfound";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/products" element={<Products />} />

        <Route path="/support" element={<Support />} />

        <Route path="/productdetails" element={<ProductDetails />} />

        <Route
          path="/dummy"
          element={
            <div>
              <h2>Dummy Code</h2>
            </div>
          }
        />

        <Route path="*" element={<PageNotfound />} />
      </Routes>
    </div>
  );
}

export default App;
