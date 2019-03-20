import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return <div>
        <div style={{flexDirection:'row'}}>
        <form action="/action_page.php">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="Submit">
</form>
        </div>
    </div>;
  }
}

export default SearchBar;
