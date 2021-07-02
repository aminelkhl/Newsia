import React,{useState} from 'react'
import "./UserUsernameModify.css"

export default function UserUsernameModify() {
    const [username, setUsername] = useState("");  
    return (
        <div className="usermodify">
            <form>
                <label classname="usermodifylabel">Nouveau nom d'utilisateur : </label>
                <input type="text" className="usermodifyinput" onChange={(e) => setUsername(e.target.value)} placeholder="Nom d'utilisateur" required/>
                <input type="submit" className="usermodifysubB" value="Modifier"/>
            </form>
        </div>
    )
}
