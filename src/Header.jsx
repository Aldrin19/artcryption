import React from "react";
import './styles/Header.css';
import logo from './images/logo.png';
import search_icon from './images/search_icon.png';
import icon_heart from './images/icon_heart.png';
import icon_notification from './images/icon_notification.png';
import icon_carshop from './images/icon_carshop.png';
import icon_logout from './images/icon_logout.png';
import profile_photo from './images/profile_photo.png';

   export function Header(){
    return (<div className="container-header">
               
                   <div className="logo">
                       <img src={logo} alt="" />
                       <label htmlFor="">Artcryption</label>
                     </div>
                   
                     <div className="items-1">
                         <a href="">how it works</a>
                         <a href="">drops</a>
                         <a href="">pop-ups</a>
                         <a href="">analytics</a>
                         <a href="">feed</a>
                         <a href="">my collections</a>
                     </div>
                     <div
                     className="items-2">
                         <a href=""><img src={ search_icon} alt="" /></a>
                         <a href=""><img src={ icon_heart} alt="" /></a>
                         <a href=""><img src={ icon_carshop} alt="" /></a>
                         <a href=""><img src={ icon_notification}alt="" /></a>
                         <a href=""><img src={ icon_logout} alt="" /></a>
                         <img src={profile_photo} alt="" id="profile_photo"/>
                     </div>
                    
            </div>)
              
}

