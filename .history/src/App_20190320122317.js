import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Header from "./shared/components/Header";
import SearchBar from "./shared/components/SearchBar";
import JobPostCard from "./shared/components/JobPostCard";
import {
  loadJobListings,
  loadMoreJobListings
} from "./action/jobListingAction";
import { JobListingLoader } from "./shared/components/loader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      jobListings: null,
      page: 1,
      total_pages: 1
    };
  }

  // map global state to local state, make sure the updated props is different from local state only re-render
  static getDerivedStateFromProps(props, state) {
    if (props.jobListings.data !== state.jobListings) {
      return {
        jobListings: props.jobListings.data,
        page: props.jobListings.page,
        total_pages: props.jobListings.total_pages
      };
    } else return null;
  }

  componentDidMount() {
    this.props._loadJobListings();
  }

  fetchMoreData = () => {
    this.props._loadMoreJobListings(this.state.page + 1);
  };

  render() {
    const { isLoading, jobListings, page, total_pages } = this.state;

    return (
      <div className="App">
        <div className="App-Wrapper">
          <Header />
          <SearchBar />
          {!isLoading || jobListings !== null ? (
            <div style={{ padding: "10px" }}>
              <InfiniteScroll
                dataLength={jobListings.length}
                next={this.fetchMoreData}
                hasMore={page < total_pages}
                scrollThreshold={1.0}
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
          ) : (
            <JobListingLoader />
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
  _loadJobListings: loadJobListings,
  _loadMoreJobListings: loadMoreJobListings
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
