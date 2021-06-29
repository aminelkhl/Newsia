import "./AddCategorie.css"
import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import AddIcon from '@material-ui/icons/Add';
import ChipsList from "./ChipsList";

const AddCategorie = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="togglelive">
      <Button className="bouton" onClick={toggle} style={{ marginBottom: '1rem' }}> <AddIcon fontSize="large" className="addiconb"/> </Button>
      <Collapse isOpen={isOpen}>
        <Card className="cadre">
          <CardBody>
          <div className="categorielist">
              <ChipsList/>

          </div>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default AddCategorie;
