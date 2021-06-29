import { Avatar } from '@material-ui/core';
import React from 'react';
import "./RightbarDiff.css";
import Dropdownduree from './Dropdownduree';
import { Button,Icon } from 'semantic-ui-react'
import Pimg from "./assets/Pimage.JPG"
import Widget from "./Widget.jsx";

const handleSubmit = e => {
    e.preventDefault();
}
export default function RightbarDiff() {
    return (
        <div className="rightbarDiffcontainer">
            <div className="main">
                <h1 className="maintitle">Promouvez votre compte</h1>
            </div>
            <div className="rightbarDifftop">
                <img src={Pimg} alt="" className="rightbaravatar" />
                <h4 className="rightbarDiffusername">Amine Lakhal</h4>
            </div>
            <div className="desc">
                <p>Dans cette section vous pouvez publier un article payant, circulant dans la section publlicitaire de tous les récipients pendant une durée bien précise. Le coût dépend de la duée</p>
            </div>
            <div className="rightbarDiffmiddle">
                <div className="titrecontainer">
                <span className="titrespan">Titre : </span>
                <input type="text" className="inputtitle" placeholder="Titre..."/>
                </div>
                <div className="articlecontainer">
                    <span className="articlespan">Article : </span>
                    <textarea name="" id="" cols="30" rows="10" className="articleinput" placeholder="Votre article"></textarea>
                </div>
                <div className="dureecontainer">
                    <span className="dureespan">Durée : </span>
                   {/* <Dropdownduree />*/}
                   <select class="ui dropdown" className="duree">
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
            <button className="subB">Payer</button>
            </div>
     
        </div>
    )
}
