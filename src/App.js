import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";
import { HashRouter } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <HashRouter basename="/">
        {load ? (
          <Preloader load={load} />
        ) : (
          <div className="App" id={load ? "no-scroll" : "scroll"}>
            <Navbar />
            <ScrollToTop />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/project" component={Projects} />
              <Route path="/about" component={About} />
              <Route path="/resume" component={Resume} />
            </Switch>
            <Footer />
          </div>
        )}
      </HashRouter>
    </Router>
  );
}

export default App;
