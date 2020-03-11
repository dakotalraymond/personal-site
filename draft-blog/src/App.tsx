import React from "react";
import "./styles/prose.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Styles from "./App.module.scss";
import NavBar from "./components/NavBar/NavBar";
import Editor from "./screens/Editor/Editor";
import Home from "./screens/Home/Home";
import ProseEditor from "./screens/ProseEditor/ProseEditor";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/editor" component={Editor} />
        <Route path="/prose-editor" component={ProseEditor} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
