import React ,{useState} from 'react';
import "./ConnectButton.css"
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Button, IconButton }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import { useHistory } from "react-router-dom";
import axios from "./axios-instance";
import UserContext  from "./UserContext"
import { useContext } from 'react';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function ConnectButton() {
  const {setUser } = useContext(UserContext);
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(true);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const data = {
     email,
     password
    }

    axios.post('/login',data).then(res => {
          console.log(res);
          localStorage.setItem("token",res.data.token);
          setUser(res.data)
          history.push("/home");

    }).catch(err => {
        console.log(err);

    })
  }
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleToggle} className="connectB">
        Connection
      </Button>
      <Backdrop className={classes.backdrop} open={open}>
        <div className="connectcontainer">
        <div className="connectcontainer_top">

            <span> Connection </span>
            <IconButton onClick={handleClose}>
                <ClearIcon  className="exit"/>
            </IconButton>
            </div>
            <form onSubmit={handleSubmit}>
            <div className="username">
                <span className="usernamespan">
                    Nom d'utilisateur :
                </span>
                <input type="text"  value={email}  onChange={e => setEmail(e.target.value)}  placeholder="Nom d'utilisateur..." className="usernameInput" required/>
            </div>
            <div className="password">
                <span className="passwordspan">
                    Mot de passe :
                </span>
                <input type="password" value={password}  onChange={e => setPassword(e.target.value)} placeholder="Mot de passe ..." className="passwordInput" required/>
            </div>
            <div className="boutoncont">
            <input type='submit' className="cnB" value="Connecter"/>
            </div>
            </form>
        </div>
      </Backdrop>
    </div>
  );
}