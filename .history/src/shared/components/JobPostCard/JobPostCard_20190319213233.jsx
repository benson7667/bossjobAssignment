import React from "react";
import "./JobPostCardStyle.css";

const JobPostCard = () => (
  <div>
    <div className="jobcardWrapper">
      <div className="jobInfoRow">
        <span id="jobTitle">
          Customer Service Representative and aggrgation the rest blah blah blah
        </span>
        <span id="jobSalary">P15K - P20K</span>
      </div>

      <div className="jobInfoRow">
        <span>Customer Service Representative</span>
        <span>P15K - P20K</span>
      </div>

      <div className="jobInfoRow">
       <img style={{width: 40px, height:40px}} src="" alt="employer profile"/>
        <span>P15K - P20K</span>
      </div>
    </div>
  </div>
);

export default JobPostCard;
