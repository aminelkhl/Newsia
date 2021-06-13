import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import "./Chips.css";

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

export default function Chips() {
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
        label="#Sport"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="#Politique"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="#Finance"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="#Technologie"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      <Chip
        label="#Santé"
        onClick={handleClick}
        onDelete={handleDelete}
      />
      
    </div>
  );
}