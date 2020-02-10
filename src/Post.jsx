import React from "react";

function Post(props){
  return (
    <div className="post">
      <h5>{props.user}</h5>
      <p>{props.content}</p>
    </div>
  );
}

export default Post;
