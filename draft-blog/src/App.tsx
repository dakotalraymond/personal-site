import React from "react";
import "./styles/prose.scss";
import "./styles/reset.scss";
import "./styles/fonts.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Editor from "./screens/Editor/Editor";
import Home from "./screens/Home/Home";
import ProseEditor from "./screens/ProseEditor/ProseEditor";
import ComingSoon from "./screens/ComingSoon/ComingSoon";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/coming-soon" component={ComingSoon} />
        <Route path="/editor" component={Editor} />
        <Route path="/prose-editor" component={ProseEditor} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
