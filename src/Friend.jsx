import React from "react";

function Friend(props){
  const friendStyles = {
    display: 'grid',
    'grid-template-columns': '75px 1fr',
    'padding-bottom': '0px'
  }
  const friendPicStyles = {
    height: "60px",
    width: "60px",
    'background-color': props.color,
    'margin-left': "0px",
    'margin-top': "30px",
    'margin-bottom': "15px",
  }
  return (
    <div className="friend" style={friendStyles}>
      <div className='friend-pic' style={friendPicStyles}></div>
      <div>
        <h5>{props.name}</h5>
        <button>Button</button>
      </div>
    </div>
  );
}

export default Friend;
