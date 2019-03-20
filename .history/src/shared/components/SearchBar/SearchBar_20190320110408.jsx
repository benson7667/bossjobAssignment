import React, { Component } from "react";
import Button from "../Button";
import "./SearchBar.css";
import Color from "../../../constants/Color";

class SearchBar extends Component {
  render() {
    return (
      <div style={{ padding: "15px" }}>
        <form>
          <div style={{ display: "flex" }}>
            <i className="fa fa-briefcase" />
            <input
              id="searchInput"
              type="text"
              name="searchText"
              placeholder="Search for job title or company name"
            />
          </div>

          {/* <input type="submit" value="Submit" /> */}
          <Button />
        </form>
      </div>
    );
  }
}

export default SearchBar;
