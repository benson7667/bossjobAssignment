import React, { Component } from "react";
import Button from "../Button";
import "./SearchBar.css";
import Color from "../../../constants/Color";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  onValueChange = event => {
    event.preventDefault();
    this.setState({
      searchText: event.target.value
    });
  };

  render() {
    return (
      <div style={{ padding: "15px", backgroundColor: Color.extremeLightGray }}>
        <form>
          <div className="inputContainer">
            <i className="fa fa-search icon" />
            <input
              id="searchInput"
              className="input-field"
              autocomplete="off"
              onChange={this.onValueChange}
              value={this.state.searchText}
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
