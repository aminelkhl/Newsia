import React, { useState } from "react";
import "./InscriptionFormInter.css";
import { useHistory } from "react-router-dom";
import axios from "./axios-instance"
import DatePicker from "react-datepicker";


export default function InscriptionFormInter() {
    const [startDate, setStartDate] = useState(new Date());
    const [firstname, setFirstName] = useState("");
    const [lastname, setlastname] = useState("");
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [sexe, setSexe] = useState("homme");
    const [adress, setAdress] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");



   
    

    
    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            firstname,
            lastname,
            username,
            email,
            password,
            sexe,
            adress,
            phone,
            role_id:4
        }

        axios.post('/register',data).then(res => {
                console.log(res);
              

        }).catch(err => {
            console.log(err);


        })
    }
    return (
        <div className="incformintercontainer">
           
            <form onSubmit={onSubmit}>
                <div className="prenom">
                    <label className="penomlabel">Prénom : </label>
                    <input type="text"  value={firstname} className="prenominput" onChange={(e) => setFirstName(e.target.value)} placeholder="Votre prénom" required/>
                </div>
                <div className="nom">
                    <label className="nomlabel">Nom : </label>
                    <input className="nominput"  value={lastname} onChange={(e) => setlastname(e.target.value)} placeholder="Votre nom" required/>
                </div>
                <div className="username">
                    <label className="usernamelabel">Nom d'utilisateur : </label>
                    <input type="text" className="usernameinput"  value={username} onChange={(e) => setusername(e.target.value)} placeholder="Le nom d'utilisateur" required/>
                </div>
                <div className="email">
                    <label className="emaillabel">E-mail : </label>
                    <input type="email" className="emailinput"  value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Votre email" required/>
                </div>
                <div className="password">
                    <label className="passwordlabel">Mot de passe : </label>
                    <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} className="passwordinput" placeholder="Le mot de passe" required/>
                </div>
                <div className="sexe">
                    <label className="sexelabel">Sexe : </label>
                    <input type="radio" name="sexe" value="homme" onChange={e => setSexe("homme") } className="sexeinput" defaultChecked/>
                    <label className="malelab"> Homme </label>
                    <input type="radio" name="sexe" value="femme" onChange={e => setSexe("femme") } className="sexeinput" />
                    <label className="malelab">Femme</label>
                </div>
                <div className="phone">
                    <label className="phonelabel">Telephone : </label>
                    <input type="number" className="phoneinput"  value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Votre telephone" required />
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
                    <textarea name="" id="" cols="30" rows="3"  value={adress} onChange={(e) => setAdress(e.target.value)} className="adressinput" placeholder="Votre adresse" required></textarea>
                </div>
                <div className="submit">
                    <input type="submit"  value="S'inscrire" className="submitb" />
                </div>

            </form>
        </div>
    )
}
