import "./home.css"
import Sidebar from './Sidebar';
import Feed from './Feed';
import FeedRec from './FeedRec';
import Header from './Header';
import Rightbar from './Rightbar.jsx';
import ProfileParameter from './ProfileParameter.jsx'
import { thisExpression } from "@babel/types";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Recherche from './Recherche.jsx';
import PrivateRoute from "./PrivateRoute";
import UserContext from "./UserContext"
import {useContext,useState} from "react"
import RightbarDiff from "./RightbarDiff";

 function Home() {
    const {user:context} = useContext(UserContext)
    const [filterRegion,addRegion] = useState("")
    const [filterLangue,addLangue] = useState("")
    const [filterCat,addCat] = useState("")

    return ( 
    <BrowserRouter>
        <div className="home">

            <Header addFilterRegion={(v)=> addRegion(v)}  addFilterLangue={(v)=> addLangue(v)} />
            <div className="home_body">

            <Sidebar  className="sidebar" addFilterCat={(v)=> addCat(v)}/>
            <Switch>
            {/*<Route exact path="/Home/feed" component={Feed}/>*/}
            <PrivateRoute path="/Home/recherche" exact component={Recherche} />
            <PrivateRoute  path="/Home/profileparams" exact component={ProfileParameter}/>
            <PrivateRoute  path="/Home/" exact component={()=> <Feed filterCat={filterCat} filterLangue={filterLangue} filterRegion={filterRegion}></Feed>} />
            
            {/*<Route exact path="/feed" component={ProfileParameter}/>*/}
            {/*<Feed/>*/}
            </Switch>
            {context?.user?.role_id ===5 ? 
                <RightbarDiff /> : <Rightbar />
            }
            </div>
        </div>
        </BrowserRouter>
    )
}

export default Home