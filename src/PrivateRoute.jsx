import {Route , Redirect } from "react-router";

function isLogin() {
    return localStorage.getItem("token") 
}
const PrivateRoute = ({component: Component, ...rest}) => {
    return (
  
        
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
  };

  export default PrivateRoute;