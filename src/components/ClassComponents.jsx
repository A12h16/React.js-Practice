import React, { Component } from "react";

class ClassComponents extends Component {
  state = {};
  render() {
    const myStyle = {
      color: "white",
      backgroundColor: "blue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <>
        <h1 style={myStyle}>Class Components</h1>
      </>
    );
  }
}

export default ClassComponents;
