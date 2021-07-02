import { Avatar } from '@material-ui/core';
import React,{ useState , useContext } from 'react';
import "./PostSender.css";
import DropdownLanguage from './DropdownLanguage';
import DropdownRegion from './DropdownRegion';
import DropdownTag from './DropdownTag';
import { Button,Icon } from 'semantic-ui-react'
import Pimg from "./assets/Pimage.JPG"
import axios from "./axios-instance";
import UserContext from "./UserContext";
import { Tag } from 'reactstrap';



export default function PostSender() {
    const [langue, setLangue] = useState("");    
    const [region, setRegion] = useState("");
    const [categorie, setCategorie] = useState("");
    const [titre, setTitre] = useState("");
    const [text, setText] = useState("");
    const [photo, setPhoto] = useState("");

    const {user:context} = useContext(UserContext)

    const handleSubmit = e => {
        e.preventDefault();
        console.log(context?.token);
        if( context?.token){
            axios.post('/posts',{
                langue,region,titre,categorie,text,
            },{headers:{"Authorization":"Bearer "+context.token}}).then(
                res => console.log(res)
            ).catch(err => console.log(err))
        }
        setLangue("")
setRegion("")
setCategorie("")
setTitre("")
 setText("")
    }

    return (
        <div className="postsender">
            <form onSubmit={handleSubmit} >
            <div className="postsender__top">
                {/*<Avatar className="avatar"/>*/}
                    <img src={"https://avatar.oxro.io/avatar.svg?name="+context?.user?.username.toUpperCase()+"&background=ff6b6b&caps=3&bold=true"} alt="" className="postsenderprofileimg" />
                
                    <div className="postsender__form">
                    <div className="postsender__top__input">
                    <input type="text" className="postsender__title" value={titre} placeholder="Le titre de votre article..." onChange={(e) => setTitre(e.target.value)}></input>
                    <textarea  className="postsender__input" value={text} placeholder="Votre article..." onChange={(e) => setText(e.target.value)}></textarea>
                    </div>
                    <div className="postsender__top__buttons">
                    <button type="submit" className="sendB"> Publier</button>
                    <input type="file" name="file" className="uploadB" />
                    </div>
                    </div>
            </div>
            <div className="postsender__bottom">
                <DropdownLanguage value={langue} onChange={(e,{value}) => {
                    console.log(value)
                    setLangue(value)}}/>
                <DropdownRegion onChange={(e,{value}) => {
                    console.log(value)
                    setRegion(value)}} value={region}/>
                <DropdownTag value={categorie} onChange={(e,{value}) => {
                    console.log(value)
                    setCategorie(value)}}/>
            </div>    
            </form>
            
        </div>
    )
}
