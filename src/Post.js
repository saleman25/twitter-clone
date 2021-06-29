import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'

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
                                <span>
                                    <VerifiedUserIcon className='post_badge' />
                                </span>
                            </h3>
                    </div>
                    <div className='post_headerDescription'>
                            <p>Ima pee myself</p>
                    </div>
                </div>
                <img src='https://media4.giphy.com/media/WEiKBTaESHHhK/200.gif' alt=''/>
            </div>

        </div>
    )
}

export default Post
