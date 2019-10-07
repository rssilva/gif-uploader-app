import React, { Component } from "react";
import styled, { css } from "styled-components";

export default class UploadGif extends Component {
  render() {
    return (
      <div className="UploadGif">
        <input type="file" />
      </div>
    );
  }
}
