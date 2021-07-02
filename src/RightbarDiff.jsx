
import React from 'react';
import "./RightbarDiff.css";
import { Button,Icon } from 'semantic-ui-react'
import UserContext from "./UserContext"
import {useContext} from "react"
import { useState } from 'react';
import axios from "./axios-instance";


export default function RightbarDiff() {

    const {user:context} = useContext(UserContext)
    const [titre,setTitre]=useState("")
    const [text,setText]=useState("")
    const [duree,setDuree]=useState("")

    const handleSubmit = e => {
        e.preventDefault();
        console.log(titre,text,duree)
        if( context?.token){
            axios.post('/publicite',{
                titre,text,duree
            },{headers:{"Authorization":"Bearer "+context.token}}).then(
                res => console.log(res)
            ).catch(err => console.log(err))
        }
        e.target.reset()
        setTitre("")
        setText("")
    }

    return (
        <div className="rightbarDiffcontainer">
            <div className="main">
                <h1 className="maintitle">Promouvez votre compte</h1>
            </div>
            <div className="rightbarDifftop">
                <img src={"http://localhost:8000/api/userPhoto/"+context?.user?.id} alt="" className="rightbaravatar" />
                <h4 className="rightbarDiffusername">{context?.user?.username}</h4>
            </div>
            <div className="desc">
                <p>Dans cette section vous pouvez publier un article payant, circulant dans la section publlicitaire de tous les récipients pendant une durée bien précise. Le coût dépend de la duée</p>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="rightbarDiffmiddle">
                <div className="titrecontainer">
                <span className="titrespan">Titre : </span>
                <input type="text" className="inputtitle" value={titre} onChange={(e)=> setTitre(e.target.value)} placeholder="Titre..."/>
                </div>
                <div className="articlecontainer">
                    <span className="articlespan">Article : </span>
                    <textarea name="" id="" cols="30" rows="10" className="articleinput" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Votre article"></textarea>
                </div>
                <div className="dureecontainer">
                    <span className="dureespan">Durée : </span>
                   {/* <Dropdownduree />*/}
                   <select class="ui dropdown" onChange={(e)=> setDuree(e.target.value)} className="duree">
                        <option value="">Durée </option>
                        <option value="1">1 Jour</option>
                        <option value="7">7 Jours</option>
                        <option value="15">15 Jours</option>
                        <option value="30">30 Jours</option>
                    </select>
                </div>
                <div className="addphotocontainer">

                </div>
            </div>
            <div className="rightbarDiffbot">
            <input type="file" name="file" className="uploadphoto" />
            </div>
            <div className="boutoncont">
            <Button type='submit' className="subB">Payer</Button>
            </div>
            </form>
           
     
        </div>
    )
}
