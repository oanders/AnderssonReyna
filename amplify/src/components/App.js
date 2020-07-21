import React from "react";
import "./../style/App.css";
import About from "./About";
import Steffy from "./Steffy";
import Home from "./Home";
import Oskar from "./Oskar";
import WeddingDiary from "./WeddingDiary";
import MyNav from "./MyNav";
import PageNotFound from "./PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <MyNav />
        <Switch>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/steffy" component={Steffy}></Route>
          <Route exact path="/oskar" component={Oskar}></Route>
          <Route exact path="/weddingdiary" component={WeddingDiary}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/" component={WeddingDiary}></Route>
          <Route component={PageNotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
