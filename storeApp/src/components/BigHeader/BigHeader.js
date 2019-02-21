import React from "react";
import Styles from "./BigHeader.module.css";

const BigHeader = ({ text }) => {
  return <h1 className={Styles.headerbig}>{text}</h1>;
};

export default BigHeader;
