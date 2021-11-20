import React from "react";

const EditTable = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="date"
          name="date_created"
          required="required"
          placeholder="Enter date liability was created..."
          value={editFormData.date_created}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
        type="text"
        name="name"
        required="required"
        placeholder="Enter name of liability..."
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <input
          type="number"
          name="balance"
          required="required"
          placeholder="Enter balance of liability..."
          value={editFormData.balance}
          onChange={handleEditFormChange}
        />
        </td>
      
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditTable;
