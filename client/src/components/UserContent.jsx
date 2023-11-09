import React, { useEffect, useState } from "react";
import FileUpload from "./FileUpload";
import FileTable from "./FileTable";
import FolderUpload from "./FolderUpload";
import CreateFileButton from "./CreateFileButton"; 
import MoveFileButton from "./MoveFileButton"; 
import Login from "./Login";
import "./UserContent.css";

const UserContent = ({
  user,
  displayFiles,
  setDisplayFiles,
  uploadedFiles,
  setUploadedFiles,
  currentFolder,
  setCurrentFolder,
}) => {
  const accessToken = localStorage.getItem("accessToken");
  // const user = localStorage.getItem("user");
  // console.log(localStorage)
  // console.log("Access token:......................... " + accessToken);
  console.log("user info:......................... " + user.user_id);
  
  const [folders, setFolders] = useState([]);
  const [folderName, setFolderName] = useState('');
  const [file, setFile] = useState();

  console.log('fetched folders........................');
  console.log(folders)
  
  console.log('set file........................');
  console.log(file)
  console.log('End set file........................');

  const fetchFolders = async () => {
    try {
      const response = await fetch("https://moringa-box-4kry.onrender.com/folders");
      if (!response.ok) {
        throw new Error(`Error fetching folders: ${response.statusText}`);
      }
      const data = await response.json();
      
      setFolders(data.folders);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  

  useEffect(() => {
    fetchFolders();
  }, []);

  const uploadFolder = async (newFolderName) => {
    // const folders = newFolders.map((folder) => ({ name: folder.name, type: "folder" }));
    console.log("Access token:......................... " + accessToken);
    try {
      const response = await fetch("https://moringa-box-4kry.onrender.com/upload-folder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            folder_name: newFolderName,
            user_id: user.user_id
        }),
      });

      if (!response.ok) {
        throw new Error(`Error uploading folders: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('uploded new foder........................')
      console.log(data)
    //   setFolders(prev => [...prev, data])
    //   setUploadedFiles([...uploadedFiles, ...data.folders]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchFolderContents = async (folderId) => {
    try {
      const response = await fetch(`https://moringa-box-4kry.onrender.com/folder-contents/${folderId}`);
      if (!response.ok) {
        throw new Error(`Error fetching folder contents: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const deleteFolder = async (folderId) => {
    try {
      const response = await fetch(`https://moringa-box-4kry.onrender.com/folder/${folderId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error deleting folder');
      }

      // Handle success (if needed)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchFiles = async () => {
    try {
      const response = await fetch("https://moringa-box-4kry.onrender.com/files");
      if (!response.ok) {
        throw new Error(`Error fetching files: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  const uploadFile = async (file) => {
    // const formData = new FormData();
    
    // // Convert FileList to an array
    // const filesArray = Array.from(newFiles);
    // console.log("................Before we loop")
    // console.log(filesArray)
  
    // filesArray.forEach((file,i) => {
    // //   file.user_id=
    //   formData.append(`File-${i}`,file,file.name);
    //   console.log(formData)
    // });
    // console.log("............trying to create file")
    // for (var pair of formData.entries()) {
    //     console.log(pair[0]+ ' - ' + pair[1]); 
    // }
  
    try {
      const response = await fetch("https://moringa-box-4kry.onrender.com/upload", {
        method: 'POST',
        headers: {
          'content-type': 'multipart/form-data',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: file
      });
  
      if (!response.ok) {
        throw new Error(`Error uploading files: ${response.statusText}`);
      }
  
      // Handle success (if needed)
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const uploadFileToFolder = async (newFiles, folderId) => {
    const formData = new FormData();
    newFiles.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch(`https://moringa-box-4kry.onrender.com/upload/${folderId}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error uploading files to folder: ${response.statusText}`);
      }

      // Handle success (if needed)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const downloadFile = async (fileId) => {
    try {
      const response = await fetch(`https://moringa-box-4kry.onrender.com/download/${fileId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error downloading file');
      }

      // Handle success (if needed)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteFile = async (fileId) => {
    try {
      const response = await fetch(`https://moringa-box-4kry.onrender.com/file/${fileId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error deleting file');
      }

      // Handle success (if needed)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const moveFile = async (fileId, newFolderId) => {
    try {
      const response = await fetch(`https://moringa-box-4kry.onrender.com/move-file/${fileId}/${newFolderId}`, {
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

  const getFileImage = async (fileId) => {
    try {
      const response = await fetch(`https://moringa-box-4kry.onrender.com/file-image/${fileId}`);
      if (!response.ok) {
        throw new Error(`Error fetching file image: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
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
      <FileUpload onUpload={uploadFile} targetFolder={currentFolder} setFile={setFile} />
      <FolderUpload onUpload={uploadFolder} currentFolder={currentFolder} />
    </div>
    <FileTable
      folders={folders}
      files={uploadedFiles}
      displayFiles={displayFiles}
      onDelete={deleteFile}
      onDeleteFolder={deleteFolder}
      onDownload={downloadFile}
      onMove={moveFile}
      onOpenFolder={fetchFolderContents}
    />
  </div>
  );
};

export default UserContent;
