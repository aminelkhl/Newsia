import "./Approuve.css";
import React,{useState,useContext,useEffect} from 'react';
import UserContext from "./UserContext"
import axios from "./axios-instance"
import { Table } from 'reactstrap';
import { IconButton } from "@material-ui/core";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const Approuve = (props) => {
    const {user:context} = useContext(UserContext)
    const [demandes, setDemandes] = useState([])
    useEffect(()=>{
        axios.get("/approuve",{headers:{"Authorization":"Bearer "+context.token}}).then(res=> setDemandes(res.data)).catch(err => console.log(err))
    },[])

    const acceptDemande=(demande)=>{
        axios.post('/registre',{...demande},{headers:{"Authorization":"Bearer "+context.token}}).then(res => setDemandes(pv=> pv.filter(s=>s.id!==demande.id))).catch(err=> console.log(err))
        refuseDemande(demande.id)
    }

    const refuseDemande=(id)=>{
        axios.delete('/delete/'+id,{},{headers:{"Authorization":"Bearer "+context.token}}).then(res => setDemandes(pv=> pv.filter(s=>s.id!==id))).catch(err=> console.log(err))
    }

  return (
    <Table borderless className="tapprouve">
      <thead>
        <tr>
          <th>#</th>
          <th>Nom de l'organisation</th>
          <th>Email de l'organisation</th>
          <th>Telephone</th>
          <th>Adresse </th>
          <th>Immatricule</th>
          <th>Decision </th>
        </tr>
      </thead>
      <tbody>
          {demandes.map((demande,index) => {
              return (<tr>
                <th scope="row">{index+1}</th>
                <td>{demande.companyname}</td>
                <td>{demande.company_email}</td>
                <td>{demande.phone}</td>
                <td>{demande.adress}</td>
                <td>{demande.companyimmat}</td>
                <td className="decision"><IconButton>
                      <CheckCircleOutlineIcon  onClick={()=> acceptDemande(demande)} className="accept"/>
                    </IconButton>
                    <IconButton>
                      <RemoveCircleOutlineIcon onClick={()=> refuseDemande(demande.id)} className="deny"/>
                      </IconButton></td>
              </tr>)
          })}
        
        
      </tbody>
    </Table>
  );
}

export default Approuve;