import React ,{useState , useEffect ,useContext} from 'react'
import "./profileComp.css"
import Profilecover from "./assets/profilecover.jpg";
import Userimg from "./assets/Pimage.JPG";
import FeedProfile from "./FeedProfile.jsx"
import {useParams} from "react-router"
import axios from "./axios-instance"
import UserContext from "./UserContext";

export default function ProfileComp() {
    const {user:context} = useContext(UserContext)
    const params = useParams()
    const [user , setUser] = useState(null)
    
    const id = params.id || context?.user?.id 
    const fetchUser = ()=> {
        
        axios.get("/showProfil/"+id).then(res => {
            setUser(res.data)
        }).catch(err =>  {
            console.log(err)
        })
    }

    useEffect(()=> {
        fetchUser();

    },[])


    return (
        <div className="profileCompContainer">
            {user && 
            <div className="profilerigh">
                <div className="profilerighttop">
                    <div className="profilecover"> 
                    <img src={Profilecover} alt="" className="profilecoverImg" />
                    <img src={Userimg} alt="" className="profileuserimg" />
                    </div>
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">{user.username}</h4>
                    <span className="profileInfoDesc">Description du profile .....</span>
                </div>
                <div className="profileBot">
                <div className="profileBotfeed">
                    <FeedProfile posts={user.posts} username={user.username}/>
                   {/*<LiveProfile />*/}
                </div>
                </div>
            </div>
            }
        </div>
    )
}
