import React, { useState } from "react";
import FolderUploadPopup from "./FolderUploadPopup";

const FolderUpload = ({ onUpload }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleFolderUpload = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <button onClick={handleFolderUpload}>Upload Folder</button>
      {showPopup && <FolderUploadPopup onUpload={(newFolders) => {
        onUpload(newFolders);
        setShowPopup(false);
      }} />}
    </div>
  );
};

export default FolderUpload;