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
          id="edit-input"
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
          id="edit-input"
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
          id="edit-input"
        />
        </td>
      
      <td>
      <button type="submit" 
        className="formFieldButton"
        id="save"
        >Save</button>
        <button
          id="cancel" 
          type="button" 
          onClick={handleCancelClick}
          className="formFieldButton">
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditTable;
