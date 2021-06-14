import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./Parameters.css";
const Parameters = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown direction="left" isOpen={dropdownOpen} toggle={toggle} className="parameter">
      <DropdownToggle caret className="toggle">
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem disabled>Amine LAKHAL</DropdownItem>
        <Link to="/Home/profileparams" className="parameters"> <DropdownItem to="/Home/profileparams" >Parametres</DropdownItem></Link>
        <DropdownItem>Deconnexion</DropdownItem>
        <DropdownItem divider />
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Parameters;