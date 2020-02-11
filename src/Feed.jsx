import React from "react";
import Post from './Post';

function Feed(){
  return (
    <div className="feed">
      <div className="feedTop">
        <div className="profile-pic2"></div>
      <input type='text' placeholder="What's Happening?" />
    </div>
      <div>
        <Post
          user='Lorem ipsum'
          color='#f3dbc4'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'/>
        <Post
          user='Lorem ipsum'
          color='#f3dbc4'
          content='Lorem ipsum dolor sit amet, consectetur'
          double= {true}/>
        <Post
          user='Lorem ipsum'
          color='#23bd8d'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'/>
        <Post
          user='Lorem ipsum'
          color='#bdaa99'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'/>
        <Post
          user='Lorem ipsum'
          color='#f3dbc4'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'/>
    </div>
    </div>
  );
}

export default Feed;
