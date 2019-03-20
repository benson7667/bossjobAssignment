import React, { Component } from "react";
import Button from "../Button";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div style={{ padding: "15px" }}>
        <div style={{ flexDirection: "row" }}>
          <form>
            <input
              id="searchInput"
              type="text"
              name="searchText"
              placeholder="Search for job title or company name"
            />
            {/* <input type="submit" value="Submit" /> */}
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
