import React, { useState } from "react";
import UserHeader from "./UserHeader";
import UserContent from "./UserContent";

const Dashboard = () => {
  const [displayFiles, setDisplayFiles] = useState(true);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(null);

  return (
    <div className="dashboard">
      <UserHeader setCurrentFolder={setCurrentFolder} />
      <UserContent
        displayFiles={displayFiles}
        setDisplayFiles={setDisplayFiles}
        uploadedFiles={uploadedFiles}
        setUploadedFiles={setUploadedFiles}
        currentFolder={currentFolder}
        setCurrentFolder={setCurrentFolder}
      />
    </div>
  );
};

export default Dashboard;
