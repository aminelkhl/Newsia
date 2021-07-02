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
        <Link to="/Home/profileparams" className="parameters"> <DropdownItem  >Parametres</DropdownItem></Link>
        <a href="/" className="deconnection" onClick={()=> localStorage.removeItem('token')}><DropdownItem>Deconnexion</DropdownItem></a>
        <DropdownItem divider />
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Parameters;