import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhoWe from "./pages/WhoWe";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/who-we" component={WhoWe} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
