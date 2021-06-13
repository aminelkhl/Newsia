import React, { useState } from 'react';
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
        <DropdownItem>Parametres</DropdownItem>
        <DropdownItem>Deconnexion</DropdownItem>
        <DropdownItem divider />
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Parameters;