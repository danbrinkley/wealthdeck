import React from "react";

const ReadIncome = ({ cashflow, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{cashflow.date}</td>
      <td>{cashflow.value}</td>
      <td>
        <button
          type="button"
          onClick={(e) => handleEditClick(e, cashflow)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(cashflow.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadIncome;