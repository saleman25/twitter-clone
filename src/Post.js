import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ 
    displayName, 
    username, 
    verified, 
    text,
    image,
    avatar
}) {
    return (
        <div className='post'>
            <div className='post_avatar'>
            
            <Avatar src='https://hellobark.com/wp-content/uploads/corgi-1200.jpg'/>
            
            </div>

            <div className='post_body'>
                <div className='post_header'>
                    <div className='post_headerText'>
                            <h3>
                                Sam {" "}
                                <span className='post_headerSpecial'>
                                    <VerifiedUserIcon className='post_badge' />
                                    @sam
                                </span>
                            </h3>
                    </div>
                    <div className='post_headerDescription'>
                            <p>Ima pee myself</p>
                    </div>
                </div>
                <img src='https://media4.giphy.com/media/WEiKBTaESHHhK/200.gif' alt=''/>
            <div className= "post_footer">
                <ChatBubbleOutlineIcon fontSize='small' />
                <RepeatIcon fontSize='small' />
                <FavoriteBorderIcon fontSize='small' />
                <PublishIcon fontSize='small' />
            </div>
            </div>

        </div>
    )
}

export default Post
