import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import "./Chips.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Chips(props) {
  const classes = useStyles();
   

  

  const handleClick = () => {
    
  };

  return (
    <div className={classes.root}>
      <Chip
        label="All"
        onClick={(e) => props.addFilter("")}
       
      />
      <Chip
        label="#Sport"
        onClick={(e) => props.addFilter("sport".toUpperCase())}
        
      />
      <Chip
        label="#Politique"
        onClick={(e) => props.addFilter("politique".toUpperCase())}
       
      />
      <Chip
        label="#Medecine"
        onClick={(e) => props.addFilter("Medecine".toUpperCase())}
        
      />
      <Chip
        label="#Technologie"
        onClick={(e) => props.addFilter("technologie".toUpperCase())}
        
      />
      <Chip
        label="#Santé"
        onClick={(e) => props.addFilter("santé".toUpperCase())}
        
      />
      <Chip
        label="#Economie"
        onClick={(e) => props.addFilter("Economie".toUpperCase())}
        
      />
      <Chip
        label="#Biologie"
        onClick={(e) => props.addFilter("Biologie".toUpperCase())}
       
      />
      <Chip
        label="#Astronomie"
        onClick={(e) => props.addFilter("Astronomie".toUpperCase())}
        
      />
      <Chip
        label="#Cinema"
        onClick={(e) => props.addFilter("Cinema".toUpperCase())}
        
      />
      <Chip
        label="#Art"
        onClick={(e) => props.addFilter("Art".toUpperCase())}
       
      />
      <Chip
        label="#Culture"
        onClick={(e) => props.addFilter("Culture".toUpperCase())}
    
      />
    </div>
  );
}