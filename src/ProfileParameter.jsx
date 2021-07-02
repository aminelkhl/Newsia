import React from 'react'
import "./profileParameter.css"
import UserUsernameModify from './UserUsernameModify.jsx'
import UserPasswordModify from './UserPasswordModify.jsx'

export default function ProfileParameter() {
    return (
        <div className="profileParameterContainer">
            <div className="paramcont">
            <UserUsernameModify />
            <UserPasswordModify />
            </div>
        </div>
    )
}
