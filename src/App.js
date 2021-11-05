import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Navbar />
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
          <Footer />
      </HashRouter>
    );
  }
}

export default App;
