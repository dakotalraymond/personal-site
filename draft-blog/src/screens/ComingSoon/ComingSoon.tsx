import React from "react";

import Styles from "./ComingSoon.module.scss";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className={Styles.container}>
      <div>
        <div className={Styles.headline}>Coming Soon</div>
        <div>
          <Link to="/">Back to the action</Link>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
