import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "./shared/components/Header";
import JobPostCard from "./shared/components/JobPostCard";
import { loadJobListings } from "./action/jobListingAction";
import { JobListingLoader } from "./shared/components/loader";

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

  fetchMoreData = () => {};

  render() {
    const { isLoading, jobListings } = this.state;

    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          {isLoading || jobListings === null ? (
            <JobListingLoader />
          ) : (
            <div style={{ padding: "10px" }}>
              <InfiniteScroll
                dataLength={jobListings.length}
                next={this.fetchMoreData}
                // hasMore={page < total_pages}
                hasMore={false}
                loader={<JobListingLoader />}
              >
                {jobListings.map(jobPost => (
                  <JobPostCard
                    key={jobPost.id}
                    jobTitle={jobPost.job_title}
                    jobSalaryRangeFrom={jobPost.salary_range_from}
                    jobSalaryRangeTo={jobPost.salary_range_to}
                    jobMinExp={jobPost.xp_lvl}
                    jobLocation={jobPost.job_location}
                    jobMinEducation={jobPost.degree}
                    jobType={jobPost.job_type}
                    jobEmployerImg={jobPost.company_logo}
                    jobEmployerTitle={jobPost.company_name}
                    postedDate={jobPost.job_created_at}
                  />
                ))}
              </InfiniteScroll>
            </div>
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
