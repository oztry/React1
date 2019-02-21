import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AboutPage from "./components/AboutPage/AboutPage";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import HomePage from "./components/HomePage/HomePage";
import WithContainer from "./components/WithContainer/WithContainer";

const HomePageWithContainer = WithContainer(HomePage);
const AboutPageWithContainer = WithContainer(AboutPage);
const CatalogPageWithContainer = WithContainer(CatalogPage);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={HomePageWithContainer} />
            <Route path="/about" component={AboutPageWithContainer} />
            <Route path="/catalog" component={CatalogPageWithContainer} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
