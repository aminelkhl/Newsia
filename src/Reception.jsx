import React from 'react'
import "./Reception.css";
import './ReceptionHeader.jsx'
import ReceptionHeader from './ReceptionHeader.jsx';
import Staff from './Staff.jsx';
import Img from './assets/news.jpg'

export default function Reception() {
    return (
        <div className="receptioncontainer">
            <ReceptionHeader />
            <Staff />
            <div className="description">
                <div className="pack"><span className="destext">NEWSIA est une plateforme de média social orientée actualités qui permet aux organisations sources d’actualité de créer et publier du contenu ainsi que lancer des diffusions directes. D’un autre côté cette plateforme permet l’interlocuteur des actualités de consulter et interagir avec des profils Diffuseur et leurs contenus.
                <br/> Vous pouvez vous inscrire au tant que diffuseur si vous avez une organization ou immatricule de presse. Sinon vous pouvez consulter toute actualité dans different catégories en toute sicurité.</span>
<img src={Img} alt="" className="imagenews" /></div>

            </div>
            
        </div>
    )
}
