import React from 'react';
import image from './assets/1.jpg';
import { Icon } from 'semantic-ui-react'
import { Avatar } from '@material-ui/core';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Post = (props) => {
  return (
    <div className="craddiv">
      <Card className="card">
        <CardBody >
            <Avatar />
          <CardTitle tag="h5">User</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src={image} alt="Card image cap" />
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink className="likeB"><Icon name='like' size='large' />J'aime 
        <br />
        <form name="comment__form">
                  <div className="comment__input">
              <input type="text" placeholder="Votre commentaire ..." className="comment_text"/>
              <input type="submit" ></input>
              </div>

  </form>
          </CardLink><br/>        
        </CardBody>
        
      </Card>
    </div>
  );
};

export default Post