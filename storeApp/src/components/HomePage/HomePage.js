import React from "react";
import ProductService from "../../services/products.service";
import Products from "../Products/Products";
import AppStyles from "../../App.module.css";

const HomePage = () => {
  const desktopProducts = ProductService.getFeaturedProductsByCategory(
    "desktop"
  );
  const tabletProducts = ProductService.getFeaturedProductsByCategory("tablet");
  return (
    <div className={AppStyles.container}>
      <h1 className={AppStyles.headerbig}>Welcome to our store</h1>

      <h2 className={AppStyles.headersmall}>Desktops</h2>

      <Products products={desktopProducts} />

      <h2 className={AppStyles.headersmall}>Tablets</h2>

      <Products products={tabletProducts} />
    </div>
  );
};

export default HomePage;
