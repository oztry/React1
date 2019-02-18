import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/AboutPage/AboutPage";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/catalog" component={CatalogPage} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
