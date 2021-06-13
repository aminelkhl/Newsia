import React from 'react'
import "./notificationLike.css"
import PhotoP from "./assets/Pimage2.jpg";

export default function NotificationLike() {
    return (
        <div className="notificationlike">
            <div className="notificationliketop">
            <div className="notificationlikeleft">
            <img src={PhotoP} alt="" className="likeprofileimg" /> 
            </div>
            <div className="notificationlikeright">
                <span className="notiflikeusername">
                    Malek Riahi
                </span>
                <span className="notiflikelabel">
                    a aimé votre article.
                </span>
            </div>
            </div>
            <div className="notificationlikebottom">
                Il ya 8 minutes
            </div>
            
        </div>
    )
}
