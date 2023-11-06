import React from "react";

const FileUpload = ({ onUpload,targetFolder }) => {
  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files);
    onUpload(newFiles);
  };

  return <input type="file" onChange={handleFileUpload} />;
};

export default FileUpload;
