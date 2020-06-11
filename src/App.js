import React, { Component } from "react";
import Student from "./student";
import PropTypes from "prop-types";
import PropsExample from "./propsExample";

//component are building block of React
// Thes are UI splits and smaller part and reusable
// These are javascript javascript function they accept arbitary input called props and it return react element
// Component should be always start with capital letter cause , Element start with small letter acts as html dom element

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Student name={this.props.name} />
        <PropsExample user={"Zulfikar"} rollNo={1}></PropsExample>
        </React.Fragment>
    );
  }
}

Student.propTypes = {
  name: PropTypes.string,
};

export default App;
