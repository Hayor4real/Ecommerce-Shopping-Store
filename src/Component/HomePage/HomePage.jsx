import React from "react";
import { Link } from "react-router-dom";

import "./HomePage.css";

const Homepage = () => {
  return (
    <>
      <div id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super Value deals</h2>
        <h1>On all products</h1>

        <Link to="/shoppage">
          <button>Shop Now</button>
        </Link>
      </div>
    </>
  );
};

export default Homepage;
