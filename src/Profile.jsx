import React from 'react'
import "./profile.css"
import Header from './Header.jsx'
import Sidebar from './Sidebar'
import ProfileComp from './ProfileComp';


export default function Profile() {
    return (
        <div className="profilecontainer">
            <div className="profileHeader">
                <Header/>
            </div>
            <div className="profileBody">
                <Sidebar className="sidebar"/>
                <ProfileComp className="comp"/>
            </div>
            
        </div>
    )
}
