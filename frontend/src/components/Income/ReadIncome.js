import React from "react";

const ReadIncome = ({ cashflow, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{cashflow.date}</td>
      <td>{cashflow.cashflow}</td>
      <td>
        <button
          type="button"
          onClick={(e) => handleEditClick(e, cashflow)}
          className="formFieldButton"
          id="edit"
        >
          Edit
        </button>
        <button
        id="delete" 
        className="formFieldButton"
        type="button" onClick={() => handleDeleteClick(cashflow.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadIncome;