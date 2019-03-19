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
          <div style={{ padding: "10px" }}>
            <JobPostCard
              jobTitle="Customer Service Representative and aggrgation the rest blah blah blah"
              jobSalary="P12-P13"
              jobMinExp="1 - 3 years"
              jobLocation="Cebu City"
              jobMinEducation="Diploma"
              jobType="Full Time"
              jobEmployerImg="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              jobEmployerTitle="ABC Private Limited"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
