import React from "react";
import FileUpload from "./FileUpload";
import FileTable from "./FileTable";
import FolderUpload from "./FolderUpload";
import "./UserContent.css";

const UserContent = ({ displayFiles, setDisplayFiles, uploadedFiles, setUploadedFiles }) => {
  const handleFileUpload = (newFiles) => {
    const files = newFiles.map(file => ({ name: file.name, type: 'file' }));
    setUploadedFiles([...uploadedFiles, ...newFiles]);
  };

  const handleFolderUpload = (newFolders) => {
    const folders = newFolders.map(folder => ({ name: folder.name, type: 'folder' }));
    setUploadedFiles([...uploadedFiles, ...newFolders]);
  };

  const handleDelete = (file) => {
    const updatedFiles = uploadedFiles.filter((f) => f !== file);
    setUploadedFiles(updatedFiles);
  };

  const handleDownload = (file) => {
    // Implement logic to handle file download
    console.log(`Downloading ${file.name}`);
  };
  console.log(uploadedFiles)

  return (
    <div className="content">
      <div className="dashboard-info">
        <span>Dashboard</span>
        <div className="dropdown">
          <span>Filter: </span>
          <select value={displayFiles ? "Files" : "Folders"} onChange={() => setDisplayFiles(!displayFiles)}>
            <option value="Files">Files</option>
            <option value="Folders">Folders</option>
          </select>
        </div>
      </div>
      <div className="upload-buttons">
        <FileUpload onUpload={handleFileUpload} />
        <FolderUpload onUpload={handleFolderUpload} />
      </div>
      <FileTable files={uploadedFiles} displayFiles={displayFiles} onDelete={handleDelete} onDownload={handleDownload} />
    </div>
  );
};

export default UserContent;
