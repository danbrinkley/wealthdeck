import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./debt.css";
import data from "./debt-data.json";
import ReadDebt from "./ReadDebt.js";
import EditDebt from "./EditDebt";

const DebtTable = () => {
  const [debt, setDebt] = useState(data);
  const [token, setToken] = useState()
  const [addFormData, setAddFormData] = useState({
    date_created: "",
    name: "",
    balance: "",
    
  });

  const [editFormData, setEditFormData] = useState({
    date_created: "",
    name: "",
    balance: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      date_created: addFormData.date_created,
      name: addFormData.name,
      balance: addFormData.balance,
    };

    const newContacts = [...debt, newContact];
    setDebt(newContacts);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedContact = {
        date_created: addFormData.date_created,
        name: addFormData.name,
        balance: addFormData.balance,
    };

    const newContacts = [...debt];

    const index = debt.findIndex((debt) => debt.id === editContactId);

    newContacts[index] = editedContact;

    setDebt(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (e, debt) => {
    e.preventDefault();
    setEditContactId(debt.id);

    const formValues = { 
        date_created: addFormData.date_created,
        name: addFormData.name,
        balance: addFormData.balance,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...debt];

    const index = debt.findIndex((debt) => debt.id === contactId);

    newContacts.splice(index, 1);

    setDebt(newContacts);
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/debt/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Token ${token}` 
      }
    })
    .then(resp => resp.json())
    .then(resp => setDebt(resp))
    .catch(error => console.log(error))

  }, [])

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Date Created</th>
              <th>Name</th>
              <th>Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {debt.map((d) => (
              <Fragment>
                {editContactId === d.id ? (
                  <EditDebt
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadDebt
                    debt={d}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="date"
          name="date_created"
          required="required"
          placeholder="Enter date liability was created..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter name of liability..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="balance"
          required="required"
          placeholder="Enter balance of liability..."
          onChange={handleAddFormChange}
        />
        
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default DebtTable;
