import React from "react";
import PropTypes from "prop-types";
import Styles from "./Product.module.css";

const Product = ({ name, image, amount }) => {
  return (
    <div className={Styles.product}>
      <img src={image} alt={name} />
      <p className={Styles.price}>${amount}</p>
      <h3>{name}</h3>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired
};

export default Product;
