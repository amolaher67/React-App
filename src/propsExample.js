import React from "react";

const PropsExample = function (props) {
  return (
    <div>
      <h1>Hi From Props Example From User :{props.user}</h1>
      <h2>Its Roll No is :{props.rollNo}</h2>
    </div>
  );
};

export default PropsExample;
