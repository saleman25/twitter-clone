import React, { useState, useEffect } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
const [tweetMessage, setTweetMessage] = useState('');
const [tweetImage, setTweetImage] = useState('');

const sendTweet = e => {
    e.preventDefault();
    
    db.collection('posts').add({
        displayName: 'Samantha',
        username: 'princessam',
        verified: true,
        text: tweetMessage,
        avatar: 'https://hellobark.com/wp-content/uploads/corgi-1200.jpg',
        image: tweetImage,

    });

    setTweetMessage('');
    setTweetImage('');
};



    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                <Avatar src='https://hellobark.com/wp-content/uploads/corgi-1200.jpg'/>
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's Happening" 
                type='text' />
                
                </div>
                <input 
                onChange={(e) => setTweetImage(e.target.value)}
                value={tweetImage}
                className="tweetBox_imageInput" 
                placeholder="Optional: Enter image URL" 
                type='text' />
                <Button 
                onClick={sendTweet}
                type="submit"
                className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
