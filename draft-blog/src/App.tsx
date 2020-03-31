import React, { useContext, useState } from "react";
import "./styles/reset.scss";
import "./styles/fonts.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home/Home";
import ComingSoon from "./screens/ComingSoon/ComingSoon";
import { ThemeContext } from "./components/ThemeProvider/ThemeProvider";

const App = () => {
  const [theme, setTheme] = useState({ background: "white", color: "black" });
  const value = { theme, setTheme };
  return (
    <ThemeContext.Provider value={value}>
      <Router>
        <div
          style={{
            background: theme.background,
            color: theme.color
          }}
        >
          <Switch>
            <Route path="/coming-soon" component={ComingSoon} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
