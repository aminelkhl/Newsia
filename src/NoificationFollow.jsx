import React from 'react'
import "./notificationFollow.css"
import PhotoP from "./assets/Pimage2.jpg";

export default function NotificationFollow() {
    return (
        <div className="notificationfollow">
            <div className="notificationfollowtop">
            <div className="notificationfollowleft">
            <img src={PhotoP} alt="" className="followprofileimg" /> 
            </div>
            <div className="notificationfollowright">
                <span className="notiffollowusername">
                    Malek Riahi
                </span>
                <span className="notiffollowlabel">
                    vous suit maintenant.
                </span>
            </div>
            </div>
            <div className="notificationfollowbottom">
                Il ya 5 minutes
            </div>
            
        </div>
    )
}
