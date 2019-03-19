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

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            flex: 1
          }}
        >
          <img
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
            src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="employer profile"
          />
          <p>Shop All You Can Inc asdasdasd asdasdas</p>
        </div>

        <span>3 hours ago</span>
      </div>
    </div>
  </div>
);

export default JobPostCard;
