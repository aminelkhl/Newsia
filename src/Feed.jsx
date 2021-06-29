import React , {useEffect , useState , useContext} from 'react'
import "./Feed.css";
import PostSender from './PostSender';
import Post from './Post';
import Contenent from './Contenent';
import UserContext from "./UserContext"

import axios from "./axios-instance"

export default function Feed() {
    const {user:context} = useContext(UserContext)
    const [contenents , setContenents ] = useState([]);
    const fetchContenent = () => {
       console.log(context)
      !context?.loading && context?.token && axios.get("/posts",{headers:{"Authorization":"Bearer "+context.token}}).then(res => {
                setContenents(res.data.posts);
                console.log(res.data.posts);
        }).catch(err => {

        })
    }

    useEffect(()=> {
        fetchContenent()
    },[])

    return (
        <div className="feed">
            
            <PostSender />
            <div className="feed_posts">
                {contenents.map(contenent => <Contenent username={contenent.user} data={contenent} key={contenent.id}/>)}
            </div>
        </div>

    )
}
