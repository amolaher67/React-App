import React, { Component } from "react";

export default class MountingChildComponent extends Component {
  constructor() {
    super();
    console.log("Child constructor get called");
  }

  HandleButtonClick = () => {
    this.setState({ Name: "Amol Aher" });
  };
  
  render() {
    console.log("Child component render get called");
    return (
      <div>
        <button onClick={this.HandleButtonClick}>
          Click me to update state from child
        </button>
      </div>
    );
  }
}
