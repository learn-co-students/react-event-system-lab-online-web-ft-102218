// Code EyesOnMe Component Here
import React, { Component } from "react";

class EyesOnMe extends Component {
  onFocus = () => {
    console.log("Good!");
  };
  // Triggered when the text input loses focus...
  onBlur = () => {
    console.log("Hey! Eyes on me!");
  };
  // JSX elements can have as many event handler properties as necessary.
  render() {
    return (
      <button onBlur={this.onBlur} onFocus={this.onFocus}>
        Button
      </button>
    );
  }
}

export default EyesOnMe;
