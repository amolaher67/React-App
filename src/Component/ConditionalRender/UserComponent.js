import React from "react";

export default function UserComponent(props) { 

    return (
      <div>
        <h1>Welcome Amol Aher</h1>
        {props.test && <span>Testing Condition</span>}
        <button onClick={props.ClickEvent}>Logout</button>
      </div>
    );
  
}
