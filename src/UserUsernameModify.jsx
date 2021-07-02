import React,{useState,useContext} from 'react'
import "./UserUsernameModify.css"
import UserContext from "./UserContext"
import axios from "./axios-instance"

export default function UserUsernameModify() {
    const [username, setUsername] = useState("");  
    const {user:context} = useContext(UserContext)
    const handleSubmit = (e)=> {
        e.preventDefault()
        axios.post("/updateUserName",{newUserName:username},{headers:{"Authorization":"Bearer "+context.token}}).then(res=> console.log(res)).catch(err => console.log(err))
    }
    return (
        <div className="usermodify">
            <form onSubmit={handleSubmit}>
                <label classname="usermodifylabel">Nouveau nom d'utilisateur : </label>
                <input type="text" className="usermodifyinput" onChange={(e) => setUsername(e.target.value)} placeholder="Nom d'utilisateur" required/>
                <input type="submit" className="usermodifysubB" value="Modifier"/>
            </form>
        </div>
    )
}
