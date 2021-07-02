import React, { useState,useContext } from "react";
import "./InscriptionFormDiff.css";
import DatePicker from "react-datepicker";
import UserContext from "./UserContext"
import axios from "./axios-instance"


export default function InscriptionFormDiff(props) {
    const [startDate, setStartDate] = useState(new Date());
    const [firstname, setFirstName] = useState("");
    const [lastname, setlastname] = useState("");
    const [username, setusername] = useState("");
    const [email, setEmail] = useState("");
    const [sexe, setSexe] = useState("homme");
    const [adress, setAdress] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [companyname, setCompanyname]= useState("");
    const [company_email, setCompany_email] = useState("");
    const [companyphone, setCompanyphone] = useState("");
    const [companyadress, setCompanyadress] = useState("");
    const [companyimmat, setCompanyimmat] = useState("");
    const [description, setDescription] = useState("");
    
    const {user:context} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/approuve",{firstname,lastname,username,email,sexe,adress,password,phone,companyname,company_email,companyphone,companyadress,companyimmat,description,role_id:5},{headers:{"Authorization":"Bearer "+context.token}}).then(res => console.log(res)).catch(err => console.log(err))
        props.close()
    }


    return (
        <div className="inscdiff">
            <form onSubmit={handleSubmit}>
        <div className="incformintercontainer">
            
                <div className="prenom">
                    <label className="penomlabel">Prénom : </label>
                    <input type="text" value={firstname} className="prenominput" onChange={(e) => setFirstName(e.target.value)} placeholder="Votre prénom" required/>
                    <label className="usernamelabel">Nom d'organisation : </label>
                    <input type="text" value={companyname} className="usernameinput" onChange={(e) => setCompanyname(e.target.value)} placeholder="Le nom de l'organisation" required/>
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
                    <label className="emaillabel">E-mail organisation: </label>
                    <input type="email" className="emailinput" value={company_email} onChange={(e) => setCompany_email(e.target.value)} placeholder="Email de l'organisation" required/>
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
                    <label className="phonelabel">Telephone de l'organisation : </label>
                    <input type="text" className="phoneinput" value={companyphone} onChange={(e) => setCompanyphone(e.target.value)}placeholder="Telephone de l'organisation" required/>
                </div>
                <div className="bday">
                    <label className="bdlabel">Date de naissance : </label>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="bddate"/>
                    <label className="adresslabel">Adresse de l'organisation : </label>
                    <textarea name="" id="" cols="30" rows="1"  value={companyadress} onChange={(e) => setCompanyadress(e.target.value)} className="adressinput" placeholder="Votre adresse" required></textarea>
                </div>
                <div className="photo">
                    <label className="photolabel">Photo de profil :</label>
                    <input type="file" name="photo" className="pdpu" />
                    <label className="immatlabel">Immatricule : </label>
                    <input type="text" className="usernameinput" value={companyimmat}  onChange={(e) => setCompanyimmat(e.target.value)} placeholder="L'immatricule de l'organisation" required/>
                </div>
                <div className="adress">
                    <label className="adresslabel">Adresse : </label>
                    <textarea name="" id="" cols="30" rows="1"  value={adress} onChange={(e) => setAdress(e.target.value)} className="adressinput" placeholder="Votre adresse" required></textarea>
                    <label className="adresslabel">Description :</label>
                    <textarea name="" id="" cols="30" rows="1" className="adressinput" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description de l'organisation " required></textarea>
                </div>
                <div className="submit">
                    <input type="submit" value="S'inscrire" className="submitb" />
                </div>
                
                
           
        </div>
        </form>
        </div>
    )
}

