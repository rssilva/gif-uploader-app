import React, { Component } from "react";
import styled from "styled-components";

const RandomComponent = styled.div`
  background-color: #1d2c4e;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Header = styled.h3`
  color: #732e85;
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-family: "roboto";
`;

const RandomButton = styled.button`
  color: purple;
  background-color: white;
  border-radius: 2px;
  margin: 5px;
`;

export default class Random extends Component {
  state = {
    embedGif: ""
  };

  getGif = () => {
    const axios = require("axios");
    axios
      .get("https://api.giphy.com/v1/gifs/random", {
        params: {
          api_key: "r6YgnmokUDIs908nP1eRh0QYQ6HyQVBA"
        }
      })
      .then(response => {
        this.setState({
          embedGif: response.data.data.embed_url
        });
      });
  };

  render() {
    return (
      <RandomComponent>
        <Header>Sem tempo irmão?</Header>
        <RandomButton onClick={this.getGif}>Randomize</RandomButton>
        <iframe
          title="gif"
          src={this.state.embedGif}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </RandomComponent>
    );
  }
}
