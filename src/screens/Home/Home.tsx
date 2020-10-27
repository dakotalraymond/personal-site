import React, { useContext } from "react";

import Styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../components/ThemeProvider/ThemeProvider";
import { blueRed, colors } from "../../constants";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={Styles.container}>
      <div className={Styles.contentContainer}>
        <div
          className={Styles.leftSide}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            let newTheme = theme;
            while (theme.background === newTheme.background) {
              newTheme =
                colors[Math.floor(Math.random() * Math.floor(colors.length))];
            }
            setTheme(newTheme);
          }}
        >
          <div>Dakota</div>
          <div>Raymond</div>
        </div>
        <div
          className={Styles.verticalDivider}
          style={{ background: theme.color }}
        />
        <div className={Styles.rightSide}>
          <div>
            <a
              href="https://www.askalmanac.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full stack engineer @AskAlmanac
            </a>
          </div>
          <div>
            <a
              href="https://www.sdl.usu.edu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prev Engineer @SpaceDynamicsLab
            </a>
          </div>
          <div>
            <Link to="/coming-soon">Check out my passion projects</Link>
          </div>
          <div>
            <Link to="/blog-edit">Read my blog</Link>
          </div>
          <div>
            <Link to="/coming-soon">Contact Me</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
