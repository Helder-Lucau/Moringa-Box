//These are the content to be displayed on the page
import React from "react";
import FileUpload from "./FileUpload";
import FileTable from "./FileTable";
import FolderUpload from "./FolderUpload";


const UserContent=({displayFiles,setDisplayFiles})=>{

    return (
        <div className="content">
            <div className="dashboard-info">
                <span>Dashboard</span>
                <div className="dropdown">
                    <span>Show:  </span>
                    <select 
                    value={displayFiles?"Files":"Folders"}
                    onChange={()=>setDisplayFiles(!displayFiles)}
                    >
                        <option value="Files">Files</option>
                        <option value="Folders">Folders</option>
                    </select>
                </div>
            </div>
            <div className="upload-buttons">
                <FileUpload/>
                <FolderUpload/>
            </div>
            <FileTable displayFiles={displayFiles}/>
        </div>
    )

}
export default UserContent;