import "./HomeDiff.css"
import Sidebar from './Sidebar';
import Feed from './Feed';
import Header from './Header';
import RightbarDiff from './RightbarDiff.jsx';
import ProfileParameter from './ProfileParameter.jsx'
import { thisExpression } from "@babel/types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function HomeDiff() {
    return (
        <BrowserRouter>
        <div className="home">

            <Header />
            <div className="home_body">

            <Sidebar className="sidebar"/>
            <Switch>
            {/*<Route exact path="/Home/feed" component={Feed}/>*/}
            <Route  path="/Home/profileparams" exact component={ProfileParameter}/>
            <Route  path="/Home/" exact component={Feed}/>
            <Route  path="/" exact component={Feed}/>
            {/*<Route exact path="/feed" component={ProfileParameter}/>*/}
            {/*<Feed/>*/}
            </Switch>
            <RightbarDiff />

            </div>
        </div>
        </BrowserRouter>
    )
}
