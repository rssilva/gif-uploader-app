import React, { Component } from "react";
import styled, { css } from "styled-components";
import UploadGif from "./UploadGif";

const FrontPageson = styled.div`
  background-color: #cc2a49;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  color: #582841;
  margin: 0;
  padding: 0;
  font-size: 3rem;
  font-family: "roboto";
`;

export default class FrontPage extends Component {
  render() {
    return (
      <FrontPageson>
        <Header>Bota um gif maneiro ai!</Header>
        <UploadGif />
      </FrontPageson>
    );
  }
}
