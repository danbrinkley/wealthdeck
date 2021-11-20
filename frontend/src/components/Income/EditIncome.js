import React from "react";

const EditIncome = ({
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
          placeholder="Enter date of cashflow..."
          name="date"
          value={editFormData.date}
          onChange={handleEditFormChange}
          id="edit-input"
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter cashflow value..."
          name="cashflow"
          value={editFormData.cashflow}
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

export default EditIncome;
