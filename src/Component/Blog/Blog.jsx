import "./Blog.css";

import React from "react";

const Blog = () => {
  return (
    <>
      <div id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p style={{ color: "white", fontSize: "30px" }}>
          Read all case studies about our products!
        </p>
      </div>
      <div id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src="https://th.bing.com/th/id/R.99e90e080bfa41bd32326fe72ee4431f?rik=nriwrte8iFHVxg&pid=ImgRaw&r=0" />
          </div>
          <div className="blog-details">
            <h4>Fashion</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ut
              autem quo unde nihil velit nobis modi commodi, perspiciatis
              cupiditate quia natus facilis. Ex nihil harum suscipit! Deleniti
              suscipit quis quos, aspernatur eos quae quaerat aliquam doloribus
              distinctio dolorem rerum accusamus. Asperiores vel eveniet
              perspiciatis, ipsam aperiam ad recusandae impedit!
            </p>
            <a
              href="https://hayor4real.github.io/Ecommerce-website/"
              target="blank"
            >
              {" "}
              Simply the best
            </a>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img
              src="https://i.pinimg.com/originals/3b/68/3d/3b683db1918bdce2f72925c81720d3dc.jpg"
              target="blank"
            />
          </div>
          <div className="blog-details">
            <h4>Fashion Trend</h4>
            <p>
              Kickstarter man braid godard coloring book. Raclette waistcoat
              selfies yr wolf chartreuse hexagon irony, godard
            </p>
            <a href="#"> Simply the best</a>
          </div>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src="https://th.bing.com/th/id/R.5807eae4b31b9f6caf3e3423950b861b?rik=gF004hJK%2fK2zjg&pid=ImgRaw&r=0" />
          </div>
          <div className="blog-details">
            <h4>Fashion Trend</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              reiciendis quis corrupti rem perspiciatis, ullam vitae odio.
              Asperiores provident, odio impedit commodi aspernatur atque esse
              quam iste dolor totam quibusdam cumque deleniti nesciunt fugiat
              facilis modi laboriosam exercitationem velit iusto excepturi
              accusantium. Perspiciatis inventore autem nemo vero asperiores
              facilis repellendus.
            </p>
            <a href="#"> Simply the best</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
