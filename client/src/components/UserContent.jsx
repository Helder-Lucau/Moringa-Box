import React, { useState } from "react";
import FileUpload from "./FileUpload";
import FileTable from "./FileTable";
import FolderUpload from "./FolderUpload";
import "./UserContent.css";

const UserContent = ({
  displayFiles,
  setDisplayFiles,
  uploadedFiles,
  setUploadedFiles,
  currentFolder,
  setCurrentFolder,
  onCreateFile,
  onMoveFile,
}) => {
  const handleFileUpload = (newFiles, targetFolder) => {
    const files = newFiles.map((file) => ({ name: file.name, type: "file" }));
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const handleFolderUpload = (newFolders, targetFolder) => {
    const folders = newFolders.map((folder) => ({ name: folder.name, type: "folder" }));
    setUploadedFiles([...uploadedFiles, ...folders]);
  };

  const handleDelete = (file) => {
    const updatedFiles = uploadedFiles.filter((f) => f !== file);
    setUploadedFiles(updatedFiles);
  };

  const handleDownload = (file) => {
    console.log(`Downloading ${file.name}`);
  };

  const handleMove = (file) => {
    console.log(`Moving ${file.name}`);
  };

  const handleOpenFolder = (folder) => {
    setCurrentFolder(folder);
  };

  return (
    <div className="content">
      <div className="dashboard-info">
        <span>Dashboard</span>
        <div className="dropdown">
          <span>Filter: </span>
          <select
            value={displayFiles ? "Files" : "Folders"}
            onChange={() => setDisplayFiles(!displayFiles)}
          >
            <option value="Files">Files</option>
            <option value="Folders">Folders</option>
          </select>
        </div>
      </div>
      <div className="upload-buttons">
        <FileUpload onUpload={handleFileUpload} targetFolder={currentFolder} />
        <FolderUpload onUpload={handleFolderUpload} currentFolder={currentFolder} />
      </div>
      <FileTable
        files={uploadedFiles}
        displayFiles={displayFiles}
        onDelete={handleDelete}
        onDownload={handleDownload}
        onMove={handleMove}
        onOpenFolder={handleOpenFolder}
      />
    </div>
  );
};

export default UserContent;
