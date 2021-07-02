import React , {useEffect , useState , useContext} from 'react'
import "./Feed.css";
import PostSender from './PostSender';
import Post from './Post';
import Contenent from './Contenent';
import UserContext from "./UserContext"
import axios from "./axios-instance"
import FilterListIcon from '@material-ui/icons/FilterList';

import { Button } from 'bootstrap';

export default function Feed(props) {
    const {user:context} = useContext(UserContext)
    const [contenents , setContenents ] = useState([]);
    const fetchContenent = () => {
      
      !context?.loading && context?.token && context?.user.role_id===4  &&axios.get("/accueil",{headers:{"Authorization":"Bearer "+context.token}}).then(res => {
                setContenents(res.data.posts);
        
        }).catch(err => {

        })

        !context?.loading && context?.token && context?.user.role_id===5  &&axios.get("/posts",{headers:{"Authorization":"Bearer "+context.token}}).then(res => {
            setContenents(res.data.posts);
    
    }).catch(err => {

    })
    }

    const deleteContenent=(id) => {
        let newCont= contenents.filter(contenent => contenent.id!==id)
        setContenents(newCont)
    }
    useEffect(()=> {
        fetchContenent()
        
    },[])

    const filter = () => {
        axios.post("/posts/filter",{categorie:props.filterCat,region:props.filterRegion,langue:props.filterLangue},{headers:{"Authorization":"Bearer "+context.token}}).then(res => {
            setContenents(res.data.posts);
    
    }).catch(err => {

    })
    }

    return (
        <div className="feed">
            <FilterListIcon onClick={filter} ></FilterListIcon>

                       {context?.user?.role_id ===5 &&
                 <PostSender />
            }
           
            <div className="feed_posts">
                {contenents.map(contenent =>  <Contenent delete={deleteContenent} username={contenent.user} data={contenent} key={contenent.id}/>)}
            </div>
        </div>

    )
}
