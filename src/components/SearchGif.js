import React, { Component } from "react";
import styled from "styled-components";

const SearchPage = styled.div`
  background-color: #1d2c4e;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  color: #732e85;
  margin: 0;
  padding: 0;
  font-size: 3rem;
  font-family: "roboto";
`;

const SecondaryHeader = styled.h1`
  color: #732e85;
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-family: "roboto";
`;

export default class SearchGif extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    console.log("Ta escrito: " + e.target.value);
  }

  render() {
    return (
      <SearchPage className="SearchGif">
        <Header>Bota uma Url de gif maneira ai</Header>
        <input value={this.state.value} onChange={this.handleChange} />
        <SecondaryHeader>
          ou <a href="/">volta</a> pra trás
        </SecondaryHeader>
      </SearchPage>
    );
  }
}
