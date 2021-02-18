import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WelcomePage from "./components/welcomepage/WelcomePage";
import Meeting from "./components/Main/Main";

export default function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={WelcomePage} />
        <Route path="/meeting" component={Meeting} />
      </Router>
    </div>
  );
}
