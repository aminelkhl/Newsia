import React from 'react'
import "./Sidebar.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Chips from './Chips';
import TabNotifDiff from './TabNotifDiff';
import mosaique from "./assets/mosaique.jpeg";
import Pimg from "./assets/Pimage.JPG"
import AddCategorie from './AddCategorie'


export default function Sidebar() {
    return (
        <div className="wrapper_sidebar">
        <div className="sidebar">     
            <div className="sidebar__top">
            <img src={Pimg} alt="" className="sidebarprofileimg" />
                {/*<AccountCircleIcon fontSize="large" />*/}
                <h4 className="sidebarusername"> Amine LAKHAL</h4>
            </div>
            <div className="hr">
                <hr/>

            </div>
          
            <div className="sidebar__bot">
                
                <div className="sidebar__bot__notifications">
                    {/*<TabNotifDiff />*/}
                    <Chips />
                    <div className="sidebaraddcategorie">
                    <AddCategorie className="addCat"/>
                    </div>
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
