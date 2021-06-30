import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Post displayName="Samantha" 
      username="princesssam" 
      verified text="Yoooo i did it!"
      avatar="https://hellobark.com/wp-content/uploads/corgi-1200.jpg"
      image="https://media4.giphy.com/media/WEiKBTaESHHhK/200.gif"/>
      
    </div>
  );
}

export default Feed;
