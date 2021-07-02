import React ,{useContext,useEffect,useState} from 'react'
import './rightbar.css';
import Widget from "./Widget.jsx";
import axios from "./axios-instance"
import UserContext from "./UserContext";

export default function Rightbar() {
    const [pub,setPub] =useState([])
    const {user:context} = useContext(UserContext);

    const fetchPub = ()=> {
        
        axios.get("/publicite",{headers:{"Authorization":"Bearer "+context.token}}).then(res => {
            console.log(res.data)
            setPub(res.data)
        }).catch(err =>  {
            console.log(err)
        })
    }
    useEffect(()=>{
        fetchPub()
    },[])


    return (
        <div className="rightbarcontainer">
            <div className="rightbarwidgets">
            {pub.map(p=><Widget key={p.id} data={p} className="widget"/>)}
            </div>
        </div>
    )
}
