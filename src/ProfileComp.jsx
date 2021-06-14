import React from 'react'
import "./profileComp.css"
import Profilecover from "./assets/profilecover.jpg";
import Userimg from "./assets/Pimage.JPG";

export default function ProfileComp() {
    return (
        <div className="profileCompContainer">
            <div className="profilerigh">
                <div className="profilerighttop">
                    <div className="profilecover"> 
                    <img src={Profilecover} alt="" className="profilecoverImg" />
                    <img src={Userimg} alt="" className="profileuserimg" />
                    </div>
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Amine Lakhal</h4>
                    <span className="profileInfoDesc">Description du profile .....</span>
                </div>
            </div>
        </div>
    )
}
