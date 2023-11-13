//The specific header of the user that will display in dashboard
import React from "react";
import { Link } from "react-router-dom"
import "./UserHeader.css"


const UserHeader = (props) => {
    const { username } = props;
    console.log(username)
    return (
        <div className="header">
            <div className="logo">
                <h1 className='md:text-3xl text-xl font-semibold text-white'>M-<span className='text-red-600'>BOX.</span></h1>
            </div>
            <div className="user-info">{username}</div>
            <Link to='/' className="logout-button">Logout</Link>
        </div>
    )

}
export default UserHeader;