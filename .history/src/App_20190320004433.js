import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Header from "./shared/components/Header";
import JobPostCard from "./shared/components/JobPostCard";
import { loadJobListings } from "./action/jobListingAction";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      jobListings: null
    };
  }

  // map global state to local state, make sure the updated props is different from local state only re-render
  static getDerivedStateFromProps(props, state) {
    if (props.jobListings.data !== state.jobListings) {
      return {
        jobListings: props.jobListings.data
      };
    } else return null;
  }

  componentDidMount() {
    this.props._loadJobListings();
  }

  render() {
    const { isLoading, jobListings } = this.state;
    console.log(this.props.jobListings.data);

    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          {isLoading || jobListings === null ? (
            <div>Loading</div>
          ) : (
            <div style={{ padding: "10px" }}>{renderJobListings}</div>
          )}
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
