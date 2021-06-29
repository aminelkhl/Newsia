import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import "./ChipsList.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

export default function ChipsList() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <div className={classes.root}>
      <Chip
        label="#Cinema"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="#Art"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="#Culture"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="#Medecine"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="#Climat"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      
    </div>
  );
}