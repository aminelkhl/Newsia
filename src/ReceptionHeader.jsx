import React, {useEffect, useState} from 'react'
import { AppBar , IconButton , Toolbar, Collapse } from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort';
import "./ReceptionHeader.css";
import Logo from './assets/NewsiaLogo.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link as Scroll } from 'react-scroll';
import ConnectButton from './ConnectButton.jsx'
import InscriptionButton from './InscriptionButton.jsx';


export default function ReceptionHeader() {
    const [checked,setChecked]= useState(false);
    useEffect(() => {
        setChecked(true);
    },[]);
    return (
        <div className="recmain" id="header">
            <AppBar className="appbar" elevation={0}>
            <Toolbar className="toolbar">
            <img src={Logo} alt="" className="logo"/>
            <div className="connectReg">
            <InscriptionButton />
            <ConnectButton />
            {/*<button className="connect">Connection</button>*/}

            </div>
            </Toolbar>
            </AppBar>  
            <Collapse 
            in={checked}
            {...(checked ? {timeout: 1000} : {})}
            collapsedHeight={50}
            >
            <div className="center">
                <h1 className="title">
                    Bienvenue dans <br /> 
                    <span className="colortext"> NEWSIA. </span>
                </h1>
                <Scroll to="staff" smooth={true}>
                <IconButton className="downicon">
                    <ExpandMoreIcon className="goDown" />
                </IconButton>
                </Scroll>
            </div>
            </Collapse>
        </div>
    )
}
