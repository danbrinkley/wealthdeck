import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./assets.css";
import data from "./mock-data.json";
import ReadAsset from "./ReadAsset";
import EditAsset from "./EditAsset";

const AssetTable = () => {
  const [asset, setAsset] = useState(data);
  const [token, setToken] = useState()
  const [addFormData, setAddFormData] = useState({
    date: "",
    name: "",
    value: "",
    
  });

  const [editFormData, setEditFormData] = useState({
    date: "",
    name: "",
    value: "",
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

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      date: addFormData.date,
      name: addFormData.name,
      value: addFormData.value,
    };

    const newContacts = [...asset, newContact];
    setAsset(newContacts);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedContact = {
      id: editContactId,
      date: addFormData.date,
      name: addFormData.name,
      value: addFormData.value,
    };

    const newContacts = [...asset];

    const index = asset.findIndex((asset) => asset.id === editContactId);

    newContacts[index] = editedContact;

    setAsset(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (e, asset) => {
    e.preventDefault();
    setEditContactId(asset.id);

    const formValues = { 
        date: addFormData.date,
        name: addFormData.name,
        value: addFormData.value,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...asset];

    const index = asset.findIndex((asset) => asset.id === contactId);

    newContacts.splice(index, 1);

    setAsset(newContacts);
  };

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/assets/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Token ${token}` 
      }
    })
    .then(resp => resp.json())
    .then(resp => setAsset(resp))
    .catch(error => console.log(error))

  }, [])

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Value</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {asset.map((a) => (
              <Fragment>
                {editContactId === a.id ? (
                  <EditAsset
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadAsset
                    asset={a}
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
          name="date"
          required="required"
          placeholder="Enter date asset was created..."
          onChange={handleAddFormChange}
        />

        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter name of asset..."
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="value"
          required="required"
          placeholder="Enter asset value..."
          onChange={handleAddFormChange}
        />
        
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AssetTable;
