import React from "react";
import Friend from './Friend';


function Friends(){
  const h4Style = {
    'margin-top': "10px",
    'margin-bottom': "0px"
  }
  return (
    <div className="friends">
    <h4 style={h4Style}>Lorem Ipsum</h4>
    <Friend name="Donec eu orci et" color="#f3dbc4"/>
    <Friend name="Donec eu orci et" color="#91bd7e"/>
    <Friend name="Donec eu orci et" color="#4cb3b2"/>

    </div>
  );
}

export default Friends;
