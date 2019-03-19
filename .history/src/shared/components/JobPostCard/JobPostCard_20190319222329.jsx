import React from "react";
import "./JobPostCardStyle.css";
import Color from "../../Constants/Color";

const JobPostCard = () => (
  <div>
    <div className="jobcardWrapper">
      <div style={{ display: "flex" }}>
        <span
          style={{
            color: "red",
            flex: 1,
            fontWeight: "bold",
            fontSize: "12px"
          }}
        >
          Customer Service Representative and aggrgation the rest blah blah blah
        </span>
        <span style={{ color: Color.primaryGray, fontWeight: "bold" }}>
          P15K - P20K
        </span>
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
          <p style={{ fontSize: "12px", fontWeight: "bold", color: "gray" }}>
            Shop All You Can Inc asdasdasd asdasdas
          </p>
        </div>

        <span
          style={{ color: "#4b4b4b", fontSize: "12px", fontWeight: "bold" }}
        >
          3 hours ago
        </span>
      </div>
    </div>
  </div>
);

export default JobPostCard;
