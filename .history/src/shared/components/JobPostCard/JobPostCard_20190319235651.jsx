import React from "react";
import PropTypes from "prop-types";
import { Color } from "../../../Constants/Color";

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
    marginRight: "10px",
    marginBottom: "10px"
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
  },
  miniInfoText: {
    fontSize: "12px",
    color: Color.primaryGray,
    fontWeight: "400",
    flex: 0.4
  },
  icon: {
    marginRight: "5px",
    color: Color.primaryBlue
  },
  employerImgWrapper: {
    width: "40px",
    height: "40px",
    marginRight: "10px"
  },
  employerImgTitleWrapper: {
    display: "flex",
    alignItems: "center",
    flex: 1
  },
  bottomRow: {
    display: "flex",
    alignItems: "center",
    marginTop: "15px"
  }
};

const JobPostCard = ({
  jobTitle,
  jobSalary,
  jobLocation,
  jobMinExp,
  jobMinEducation,
  jobType,
  jobEmployerImg,
  jobEmployerTitle
}) => (
  <div
    style={{
      padding: "15px",
      borderBottom: "1px solid",
      borderColor: Color.tertiaryGray
    }}
  >
    <div className="jobcardWrapper">
      <div style={styles.rowInfo}>
        <span style={styles.jobTitle}>{jobTitle}</span>
        <span style={styles.jobSalary}>{jobSalary}</span>
      </div>

      <div style={styles.rowInfo}>
        <span style={styles.miniInfoText}>
          <i style={styles.icon} className="fa fa-map" />
          {jobLocation}
        </span>

        <span style={styles.miniInfoText}>
          <i style={styles.icon} className="fa fa-briefcase" />
          {jobMinExp}
        </span>
      </div>

      <div style={styles.rowInfo}>
        <span style={styles.miniInfoText}>
          <i style={styles.icon} className="fa fa-graduation-cap" />
          {jobMinEducation}
        </span>

        <span style={styles.miniInfoText}>
          <i style={styles.icon} className="fa fa-clock" />
          {jobType}
        </span>
      </div>

      <div style={styles.bottomRow}>
        <div style={styles.employerImgTitleWrapper}>
          <img
            style={styles.employerImgWrapper}
            src={jobEmployerImg}
            alt="employer profile"
          />
          <p style={styles.employerTitle}>{jobEmployerTitle}</p>
        </div>

        <span style={styles.postedAgo}>3 hours ago</span>
      </div>
    </div>
  </div>
);

JobPostCard.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  jobSalary: PropTypes.string.isRequired,
  jobLocation: PropTypes.string.isRequired,
  jobMinExp: PropTypes.string.isRequired,
  jobMinEducation: PropTypes.string.isRequired,
  jobType: PropTypes.string.isRequired
};

export default JobPostCard;
