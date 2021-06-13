import "./widget.css"
import pubimg from './assets/pub.jpg';
import Pimg from "./assets/Pimage.JPG"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Widget() {
    return (
            <div className="widget">
            <div className="widgetwrapper"> 
                <div className="widgettop">
                    <div className="widgettopleft">
                        <img src={Pimg} alt="" className="widgetprofileimg" />
                        <span className="widgetusername">Lakhal Amine</span>
                    </div>
                    <div className="widgettopright">
                        <AddCircleOutlineIcon className="widgetfollowB"/>
                    </div>

                </div>
                 <div className="widgetcenter">
                     <img src={pubimg} alt="" className="widgetimg" />
                     <span className="widgettext"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>

                </div>
            </div>
        </div>
    )
}
export default Widget