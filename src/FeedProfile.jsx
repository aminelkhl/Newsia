import React from 'react'
import "./FeedProfile.css";
import PostSender from './PostSender';
import Contenent from './Contenent';
import  {useEffect , useState , useContext} from 'react'
import UserContext from "./UserContext"

import axios from "./axios-instance"
export default function FeedProfile({username,posts}) {
   

    return (
        <div className="feed">
            <div className="feed_posts">
            {posts.map(contenent => <Contenent username={username}data={contenent} key={contenent.id}/>)}
            </div>
        </div>

    )
}
