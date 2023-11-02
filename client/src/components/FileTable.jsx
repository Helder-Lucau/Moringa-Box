//This the table that will contain all the files and folders
import React,{useState} from "react";


const FileTable=()=>{

    const handleDelete=()=>{
        //implement logic to handle deletion of files and folders
    }

    const handleDownload=()=>{
        //implement logic to handle download of files and folders
    }

    return(
        <div className="file-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>

    )
}

export default FileTable;