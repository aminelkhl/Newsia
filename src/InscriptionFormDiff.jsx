import React, { useState } from "react";
import "./InscriptionFormDiff.css";
import DatePicker from "react-datepicker";


export default function InscriptionFormDiff() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="incformintercontainer">
            <form>
                <div className="prenom">
                    <label className="penomlabel">Prénom : </label>
                    <input type="text" className="prenominput" placeholder="Votre prénom" required/>
                </div>
                <div className="nom">
                    <label className="nomlabel">Nom : </label>
                    <input className="nominput" placeholder="Votre nom" required/>
                </div>
                <div className="username">
                    <label className="usernamelabel">Nom d'utilisateur : </label>
                    <input type="text" className="usernameinput" placeholder="Le nom d'utilisateur" required/>
                </div>
                <div className="email">
                    <label className="emaillabel">E-mail : </label>
                    <input type="email" className="emailinput" placeholder="Votre email" required/>
                </div>
                <div className="password">
                    <label className="passwordlabel">Mot de passe : </label>
                    <input type="password" className="passwordinput" placeholder="Le mot de passe" required/>
                </div>
                <div className="sexe">
                    <label className="sexelabel">Sexe : </label>
                    <input type="radio" name="sexe" value="homme" className="sexeinput" defaultChecked/>
                    <label className="malelab"> Homme </label>
                    <input type="radio" name="sexe" value="femme" className="sexeinput" />
                    <label className="malelab">Femme</label>
                </div>
                <div className="phone">
                    <label className="phonelabel">Telephone : </label>
                    <input type="text" className="phoneinput" placeholder="Votre telephone" required/>
                </div>
                <div className="bday">
                    <label className="bdlabel">Date de naissance : </label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="bddate"/>
                </div>
                <div className="photo">
                    <label className="photolabel">Photo de profil :</label>
                    <input type="file" name="photo" className="pdp" />
                </div>
                <div className="adress">
                    <label className="adresslabel">Adresse : </label>
                    <textarea name="" id="" cols="30" rows="3" className="adressinput" placeholder="Votre adresse" required></textarea>
                </div>
                <div className="submit">
                    <input type="submit" value="S'inscrire" className="submitb" />
                </div>

            </form>
        </div>
    )
}

