import React from 'react'
import "./Commentaire.css"
import Pimg from "./assets/Pimage.JPG"

export default function Commentaire({avatar,username,value}) {
    
    return (
        <div className="commentairecontainer">
            <div className="avatar">
                <img src={avatar} className="pdp" />
            </div>
            <div className="usernamecontainer">
                <span className="usernamespan"> {username}</span>
            </div>
            <div className="text">
                <span className="commentairetext">{value}</span>
            </div>
        </div>
    )
}
