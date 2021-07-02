import React,{ useState ,useContext} from 'react'
import "./UserPasswordModify.css"
import UserContext from "./UserContext"
import axios from "./axios-instance"

export default function UserPasswordModify() {
    const [password, setPassword] = useState("");  
    const [newPassword, setNewPassword] = useState("");  
    const {user:context} = useContext(UserContext)
    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.post("/updatePassword",{"password":password,"newPassword":newPassword},{headers:{"Authorization":"Bearer "+context.token}}).then(res=> console.log(res)).catch(err => console.log(err))
        setNewPassword("")
        setPassword("")
    }
    return (
        <div className="userpasswordmodify">
            <form onSubmit={handleSubmit}>
                <div className="oldpassword">
                    <label className="oldpasslabel">Mot de passe actuel :</label>
                    <input type="password" className="oldpassinput" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe actuel" required/>
                </div>
                <div className="newpassword">
                    <label className="newpasslabel">Nouveau mot de passe :</label>
                    <input type="password" className="newpassinput" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Nouveau mot de passe" required/>
                    <input type="submit" className="passmodifysubB" value="Modifier"/>
                </div>
                
            </form>
        </div>
    )
}
