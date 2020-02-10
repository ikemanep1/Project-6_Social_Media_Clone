import React from "react";
import Post from './Post';

function Feed(){
  return (
    <div className="feed">
      <input type='text' placeholder="What's Happening?" />
      <div>
        <Post
          user='Lorem ipsum'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'/>
        <Post
          user='Lorem ipsum'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'/>
        <Post
          user='Lorem ipsum'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'/>
        <Post
          user='Lorem ipsum'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'/>
        <Post
          user='Lorem ipsum'
          content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'/>
    </div>
    </div>
  );
}

export default Feed;
