import React from 'react'
import "./Header.css";
import logo from "./assets/NewsiaLogo.png"
import SearchIcon from '@material-ui/icons/Search';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import LanguageIcon from '@material-ui/icons/Language';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import { IconButton } from '@material-ui/core';
import Parameters from './Parameters';
import Pimg from "./assets/Pimage.JPG"
import UserContext  from "./UserContext"
import { useContext } from 'react';
import {Link} from 'react-router-dom';
function Header() {
    const {user} = useContext(UserContext)
    return (
    <div className="header">
        <div className="header__left">
            <img  src={logo} alt=""/> 
            <div className="header__input" > 
            <input type="text" placeholder="Recherche NEWSIA ..."/>  
            <SearchIcon />
            </div>
        </div>
        <div className="header__middle">
           <div className="header__option">
           <Link to="/Home/" className="homeB"><HomeIcon  fontSize="large" /></Link>
            </div>
            <div className="header__option">
                <GTranslateIcon fontSize="large" />
            </div>
            <div className="header__option">
                <LanguageIcon fontSize="large" />
            </div>
           
                {   user?.user?.role_id === 7  &&
                     <div className="header__option">
                        <PersonAddIcon fontSize="large" />
                    </div>
                }
                
            
        </div>
        <div className="header__right">
            <div className="header__profile">
            <a href="http://localhost:3000/profile" className="profileheader"><img src={Pimg} alt="" className="headerprofileimg" /></a>
            <a href="http://localhost:3000/profile" className="profileheaderh4"><h4>Amine </h4></a>
            </div>
        </div>
        <IconButton>
            <Parameters />
        </IconButton>    
        
    </div>
    )
}

export default Header
