import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Component/NavBar/Navbar";
import Homepage from "./Component/HomePage/HomePage.jsx";
import Shoppage from "./Component/Shoppage/Shop-page";
import Cart from "./Component/CartPage/Cart";
import SingleProduct from "./Component/ProductPage/SingleProduct";
import BillingInfo from "./Component/Checkout/BillingInfo";
import DiscountProductPage from "./Component/DiscountProducts/DiscountProductPage";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div style={{ textAlign: "center", color: "red" }}>
                <Homepage />
              </div>
            }
          />

          <Route path="/shoppage" element={<Shoppage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<SingleProduct />}></Route>
          <Route path="/billing" element={<BillingInfo />} />
          <Route path="/product" element={<DiscountProductPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
