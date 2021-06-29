import React from 'react';
import "./InscriptionButton.css"
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Button, IconButton }from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';
import InscriptionTab from './InscriptionTab';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function InscriptionButton() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleToggle} className="inscB">
        Inscrition
      </Button>
      <Backdrop className={classes.backdrop} open={open}>
        <div className="insccontainer">
            <IconButton onClick={handleClose} className="exitB">
                <ClearIcon  className="exit"/>
            </IconButton>
            <InscriptionTab />
        </div>
      </Backdrop>
    </div>
  );
}