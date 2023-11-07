import React, { useState } from "react";
import FileUpload from "./FileUpload";
import FileTable from "./FileTable";
import FolderUpload from "./FolderUpload";
import CreateFileButton from "./CreateFileButton"; 
import MoveFileButton from "./MoveFileButton"; 
import "./UserContent.css";



const UserContent = ({
  displayFiles,
  setDisplayFiles,
  uploadedFiles,
  setUploadedFiles,
  currentFolder,
  setCurrentFolder,
}) => {
    //Fetching for creating a file upload
  const handleFileUpload = async (newFiles, targetFolder) => {
    const files = newFiles.map((file) => ({ name: file.name, type: "file" }));
  
    try {
      const response = await fetch("https://moringa-box-4kry.onrender.com/upload", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ files }),
      });
  
      if (!response.ok) {
        throw new Error('Error uploading files: ${response.statusText}');
      }
  
      setUploadedFiles([...uploadedFiles, ...files]);
    } catch (error) {
      console.error('Error:', error);
    }
  };
//Fetching for  a folder upload
  const handleFolderUpload = async (newFolders, targetFolder) => {
    const folders = newFolders.map((folder) => ({ name: folder.name, type: "folder" }));
  
    try {
      const response = await fetch("https://moringa-box-4kry.onrender.com/upload-folder", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ folders }),
      });
  
      if (!response.ok) {
        throw new Error('Error uploading folders: ${response.statusText}');
      }
  
      setUploadedFiles([...uploadedFiles, ...folders]);
    } catch (error) {
      console.error('Error:', error);
    }
  };
//  Fetching for deleting files
  const handleDelete = async (file) => {
    try {
      const response = await fetch("https://moringa-box-4kry.onrender.com/file/<int:file_id>", {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error deleting file');
      }

      const updatedFiles = uploadedFiles.filter((f) => f !== file);
      setUploadedFiles(updatedFiles);
    } catch (error) {
      console.error('Error:', error);
    }
  };
//Fetching for downloading files.
  const handleDownload = async (file) => {
    try {
      const response = await fetch("https://moringa-box-4kry.onrender.com/download/<int:file_id>", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error downloading file');
      }

      console.log(`Downloading ${file.name}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };
//Fetching for moving files.
  const handleMove = async (file, newFolderId) => {
    try {
      const response = await fetch("https://moringa-box-4kry.onrender.com/move-file/<int:file_id>/<int:new_folder_id>", {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error moving file');
      }

      // Handle success (if needed)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleOpenFolder = async (folder) => {
    try {
      const response = await fetch("https://moringa-box-4kry.onrender.com/folder-contents/<int:folder_id>");
      if (!response.ok) {
        throw new Error('Error fetching folder contents');
      }
      const data = await response.json();
      setCurrentFolder(data); // Assuming data is an array of files/folders
    } catch (error) {
      console.error('Error:', error);
    }
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
