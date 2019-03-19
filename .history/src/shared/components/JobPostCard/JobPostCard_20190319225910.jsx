import React from "react";
import "./JobPostCardStyle.css";
import Color from "../../Constants/Color";

const styles = {
  rowInfo: {
    display: "flex",
    marginBottom: "5px"
  },
  jobTitle: {
    color: Color.primaryGray,
    flex: 1,
    fontWeight: "bold",
    fontSize: "14px",
    marginRight: "10px"
  },
  jobSalary: {
    color: Color.primaryGray,
    fontWeight: "bold",
    fontSize: "14px"
  },
  employerTitle: {
    fontSize: "12px",
    fontWeight: "bold",
    color: Color.primaryGray,
    marginRight: "15px"
  },
  postedAgo: {
    color: Color.secondaryGray,
    fontSize: "12px",
    fontWeight: "bold"
  }
};

const JobPostCard = () => (
  <div>
    <div className="jobcardWrapper">
      <div style={styles.rowInfo}>
        <span style={styles.jobTitle}>
          Customer Service Representative and aggrgation the rest blah blah blah
        </span>
        <span style={styles.jobSalary}>P15K - P20K</span>
      </div>

      <div style={{ flexDirection: "row" }}>
        <div>
          <p
            style={{
              fontSize: "12px",
              color: Color.primaryGray,
              fontWeight: "600",
              backgroundColor: "red"
            }}
          >
            Cebu City
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          background: "red",
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
          <p style={styles.employerTitle}>
            Shop All You Can Inc asdasdasd asdasdas
          </p>
        </div>

        <span style={styles.postedAgo}>3 hours ago</span>
      </div>
    </div>
  </div>
);

export default JobPostCard;
