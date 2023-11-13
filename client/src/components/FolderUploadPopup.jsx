import React, { useState }  from "react";
import "./FolderUploadPopup.css";

const FolderUploadPopup = ({ onUpload, setShowPopup }) => {

  const [folderName, setFolderName] = useState(""); // Initialize folderName state

  const handleFolderUpload = () => {
    onUpload(folderName);
    setShowPopup(false);
  };
  
  return (
    <div className="folder-upload-popup">
      <input
        type="text"
        placeholder="Enter folder name"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
      />
      <button onClick={handleFolderUpload}>Upload Folder</button>
    </div>
  );
};

export default FolderUploadPopup;
