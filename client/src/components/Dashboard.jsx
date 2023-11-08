import React, { useState } from "react";
import UserHeader from "./UserHeader";
import { useLocation } from "react-router-dom";
import UserContent from "./UserContent";

const Dashboard = (props) => {

  const location = useLocation();;
  console.log(location)
  const username = location.state?.username || "";

  const [displayFiles, setDisplayFiles] = useState(true);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [currentFolder, setCurrentFolder] = useState(null);

  return (
    <div className="dashboard">
      <UserHeader setCurrentFolder={setCurrentFolder} username={username} />
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
