import React,{useState,useContext,useEffect} from 'react'
import { useHistory } from 'react-router';
import './contenent.css';
import image from './assets/1.jpg';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SendIcon from '@material-ui/icons/Send';
import Commentaire from './Commentaire.jsx'
import { IconButton } from '@material-ui/core';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import ReportIcon from '@material-ui/icons/Report';
import UserContext from "./UserContext";
import axios from "./axios-instance";
 

export default function Contenent(props) {
    const [text, setText] = useState(""); 
    const [isOpen,setIsOpen] = useState(false)
    const [commentaires,setCommentaires] = useState(props.data.commentaires);
    const [nbJaimes,setNbJaimes]=useState(props.data.jaimes)
    const {user:context} = useContext(UserContext)
    const [isliked,setIsLiked] = useState(props.data?.dejaAimer || false)

    const handleSubmit = (e) => {
        e.preventDefault();
        
    
        if( context?.token){
            axios.post('/commentaire/'+props.data.id,{
              text
            },{headers:{"Authorization":"Bearer "+context.token}}).then(
                res => {  
                    setCommentaires(prevState => [...prevState,{commentaire_user:[{username:props.username,photo: "users/default.png"}],text}])
                }
            ).catch(err => console.log(err))
        }
        setText("")
    }
    

    const likeContenent=(id)=>{
        if(!isliked){
            axios.get("/like/"+id,{headers:{"Authorization":"Bearer "+context.token}}).then(res=> {
                setNbJaimes(prevState=> prevState+1)
                setIsLiked((prevState)=> !prevState)} ).catch(err => console.log(err))
        }else{
            axios.get("/dislike/"+id,{headers:{"Authorization":"Bearer "+context.token}}).then(res=> {
                setNbJaimes(prevState=> prevState-1)
                setIsLiked((prevState)=> !prevState)} ).catch(err => console.log(err))
        }
        
    }
    
    const signaler = ()=> {
        axios.get('/signale/'+props.data.id,{headers:{"Authorization":"Bearer "+context.token}}).then(
            res => {  
              console.log(res)
            }
        ).catch(err => console.log(err))
    }

    
    const deleteContenent = ()=> {
        axios.delete('/posts/'+props.data.id,{headers:{"Authorization":"Bearer "+context.token}}).then(
              res => {  
                props.delete(props.data.id)
              }
          ).catch(err => console.log(err))
         
    }


    return (
        <div className="contenent">
            <div className="contentwrapper"> 
                <div className="contenttop">
                    <div className="contenttopleft">
                        <img src={"https://avatar.oxro.io/avatar.svg?name="+props.username.toUpperCase()+"&background=ff6b6b&caps=3&bold=true"} alt="" className="contentprofileimg" />
                        <a  href={"/profile/"+props.data.user_id} className="contentusername">{props.username}</a>
                        <span className="contentdate">5 minutes</span>
                    </div>
                    <div className="contenttopright">
                        {context?.user.role_id===4 && <IconButton><ReportProblemIcon onClick={signaler} /></IconButton>}
                        {context?.user?.id===props.data.user_id && <IconButton>
                        <DeleteOutlineIcon onClick={deleteContenent} />
                            </IconButton>}
                           {context?.user?.role_id===6 && <IconButton>
                            <ReportIcon onClick={deleteContenent}/>
                            </IconButton>}
                            
                    </div>
                </div>
                <div className="categoriecont">
                    #{props.data.categorie}
                </div>
                <div className="titlecont">
                    Titre: {props.data.titre}
                </div>
                
                 <div className="contentcenter">
                     <img src={image} alt="" className="contentimg" />
                     <span className="contenttext">{props.data.text}</span>

                </div>
                <div className="contentbottom">
                    {context?.user.role_id===4 &&
                        <div onClick={() => likeContenent(props.data.id)} className="contentbottomlike" style={{cursor:"pointer"}}>
                        {nbJaimes}
                        <WhatshotIcon className="likeicon"/>
                        <span className="likescounter"> {!isliked ? "J'aime" : "J'aime plus"}</span>
                    </div>}
                     <div className="contentbottomcomment">
                        <span className="commentcounter"> {commentaires.length} commentaires</span>
                     </div>
                </div>
                    <div className="contentcomment">
                        <form onSubmit={handleSubmit}>
                            <input type="text" onChange={(e) => setText(e.target.value)} value={text} placeholder="Votre commentaire ..." className="comment_text" required/>

                            <input type="submit" className="commentsendB" value="Envoyer"/>
                          </form>
                     </div>
                     {commentaires.map(commantaire =>  <Commentaire  avatar={"https://avatar.oxro.io/avatar.svg?name="+props.username.toUpperCase()+"&background=ff6b6b&caps=3&bold=true"} username={commantaire.commentaire_user[0].username} value={commantaire.text}/>)}
                   
            </div>

            
        </div>
    )
}
