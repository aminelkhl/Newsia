import './App.css';
import Header from './Header';
import Home from './Home';
import 'semantic-ui-css/semantic.min.css'
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Profile from './Profile.jsx';



function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <div className="app__body">
      <Switch>
        <Route path="/profile" component={Profile}/>
        <Route  path="/Home" component={Home}/>
        <Route exact path="" component={Home}/>
      </Switch>
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
