import React from "react";

const ReadDebt = ({ debt, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{debt.date_created}</td>
      <td>{debt.name}</td>
      <td>{debt.balance}</td>
      <td>
        <button
          type="button"
          onClick={(e) => handleEditClick(e, debt)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(debt.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadDebt;