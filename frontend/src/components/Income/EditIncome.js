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
        ></input>
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

export default EditIncome;
