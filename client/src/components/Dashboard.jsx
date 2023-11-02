//This is what will be displayed when a user is redirected from Login.
import React,{useState} from "react";
import UserHeader from "./UserHeader";
import UserContent from "./UserContent";


const Dashboard=()=>{

    const[displayFiles,setDisplayFiles]=useState(true);


    return (
        <div className="dashboard">
            <UserHeader/>
            <UserContent displayFiles={displayFiles} setDisplayFiles={setDisplayFiles}/>
        </div>
    )


}
export default Dashboard;