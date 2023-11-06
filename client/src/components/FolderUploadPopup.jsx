//We need to create a popup for creating the folder name.
import React,{useState} from "react";
import "./FolderUploadPopup.css"


const FolderUploadPopup=({onUpload})=>{
    const [folderName,setFolderName]=useState("")

    const handleFolderUpload=()=>{
        if(folderName.trim()!==""){
            onUpload([{name:folderName,type:"Folder"}])
            setFolderName("")//Reset foldername once it is uploaded
    }
}

return(
    <div className="folder-upload-popup">
        <input
        type="text"
        placeholder="Enter folder name"
        value={folderName}
        onChange={(e)=>setFolderName(e.target.value)}
        />
        <button onClick={handleFolderUpload}>Upload Folder</button>
    </div>

)
}

export default FolderUploadPopup;