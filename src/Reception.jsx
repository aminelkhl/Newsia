import React from 'react'
import "./Reception.css";
import './ReceptionHeader.jsx'
import ReceptionHeader from './ReceptionHeader.jsx';
import Staff from './Staff.jsx';

export default function Reception() {
    return (
        <div className="receptioncontainer">
            <ReceptionHeader />
            <Staff />
            
        </div>
    )
}
