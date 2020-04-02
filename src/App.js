import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Jobbo from "./Jobbo";
import Matchy from "./Matchy";
import Root from "./Root";
import GameJournal from "./GameJournal";
import Minesweeper from "./Minesweeper";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="wrapper">
      <NavBar />

      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={({ history }) => <Portfolio {...history} />}
          />
          <Route
            exact
            path="/jobbo"
            render={({ history }) => <Jobbo {...history} />}
          />
          <Route
            exact
            path="/matchy"
            render={({ history }) => <Matchy {...history} />}
          />
          <Route
            exact
            path="/root"
            render={({ history }) => <Root {...history} />}
          />
          <Route
            exact
            path="/gamejournal"
            render={({ history }) => <GameJournal {...history} />}
          />
          <Route
            exact
            path="/minesweeper"
            render={({ history }) => <Minesweeper {...history} />}
          />
          <Route
            exact
            path="/about"
            render={({ history }) => <About {...history} />}
          />
          <Route
            exact
            path="/contact"
            render={({ history }) => <Contact {...history} />}
          />
        </Switch>

        <hr className="mt-5" />
        <Footer />
      </div>

      <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"
      ></script>

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossOrigin="anonymous"
      ></script>

      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
        integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default App;
