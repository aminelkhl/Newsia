import "./liveF.css"
import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const LiveF = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="togglelive">
      <Button className="bouton" onClick={toggle} style={{ marginBottom: '1rem' }}>Passer en direct</Button>
      <Collapse isOpen={isOpen}>
        <Card className="cadre">
          <CardBody>
          <div className="liveform">
              <span className="livelabel">
                  Lien du passage en direct :
              </span>
              
              <div className="inputlivediv">
              <input type="text" className="livelinkinput" placeholder="Lien ..."/>
              </div>
              
              <span className="livelabel">
                  Le direct est :
              </span>
              <br />
              <input type="radio" className="radiolive" name="liveradio" value="video"/>
              <span className="livetype">Video</span>
              <br />
              <input type="radio" className="radiolive" name="liveradio" value="audio"/>
              <span className="livetype">Audio</span>
              <br />
              <div className="boutonlivediv">
            <button className="liveformbutton"> Confirmer </button>
            </div>

          </div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default LiveF;