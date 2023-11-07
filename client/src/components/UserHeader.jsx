//The specific header of the user that will display in dashboard
import React from "react";
import {Link} from "react-router-dom"
import "./UserHeader.css"
import logosimage from "../assets/logo.png";


const UserHeader=(props)=>{
    const {username}=props;
    console.log(username)
return(
    <div className="header">
        <div className="logo">
            <img src={logosimage} alt="Logo"/>
        </div>
        <div className="user-info">{username}</div>
        <Link to='/' className="logout-button">Logout</Link>
    </div>
)

}
export default UserHeader;