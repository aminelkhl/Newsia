import React ,{useContext} from 'react'
import "./Sidebar.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Chips from './Chips';
import TabNotifDiff from './TabNotifDiff';
import mosaique from "./assets/mosaique.jpeg";
import Pimg from "./assets/Pimage.JPG"
import AddCategorie from './AddCategorie'
import UserContext from "./UserContext"

export default function Sidebar(props) {
    const {user:context} = useContext(UserContext)

    return (
        <div className="wrapper_sidebar">
        <div className="sidebar">     
            <div className="sidebar__top">
            <img src={"https://avatar.oxro.io/avatar.svg?name="+context?.user?.username.toUpperCase()+"&background=ff6b6b&caps=3&bold=true"} alt="" className="sidebarprofileimg" />
                {/*<AccountCircleIcon fontSize="large" />*/}
                <h4 className="sidebarusername"> {context?.user?.username}</h4>
            </div>
            <div className="hr">
                <hr/>

            </div>
          
            <div className="sidebar__bot">
                
                <div className="sidebar__bot__notifications">
                    {/*<TabNotifDiff />*/}
                    <Chips addFilter={props.addFilterCat} />
                    
                    <hr className="sidebarFollowingHr" />
                   
                    <div className="sidebarFollowingContainer">
                    <ul className="sidebarFollowingList"></ul>
                        <li className="sidebarFollowing">
                            <img src={mosaique} alt="" className="sidebarFollowingImg"/>
                            <span className="sidebarFollowingName">MosaiqueFm</span>
                        </li>
                        <li className="sidebarFollowing">
                            <img src={mosaique} alt="" className="sidebarFollowingImg"/>
                            <span className="sidebarFollowingName">MosaiqueFm</span>
                        </li>
                        <li className="sidebarFollowing">
                            <img src={mosaique} alt="" className="sidebarFollowingImg"/>
                            <span className="sidebarFollowingName">MosaiqueFm</span>
                        </li>
                        <li className="sidebarFollowing">
                            <img src={mosaique} alt="" className="sidebarFollowingImg"/>
                            <span className="sidebarFollowingName">MosaiqueFm</span>
                        </li>
                        <li className="sidebarFollowing">
                            <img src={mosaique} alt="" className="sidebarFollowingImg"/>
                            <span className="sidebarFollowingName">MosaiqueFm</span>
                        </li>
                        <li className="sidebarFollowing">
                            <img src={mosaique} alt="" className="sidebarFollowingImg"/>
                            <span className="sidebarFollowingName">MosaiqueFm</span>
                        </li>
                        <li className="sidebarFollowing">
                            <img src={mosaique} alt="" className="sidebarFollowingImg"/>
                            <span className="sidebarFollowingName">MosaiqueFm</span>
                        </li>
                        <li className="sidebarFollowing">
                            <img src={mosaique} alt="" className="sidebarFollowingImg"/>
                            <span className="sidebarFollowingName">MosaiqueFm</span>
                        </li>
                        <li className="sidebarFollowing">
                            <img src={mosaique} alt="" className="sidebarFollowingImg"/>
                            <span className="sidebarFollowingName">MosaiqueFm</span>
                        </li>
                        <li className="sidebarFollowing">
                            <img src={mosaique} alt="" className="sidebarFollowingImg"/>
                            <span className="sidebarFollowingName">MosaiqueFm</span>
                        </li>
                        </div>
                    

                </div>

            </div>
            </div>
        </div>
    )
}
