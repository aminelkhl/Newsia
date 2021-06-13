import { Avatar } from '@material-ui/core';
import React from 'react';
import "./PostSender.css";
import DropdownLanguage from './DropdownLanguage';
import DropdownRegion from './DropdownRegion';
import DropdownTag from './DropdownTag';
import { Button,Icon } from 'semantic-ui-react'
import Pimg from "./assets/Pimage.JPG"
export default function PostSender() {
    

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="postsender">
            <div className="postsender__top">
                {/*<Avatar className="avatar"/>*/}
                <img src={Pimg} alt="" className="postsenderprofileimg" />
                <form >
                    <div className="postsender__form">
                    <div className="postsender__top__input">
                    <input type="text" className="postsender__title" placeholder="Le titre de votre article..."></input>
                    <textarea  className="postsender__input" placeholder="Votre article..."></textarea>
                    </div>
                    <div className="postsender__top__buttons">
                    <button onClick={handleSubmit} type="submit" className="sendB"> Publier</button>
                    <input type="file" name="file" className="uploadB" />
                    </div>
                    </div>
                </form>
            </div>
            <div className="postsender__bottom">
                <DropdownLanguage />
                <DropdownRegion />
                <DropdownTag />
            </div>    
            
        </div>
    )
}
