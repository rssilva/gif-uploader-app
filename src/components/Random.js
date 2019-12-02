import React, { Component } from "react";
import styled from "styled-components";
import credential from "../credentials";

const RandomComponent = styled.div`
  background-color: #1d2c4e;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
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
          api_key: credential
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
