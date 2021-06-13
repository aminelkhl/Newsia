import React from 'react'
import "./Feed.css";
import PostSender from './PostSender';
import Post from './Post';
import Contenent from './Contenent';
export default function Feed() {
    return (
        <div className="feed">
            
            <PostSender />
            <div className="feed_posts">
                <Contenent />
                <Contenent />
                <Contenent />
                <Contenent />
                <Contenent />
                <Contenent />
            </div>
        </div>

    )
}
