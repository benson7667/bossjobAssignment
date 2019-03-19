import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Header from "./shared/components/Header";
import JobPostCard from "./shared/components/JobPostCard";
import { loadJobListings } from "./action/jobListingAction";

class App extends Component {
  constructor(props) {
    super(props);
    this.setState({
      isLoading: false,
      jobListings: null
    });
  }

  // map global state to local state, make sure the updated props is different from local state only re-render
  static getDerivedStateFromProps(props, state) {
    if (
      props.jobListings !== state.jobListings ||
      props.isLoading !== state.isLoading
    ) {
      return {
        isLoading: props.isLoading,
        jobListings: props.jobListings
      };
    }
  }

  componentDidMount() {
    this.props._loadJobListings();
  }

  render() {
    const { isLoading, jobListings } = this.state;

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

const mapStateToProps = state => ({
  jobListings: state.jobListings
});

const mapDispatchToProps = {
  _loadJobListings: loadJobListings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
