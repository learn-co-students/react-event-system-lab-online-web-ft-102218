// Code Keypad Component Here
import React, { Component } from "react";

class Keypad extends Component {
  handlePassword = () => {
    console.log("Entering password...");
  };
  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handlePassword} />
      </div>
    );
  }
}

export default Keypad;
