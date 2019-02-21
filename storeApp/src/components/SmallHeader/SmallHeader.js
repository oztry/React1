import React from "react";
import Styles from "./SmallHeader.module.css";

const SmallHeader = ({ text }) => {
  return <h2 className={Styles.headersmall}>{text}</h2>;
};

export default SmallHeader;
