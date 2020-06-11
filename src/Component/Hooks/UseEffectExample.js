import React, { useState, useEffect } from "react";

export default function UseEffectExample() {
  const [count1, AddCount1] = useState(0);
  const [count2, DecreaseCount2] = useState(50);

  useEffect(() => {
    console.log("Use Effect Called");
  },[count2]);

  //last parameter is an array , we pass those for which useEffect  want to call- these are actually dependecies 
  // here we pass array with variable count2 so when we change count 2 then only useEffect get called

  const HandleIncrement = () => {
    AddCount1(count1 + 1);
  };
  const HandleDecrement = () => {
    DecreaseCount2(count2 - 1);
  };
  return (
    <div>
      
        <h1> {count1}</h1>
      
      <p>
        <button onClick={HandleIncrement}>Increment</button>
      </p>
      
        <h1> {count2}</h1>
      
      <p>
        <button onClick={HandleDecrement}>Increment</button>
      </p>
          
    </div>
  );
}
