import React, { Component } from "react";
import Button from "../Button";
import "./SearchBar.css";
import Color from "../../../constants/Color";

class SearchBar extends Component {
  render() {
    return (
      <div style={{ padding: "15px", backgroundColor: "red" }}>
        <form>
          <div className="inputContainer">
            <i className="fa fa-briefcase icon" />
            <input
              id="searchInput"
              className="input-field"
              type="text"
              name="searchText"
              placeholder="Search for job title or company name"
            />
          </div>
        </form>
        <Button />
      </div>
    );
  }
}

export default SearchBar;
