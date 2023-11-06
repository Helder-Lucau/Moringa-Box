// Dashboard.jsx
import React, { useState } from "react";
import UserHeader from "./UserHeader";
import UserContent from "./UserContent";

const Dashboard = () => {
  const [displayFiles, setDisplayFiles] = useState(true);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  return (
    <div className="dashboard">
      <UserHeader />
      <UserContent
        displayFiles={displayFiles}
        setDisplayFiles={setDisplayFiles}
        uploadedFiles={uploadedFiles}
        setUploadedFiles={setUploadedFiles}
      />
    </div>
  );
};

export default Dashboard;
