import React, { Component } from "react";
import "./App.css";

import Header from "./shared/components/Header";
import JobPostCard from "./shared/components/JobPostCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <Button />
          <div style={{ padding: "10px 20px" }}>
            <JobPostCard />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
