import React from "react";
import PropTypes from "prop-types";
import Product from "../Product/Product";
import Styles from "./Products.module.css";

const Products = ({ products }) => {
  return (
    <div className={Styles.products}>
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;
