import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { Cartcontext } from "../../context/Context";
import "./Shop-page.css";

const Shoppage = () => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("default"); // default, name, lowToHigh, highToLow
  const [categoryFilter, setCategoryFilter] = useState("all"); // all, electronics, menClothing, womenClothing, jewelry
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products").then(
      (response) => response.json()
    );
    setData(response);
  };

  const getCategoryKey = (category) => {
    switch (category) {
      case "all":
        return "";
      case "electronics":
        return "electronics";
      case "menClothing":
        return "men's clothing";
      case "womenClothing":
        return "women's clothing";
      case "jewelry":
        return "jewelery";
      default:
        return "";
    }
  };

  // Filter and sort your product data based on state variables
  const filteredAndSortedData = data
    .filter((product) =>
      getCategoryKey(categoryFilter) === ""
        ? true
        : product.category === getCategoryKey(categoryFilter)
    )
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortType) {
        case "name":
          return a.title.localeCompare(b.title);
        case "lowToHigh":
          return a.price - b.price;
        case "highToLow":
          return b.price - a.price;
        default:
          return 0;
      }
    });

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;

  return (
    <>
      <div className="PageContainer">
        {/* Add sorting and filtering UI components */}
        <div>
          <label>
            Sort By:
            <select onChange={(e) => setSortType(e.target.value)}>
              <option value="default">Default</option>
              <option value="name">Name (A-Z)</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </label>
          <label>
            Filter By Category:
            <select onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="menClothing">Men's Clothing</option>
              <option value="womenClothing">Women's Clothing</option>
              <option value="jewelry">Jewelry</option>
            </select>
          </label>
          <label>
            Search:
            <input
              type="text"
              placeholder="Search for products"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
        </div>
        <div className="ProductContainer">
          {filteredAndSortedData.map((item, index) => {
            item.quantity = 1;
            return (
              <div className="CardProduct" key={index}>
                <div className="ImgContainerProduct">
                  <img src={item.image} alt="" className="ImgProduct" />
                </div>
                <h4 className="TitleProduct">{item.title}</h4>
                <h3
                  className="price"
                  style={{ color: "green", textAlign: "center" }}
                >
                  €{item.price}
                </h3>
                <Link to={`/products/${item.id}`}>
                  <button className="details">Buy Now</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Shoppage;
