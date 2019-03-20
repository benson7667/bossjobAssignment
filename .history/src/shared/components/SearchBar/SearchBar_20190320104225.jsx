import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <div style={{ flexDirection: "row" }}>
          <form action="/action_page.php">
            <input
              type="text"
              name="searchText"
              placeholder="Search for job title or company name"
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;