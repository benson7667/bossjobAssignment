import React, { Component } from "react";
import Button from "../Button";
import "./SearchBar.css";
import Color from "../../../constants/Color";

class SearchBar extends Component {
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
