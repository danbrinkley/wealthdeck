import React from "react";

const ReadAsset = ({ asset, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{asset.date}</td>
      <td>{asset.name}</td>
      <td>{asset.value}</td>
      <td>
        <button
          type="button"
          onClick={(e) => handleEditClick(e, asset)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(asset.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadAsset;