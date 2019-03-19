import React from "react";
import "./JobPostCardStyle.css";

const JobPostCard = () => (
  <div>
    <div className="jobcardWrapper">
      <div className="titleRow">
        <span id="jobTitle">Customer Service Representative</span>
        <span id="jobSalary">P15K - P20K</span>
      </div>

      <div className="infoRow">
        <span>Customer Service Representative</span>
        <span>P15K - P20K</span>
      </div>

      <div className="employerRow">
        <span>Customer Service Representative</span>
        <span>P15K - P20K</span>
      </div>
    </div>
  </div>
);

export default JobPostCard;
