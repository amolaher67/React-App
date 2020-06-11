import React, { useState } from "react";

function UseStateHooks() {
  const [name, setName] = useState("Amol Aher");

  var HandleClick = () => {
    setName("AmolAher1");
  };

  return (
    <div>
      <h1>Hi From Hook Exmaple {name}</h1>
      <button onClick={HandleClick}>Click me to update state</button>
    </div>
  );
}

export default UseStateHooks;
