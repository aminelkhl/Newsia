import React,{ useState } from 'react'
import "./UserPasswordModify.css"

export default function UserPasswordModify() {
    const [password, setPassword] = useState("");  
    const [newPassword, setNewPassword] = useState("");  
    return (
        <div className="userpasswordmodify">
            <form>
                <div className="oldpassword">
                    <label className="oldpasslabel">Mot de passe actuel :</label>
                    <input type="password" className="oldpassinput" onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe actuel" required/>
                </div>
                <div className="newpassword">
                    <label className="newpasslabel">Nouveau mot de passe :</label>
                    <input type="password" className="newpassinput" onChange={(e) => setNewPassword(e.target.value)} placeholder="Nouveau mot de passe" required/>
                    <input type="submit" className="passmodifysubB" value="Modifier"/>
                </div>
                
            </form>
        </div>
    )
}
