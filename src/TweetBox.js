import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                <Avatar src='https://hellobark.com/wp-content/uploads/corgi-1200.jpg'/>
                <input placeholder="What's Happening" type='text' />
                
                </div>
                <input className="tweetBox_imageInput" placeholder="Optional: Enter image URL" type='text' />
                <Button className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
