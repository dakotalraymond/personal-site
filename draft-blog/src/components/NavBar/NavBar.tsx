import React from "react";

import Styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={Styles.container}>
      <Link to="/">Home</Link>
      <Link to="/editor">Editor</Link>
    </div>
  );
};

export default NavBar;
