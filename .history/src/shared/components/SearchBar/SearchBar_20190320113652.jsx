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

  handleChange = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  onSubmit = () => {
    e.preventDefault();
  };

  render() {
    console.log(this.state.searchText);
    return (
      <div style={{ padding: "15px", backgroundColor: Color.extremeLightGray }}>
        <form>
          <div className="inputContainer">
            <i className="fa fa-search icon" />
            <input
              id="searchInput"
              className="input-field"
              autoComplete="off"
              onChange={this.handleChange}
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
