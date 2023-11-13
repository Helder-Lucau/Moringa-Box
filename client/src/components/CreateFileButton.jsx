import React, { useState } from "react";

const CreateFileButton = ({ currentFolder, onUpload }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleCreateFile = () => {
    if (fileName.trim() !== "") {
      const newFile = { name: fileName, type: "file", folder: currentFolder };
      onUpload([newFile]);
      setShowPopup(false);
      setFileName("");
    }
  };

  return (
    <div>
      <button onClick={() => setShowPopup(true)}>Create File</button>
      {showPopup && (
        <div className="popup">
          <input
            type="text"
            placeholder="Enter file name"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
          />
          <button onClick={handleCreateFile}>Create</button>
        </div>
      )}
    </div>
  );
};

export default CreateFileButton;
