import React, { Component } from "react";

class EventExample extends Component {
  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Click Me</button>
        <a href="#" onClick={this.handleHrefClick}>
          Clik me its href
        </a>
      </div>
    );
  }
  handleButtonClick = () => {
    console.log("button Clikced", this);
  };
  handleHrefClick = (e) => {
    alert('Testing event')
    e.preventDefault();
  };
}

export default EventExample;
