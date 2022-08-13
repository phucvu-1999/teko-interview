import React from "react";
import RelatedProduct from "./components/RelatedProduct";
import "./App.scss";
import { Product } from "./models";
import { generateId } from "./helper";

const App = () => {
  const mockDatas: Product[] = [
    {
      id: generateId(),
      availableQuantity: 5,
      discountPercent: 10,
      image: "./imgs/apple-iphone-11-64gb-6.1.png",
      name: "Iphone 11 sadasdasfagfajkbgsjkgksdhgjkshdgjkshgjkhsdjghsjkghskjghsjghsjghsljhshdlghsdjkghsjdhgsjdhgsjhgsghshgsh",
      price: 10000000,
      discountPrice: 9000000000,
    },
    {
      id: generateId(),
      availableQuantity: 10,
      discountPercent: 20,
      image: "./imgs/apple-iphone-11-64gb-6.1.png",
      name: "Iphone 12 asjfbakjfkajshfhlaflkadglksgjbb afsiahfjlabfjkabgjabgjabgjb",
      price: 200000000,
      discountPrice: 8000000000,
    },
  ];

  return (
    <div className="app">
      <div className="main-product">
        <div className="main-product-img">
          <img src="./imgs/apple-iphone-11-64gb-6.1.png" alt="Hello" />
        </div>

        <div className="main-product-details">
          <div className="main-product-price">
            <div className="main-product-normal-price">258.000d</div>
            <div className="main-product-discount">
              <div className="main-product-discount-price">120.000d</div>
              <div className="main-product-discount-percent">-10%</div>
            </div>
          </div>

          <div className="main-product-name">
            Laptop ASUS VivoBook 14 A412FA-EK734T (14\" FHD/i5-10210U/8GB/512GB
            SSD/Intel UHD)
          </div>
          <div className="main-product-seller">
            By <a href="#">XiaoMi</a>
          </div>
        </div>
      </div>
      <div className="related-products">
        <p>San pham lien quan</p>
        <div className="related-products-container">
          {mockDatas.map((item) => (
            <RelatedProduct key={item.id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
