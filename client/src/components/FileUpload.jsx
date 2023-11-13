import React, { useState } from "react";

const FileUpload = ({ onUpload , setFile}) => {
  const handleFileUpload = (event) => {
    setFile(event.target.files);
    // const files = event.target.files;
    // console.log(".....................FileUpload")
    // console.log(files); // Add this line to debug
     onUpload(files);
  };

  return <input type="file" onChange={handleFileUpload} multiple />;
};

export default FileUpload;
