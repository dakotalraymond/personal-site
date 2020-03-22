import React from "react";

import Styles from "./NavBar.module.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <div className={Styles.nameHeader}>Dakota Raymond</div>
      <div className={Styles.container}>
        <Link to="/">Home</Link>
        <Link to="/editor">Editor</Link>
        <Link to="/prose-editor">Prose</Link>
      </div>
    </div>
  );
};

export default NavBar;
