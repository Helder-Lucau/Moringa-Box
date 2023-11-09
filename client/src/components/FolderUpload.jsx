import React, { useState } from "react";
import FolderUploadPopup from "./FolderUploadPopup";

const FolderUpload = ({ onUpload, currentFolder }) => {
  const [showPopup, setShowPopup] = useState(false);
 

  const handleFolderUpload = () => {
    setShowPopup(true);
  };

  return (
    <div>
      <button onClick={handleFolderUpload}>Upload Folder</button>
      {showPopup && (
        <FolderUploadPopup
          onUpload={onUpload}
          setShowPopup={setShowPopup}
        />
      )}
    </div>
  );
};

export default FolderUpload;