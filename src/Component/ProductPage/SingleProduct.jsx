import React, { useContext, useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { Cartcontext } from "../../../src/context/Context";

import "./SingleProduct.css";
const colors = {
  orange: "#FE5800",
  grey: "#939393",
};

const SingleProduct = () => {
  const { id } = useParams();
  const [item, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(` https://fakeapidata.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;

  const checkIfAddedToCart = () => {
    const tempState = Globalstate.state.filter(
      (cartItem) => cartItem.id === item.id
    );
    setIsAddedToCart(tempState.length > 0);
  };

  useEffect(() => {
    checkIfAddedToCart();
  }, [Globalstate.state, item.id]);

  const Loading = () => {
    return (
      <>
        <div style={{ color: "red" }}>loading</div>
      </>
    );
  };

  const ShowProduct = () => {
    const stars = Array(5).fill(0);

    const handleAddToCart = () => {
      dispatch({ type: "ADD", payload: item });
      checkIfAddedToCart();
    };

    return (
      <>
        <div id="prodetails" className="section-p1">
          {(item.quantity = 1)}
          <div className="single-pro-image">
            <img src={item.image} alt={item.title} width="100%" id="MainImg" />
          </div>
          <div className="single-pro-details">
            <h1 className="textCategory">{item.category}</h1>
            <p>{item.description}</p>
            <h4 className="textTitle">{item.title}</h4>
            {item.rating && (
              <p className="productStar">
                Rating {item.rating.rate}
                {stars.map((_, index) => (
                  <FaStar
                    key={index}
                    size={24}
                    style={{
                      marginRight: 10,
                      cursor: "pointer",
                      color: colors.orange,
                    }}
                  />
                ))}
              </p>
            )}
            <h2 className="price">€{item.price}</h2>

            <select>
              <option>Select Size</option>
              <option>XL</option>
              <option>XXL</option>
              <option>Small</option>
              <option>Large</option>
            </select>

            <button
              className="btnadd"
              onClick={handleAddToCart}
              disabled={isAddedToCart}
            >
              {isAddedToCart ? "Item in Cart Already" : "Add to Cart"}
            </button>

            <Link to="/cart">
              <button className="cart">Go to Cart</button>
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default SingleProduct;
