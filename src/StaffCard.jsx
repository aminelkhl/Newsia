import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from './assets/Pimage.JPG';
import personnes from './personnes';
import { Collapse } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background: "rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
      height: 440,
  },
  title: {
      fontFamily: "'Rozha One', serif",
      fontSize: "2rem",
      color: "#fff",
  },
  desc: {
    fontFamily: "'Rozha One', serif",
    fontSize: "1.1rem",
    color: "#ddd",
  },
});

export default function StaffCard({personne,image,checked}) {
  const classes = useStyles();

  return (
      <Collapse in={checked} { ... (checked ? { timeout: 1000 } : {})}>
    <Card className={classes.root}>
        <CardMedia
        className={classes.media}
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {personne.nom}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
            {personne.desc}
          </Typography>
        </CardContent>
    </Card>
    </Collapse>
  );
}