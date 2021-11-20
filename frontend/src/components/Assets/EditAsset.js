import React from "react";

const EditAsset = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter date asset created..."
          name="date"
          value={editFormData.date}
          onChange={handleEditFormChange}
          id="edit-input"
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter name of asset..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
          id="edit-input"
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter asset value..."
          name="value"
          value={editFormData.value}
          onChange={handleEditFormChange}
          id="edit-input"
        ></input>
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

export default EditAsset;
