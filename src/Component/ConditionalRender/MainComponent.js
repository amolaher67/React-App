import React, { Component } from "react";
import GuestComponent from "./GuestComponent";
import UserComponent from "./UserComponent";

export default class MainComponent extends Component {
  constructor() {
    super();
    this.state = { isLoggedIn: false };
  }

  HandleLogInClick = () => {
    console.log("LoginCLick");
    this.setState({ isLoggedIn: true });
  };
  HandleLogOutClick = () => {
    console.log("Log Out CLick");
    this.setState({ isLoggedIn: false });
  };

  //   render() {
  //     return this.state.isLoggedIn ? <UserComponent test={true} ClickEvent={this.HandleLogOutClick} /> : <GuestComponent ClickEvent={this.HandleLogInClick} />;
  //   }

  render() {
    return (
      <div>
        {(() => {
            if(this.state.isLoggedIn)
             return  <UserComponent />
             else
             return <GuestComponent></GuestComponent>
        })()}
      </div>
    );
  }
}
