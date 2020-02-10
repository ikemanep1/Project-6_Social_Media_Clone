import React from "react";

function Friend(props){
  return (
    <div className="friend">
      <h5>{props.name}</h5>
      <button>Button</button>
    </div>
  );
}

export default Friend;
