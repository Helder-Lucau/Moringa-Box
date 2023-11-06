
import React from "react";


const FileTable = ({ files,displayFiles, onDelete, onDownload }) => {
    const filteredFiles = displayFiles
    ?files.filter(file=>file.type === 'file')
    :files.filter(file=>file.type === 'folder')

    console.log(filteredFiles)

  return (
    <div className="file-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>
                <button className="download" onClick={() => onDownload(file)}>Download</button>
                <button className="delete" onClick={() => onDelete(file)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FileTable;
