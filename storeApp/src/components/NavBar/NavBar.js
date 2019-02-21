import React from "react";
import Styles from "./NavBar.module.css";
import WithContainer from "../WithContainer/WithContainer";
import NavBarLinks from "../NavBarLinks/NavBarLinks";

const NavBarLinksWithContainer = WithContainer(NavBarLinks);

const NavBar = () => (
  <nav className={Styles.navbar}>
    <NavBarLinksWithContainer />
  </nav>
);

export default NavBar;
