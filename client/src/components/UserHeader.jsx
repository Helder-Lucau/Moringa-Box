//The specific header of the user that will display in dashboard
import React from "react";
import {Link} from "react-router-dom"


const UserHeader=()=>{
return(
    <div className="header">
        <div className="logo">Logo</div>
        <div className="user-info">Username</div>
        <Link to='/' className="logout-button">Logout</Link>
    </div>
)

}
export default UserHeader;