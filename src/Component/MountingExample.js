import React, { Component } from "react";
import MountingChildComponent from "./MountingChildComponent";

export default class MountingExample extends Component {
  constructor(props) {
    super(props);

    this.state = { Name: "AmolA" };
    console.log("App Constructor called");
  }

  HandleButtonClick = () => {
    this.setState({ Name: "Amol Aher" });
  };

  static getDerivedStateFromProps(props,state) {
    console.log("getDerivedStateFromProps get called",props,state);
    return null;
  }

  componentDidMount()
  {
    console.log("componentDidMount get called");
  }

  render() {
    console.log(" MountingExample render get called");
    return (
      <div>
        <h1>Hello {this.state.Name}</h1>
        <MountingChildComponent/>
        <button onClick={this.HandleButtonClick}>
          Click me to update state
        </button>
      </div>
    );
  }
}
