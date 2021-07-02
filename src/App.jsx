import "./App.css";
import Header from './Header';
import Home from './Home';
import HomeDiff from './HomeDiff';
import 'semantic-ui-css/semantic.min.css'
import {Route, BrowserRouter, Switch,Redirect} from 'react-router-dom'
import Profile from './Profile.jsx';
import Reception from './Reception.jsx';
import UserContext from "./UserContext";
import {useState,useEffect} from "react"
import axios from "./axios-instance"
import Recherche from './Recherche.jsx';
import PrivateRoute from "./PrivateRoute";
function App() {
  const [user , setUser] = useState({})
  const [loading , setLoading] = useState(true)
  
  useEffect(() => {
    const token = localStorage.getItem("token")

    if (!token ){
      setLoading(false)
      return 
    }
        
    axios.get("/user",{headers:{"Authorization":"Bearer "+token}}).then(res => {
      setUser({token,user:res.data})
      setLoading(false)

    }).catch(err => {setLoading(false)})
    
  }, [])
  console.log(loading , user)
  return (
    <BrowserRouter>
    <div className="app">
      <div className="app__body">
      { !loading && 
      <UserContext.Provider value={{user,setUser,loading}}>
      <Switch>
      
        <PrivateRoute path="/profile/:id" exact component={Profile}/>
        <PrivateRoute path="/profile"  exact component={Profile}/>
        <PrivateRoute path="/Home/recherche" exact component={Home} />
        <PrivateRoute  path="/Home" exact component={Home}/>
        <Route  path="/"  component={Reception}/>
      </Switch>
      </UserContext.Provider>
      
      }
</div>
    </div>
    </BrowserRouter>
  );
}

export default App;
