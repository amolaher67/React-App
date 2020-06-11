import React, { Component } from "react";

class Teacher extends Component {
  //withour constructor
//   state1 = {
//     name: "Amol",
//   };

  constructor(props) {
    super(props);

    //constructor states
    this.state = {
      Name: "TestState",
    };
  }
  render() {
    return (
      <div>
        <h1>Hellow {this.state.Name}</h1>
        <button onClick={this.onButtomClick}>Click me to update state</button>
        <button id="abc" onClick={this.onButtomClickWithArgumets.bind(this)}>Event with argument</button>
      </div>
    );
  }
  onButtomClick= ()=> {
    
    this.setState({Name:"Changes TO AmolA"});
    // this.setState((state, props)=>{
    //    this.state.Name="Changes to AmolA";
    // });
  }

 onButtomClickWithArgumets(e,currentobj)
 {
    console.log(e);
    //console.log(event);
 }

}

export default Teacher;
