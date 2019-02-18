import React from "react";
import Styles from "./Footer.module.css";
import AppStyles from "../../App.module.css";

const Footer = () => (
  <footer className={Styles.footer}>
    <div className={AppStyles.container}>
      <p>Shop © 2020</p>
      <p>Designed by Andrzej</p>
    </div>
  </footer>
);

export default Footer;
