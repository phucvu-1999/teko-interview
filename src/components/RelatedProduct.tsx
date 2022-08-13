import React from "react";
import { Button } from "antd";
import "./RelatedProduct.scss";
import { Product } from "../models";

interface Props {
  product: Product;
}

const RelatedProduct = (props: Props) => {
  const { product } = props;
  return (
    <div className="related-product-container">
      <div className="related-product-img">
        <img src={product.image} alt={product.id} />
      </div>
      <div className="related-product-details">
        <div className="related-product-name">{product.name}</div>
        <div className="related-product-stocks">
          Con {product.availableQuantity} san pham
        </div>
        <div className="related-product-prices">
          <div className="related-product-normal-price">
            {product.price.toLocaleString("de-DE")}d
          </div>
          <div className="related-product-discount">
            <div className="related-product-discount-price">
              {product.discountPrice.toLocaleString("de-DE")}d
            </div>
            <div className="related-product-discount-percent">
              -{product.discountPercent}%
            </div>
          </div>
        </div>
      </div>

      <button>Them vao gio hang</button>
    </div>
  );
};

export default RelatedProduct;
