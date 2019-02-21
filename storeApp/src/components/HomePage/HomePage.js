import React from "react";
import ProductService from "../../services/products.service";
import Products from "../Products/Products";
import BigHeader from "../BigHeader/BigHeader";
import SmallHeader from "../SmallHeader/SmallHeader";

const HomePage = () => {
  const desktopProducts = ProductService.getFeaturedProductsByCategory(
    "desktop"
  );
  const tabletProducts = ProductService.getFeaturedProductsByCategory("tablet");
  return (
    <>
      <BigHeader text="Welcome to our store" />

      <SmallHeader text="Desktops" />

      <Products products={desktopProducts} />
      <SmallHeader text="Tablets" />

      <Products products={tabletProducts} />
    </>
  );
};

export default HomePage;
