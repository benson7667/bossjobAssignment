import React from "react";
import "./JobPostCardStyle.css";

const JobPostCard = () => (
  <div>
    <div className="jobcardWrapper">
      <div className="jobcardInfoRow">
        <span id="jobTitle">
          Customer Service Representative and aggrgation the rest blah blah blah
        </span>
        <span id="jobSalary">P15K - P20K</span>
      </div>

      <div className="jobcardInfoRow">
        <span>Customer Service Representative</span>
        <span>P15K - P20K</span>
      </div>

      <div className="jobcardInfoRow">
        <span>Customer Service Representative</span>
        <span>P15K - P20K</span>
      </div>
    </div>
  </div>
);

export default JobPostCard;
