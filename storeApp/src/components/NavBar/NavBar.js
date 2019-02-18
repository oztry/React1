import React from "react";
import Styles from "./NavBar.module.css";
import AppStyles from "../../App.module.css";

const Menu = () => (
  <nav className={Styles.navbar}>
    <div className={AppStyles.container}>
      <ul className={Styles.nav}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="catalog">Catalog</a>
        </li>
        <li>
          <a href="about">About</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Menu;
