import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <div style={{ flexDirection: "row" }}>
          <form action="/action_page.php">
            First name: <input type="text" name="fname" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
