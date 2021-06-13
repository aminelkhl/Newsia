import React from 'react'
import Pimg from "./assets/Pimage.JPG"
import {MoreVert} from "@material-ui/icons"
import './contenent.css';
import image from './assets/1.jpg';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SendIcon from '@material-ui/icons/Send';

export default function Contenent() {
    return (
        <div className="contenent">
            <div className="contentwrapper"> 
                <div className="contenttop">
                    <div className="contenttopleft">
                        <img src={Pimg} alt="" className="contentprofileimg" />
                        <span className="contentusername">Lakhal Amine</span>
                        <span className="contentdate">5 minutes</span>
                    </div>
                    <div className="contenttopright">
                        <MoreVert />
                    </div>

                </div>
                 <div className="contentcenter">
                     <img src={image} alt="" className="contentimg" />
                     <span className="contenttext"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>

                </div>
                <div className="contentbottom">
                    <div className="contentbottomlike">
                        <WhatshotIcon className="likeicon"/>
                        <span className="likescounter">5 J'aimes</span>
                    </div>
                     <div className="contentbottomcomment">
                        <span className="commentcounter"> 10 commentaires</span>
                     </div>
                </div>
                    <div className="contentcomment">
                            <input type="text" placeholder="Votre commentaire ..." className="comment_text"/>
                            <SendIcon className="commentsendB"/>
                   
                     </div>

            </div>

            
        </div>
    )
}
