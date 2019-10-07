import React, { Component } from "react";
import styled, { css } from "styled-components";

const Header = styled.h1`
  color: red;
`;

export default class UploadGif extends Component {
  render() {
    return (
      <div className="UploadGif">
        <Header>Bota um gif maneiro ai!</Header>
        <input type="file" />
      </div>
    );
  }
}
