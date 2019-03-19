import React, { Component } from "react";
import "./App.css";

import Header from "./shared/components/Header";
import Button from "./shared/components/Button";
import JobPostCard from "./shared/components/JobPostCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <Button />
        </div>
      </div>
    );
  }
}

export default App;
