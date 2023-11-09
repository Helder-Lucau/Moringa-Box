import React from "react";

const FileTable = ({ files, folders, displayFiles, onDelete, onDownload, onMove, onOpenFolder,onDeleteFolder }) => {
   console.log("folders from  usercontent.....................");
   console.log(folders);
    const filteredFiles = displayFiles
    ? files.filter((file) => file.type === "file")
    : files.filter((file) => file.type === "folder");

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
                    {filteredFiles.map((file, index) => (
                        <tr key={index}>
                            <td>
                                {file.type === "folder" ? (
                                    <button className="open" onClick={() => onOpenFolder(file)}>
                                        {file.name}
                                    </button>
                                ) : (
                                    file.name
                                )}
                            </td>
                            <td>
                                {file.type === "file" && (
                                    <button className="download" onClick={() => onDownload(file)}>
                                        Download
                                    </button>
                                )}
                                {file.type === "file" && (
                                    <button className="move" onClick={() => onMove(file)}>
                                        Move
                                    </button>
                                )}
                                <button className="delete" onClick={() => onDelete(file)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    {folders.map((folder, index) => (
                        <tr key={index}>
                            <td>
                                <button className="open" onClick={() => onOpenFolder(folder)}>
                                    {folder.folder_name}
                                </button>
                            </td>
                            <td>
                                <button className="delete" onClick={() => onDeleteFolder(folder)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FileTable;
