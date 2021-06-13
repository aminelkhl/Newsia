import React from 'react'
import "./notificationComment.css"
import PhotoP from "./assets/Pimage2.jpg";

export default function NotificationComment() {
    return (
        <div className="notificationcomment">
            <div className="notificationcommenttop">
            <div className="notificationcommentleft">
            <img src={PhotoP} alt="" className="commentprofileimg" /> 
            </div>
            <div className="notificationcommentright">
                <span className="notifcommentusername">
                    Malek Riahi
                </span>
                <span className="notifcommentlabel">
                    a commenté votre article.
                </span>
            </div>
            </div>
            <div className="notificationcommentbottom">
                Il ya 5 minutes
            </div>
            
        </div>
    )
}
