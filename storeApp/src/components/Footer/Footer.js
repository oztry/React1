import React from "react";
import Styles from "./Footer.module.css";
import WithContainer from "../WithContainer/WithContainer";
import FooterText from "../FooterText/FooterText";

const FooterTextWithContainer = WithContainer(FooterText);

const Footer = () => (
  <footer className={Styles.footer}>
    <FooterTextWithContainer />
  </footer>
);

export default Footer;
