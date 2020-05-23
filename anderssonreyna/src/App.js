import React from "react";
import "./App.css";
import MyNav from "./MyNav";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="Main-header">
          <i>Andersson Reyna Personal Website</i>
        </h1>
      </div>
      <MyNav />
    </div>
  );
}

export default App;
