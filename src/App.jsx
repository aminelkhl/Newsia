import "./App.css";
import Header from './Header';
import Home from './Home';
import HomeDiff from './HomeDiff';
import 'semantic-ui-css/semantic.min.css'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Profile from './Profile.jsx';
import Reception from './Reception.jsx';
import UserContext from "./UserContext";
import {useState,useEffect} from "react"
import axios from "./axios-instance"


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
      <Route path="/reception" exact component={Reception}/>
        <Route path="/profile/:id" exact component={Profile}/>
        <Route path="/profile"  exact component={Profile}/>
        
        <Route  path="/Home" exact component={Home}/>
        <Route exact path="" component={Reception}/>
      </Switch>
      </UserContext.Provider>
      
      }
</div>
    </div>
    </BrowserRouter>
  );
}

export default App;
