import "./widget.css"
import pubimg from './assets/pub.jpg';
import Pimg from "./assets/Pimage.JPG"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Widget({data }) {
    return (
            <div className="widget">
            <div className="widgetwrapper"> 
                <div className="widgettop">
                    <div className="widgettopleft">
                        <img src={Pimg} alt="" className="widgetprofileimg" />
                        <span className="widgetusername">{data.user}</span>
                    </div>
                    <div className="widgettopright">
                        <AddCircleOutlineIcon className="widgetfollowB"/>
                    </div>

                </div>
                 <div className="widgetcenter">
                     <img src={pubimg} alt="" className="widgetimg" />
                     <span className="widgettext"> {data.text}</span>

                </div>
            </div>
        </div>
    )
}
export default Widget