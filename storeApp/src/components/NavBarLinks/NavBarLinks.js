import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./NavBarLinks.module.css";

const navStyle = {
  color: "yellow"
};

const NavBarLinks = () => (
  <ul className={Styles.nav}>
    <li>
      <NavLink exact to="/" activeStyle={navStyle}>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to="/catalog" activeStyle={navStyle}>
        Catalog
      </NavLink>
    </li>
    <li>
      <NavLink to="/about" activeStyle={navStyle}>
        About
      </NavLink>
    </li>
  </ul>
);

export default NavBarLinks;
