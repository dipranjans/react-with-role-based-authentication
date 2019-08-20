import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Router, Route } from "react-router-dom";
import NavBar from "./NavBar";

import Home from "../components/Home";
import About from "../components/About";
import Service from "../components/Service";
import Places from "../components/Places";
import Temples from "../components/Temples";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import SignIn from "../components/SignIn";

import { history, Role } from "../_helpers";
import { PrivateRoute } from "../components/Private-route";

function NoMatch() {
  return <h3>No Match route!</h3>;
}

const App = () => {
  return (
    <>
      <Router history={history}>
        <NavBar />
        <div className="container p-4">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/service" exact component={Service} />
            <Route path="/places" exact component={Places} />
            <PrivateRoute path="/temples" exact component={Temples} />
            <PrivateRoute
              path="/gallery"
              roles={[Role.Admin]}
              component={Gallery}
            />
            <Route path="/contact" exact component={Contact} />
            <Route path="/signin" exact component={SignIn} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
