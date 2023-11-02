import React from "react";


const FileUpload=()=>{

    const handleFileUpload=()=>{
        //implement logic to handle file upload
    }

    return(
        <input type="file" onChange={handleFileUpload}/>
    )
}
export default FileUpload;