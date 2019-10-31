import React, { Component } from "react";
import styled from "styled-components";
import UploadGif from "./UploadGif";
import Random from "./Random";

const MainPage = styled.div`
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

const AlternatePath = styled.h2`
  color: #732e85;
  margin: 0;
  padding: 0;
  font-family: "roboto";
`;

const Anchor = styled.a`
  color: #9a28b8;
`;

export default class FrontPage extends Component {
  render() {
    return (
      <MainPage>
        <Header>Bota um gif maneiro ai!</Header>
        <UploadGif />
        <AlternatePath>
          Ou clica <Anchor href="searchgif">aqui</Anchor> pra procurar algo
          legal
        </AlternatePath>
        <Random />
      </MainPage>
    );
  }
}
