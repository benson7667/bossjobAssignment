import React, { Component } from "react";
import Button from "../Button";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div style={{ padding: "15px", background: "red" }}>
        <div style={{ flexDirection: "row" }}>
          <form>
            <input
              id="searchInput"
              type="text"
              name="searchText"
              placeholder="Search for job title or company name"
            />
            {/* <input type="submit" value="Submit" /> */}
            <Button />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
