import React from 'react'
import "./Staff.css";
import StaffCard from './StaffCard.jsx';
import personnes from './personnes.jsx';
import Aimage from "./assets/Pimage.JPG";
import Mimage from "./assets/Pimage2.jpg";
import useWindowPosition from "./assets/useWindowPosition.jsx";
export default function Staff() {
const checked = useWindowPosition('header');
    return (
        <div className="staff" id="staff">
            <StaffCard personne={personnes[1]} image={Mimage} checked={checked}/>
            <StaffCard personne={personnes[0]} image={Aimage} checked={checked}/>
            
        </div>
    )
}
