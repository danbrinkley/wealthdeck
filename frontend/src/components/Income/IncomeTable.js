import React, { useState, Fragment, useEffect , useCookies} from "react";
import { nanoid } from "nanoid";
import "./income.css";
import data from "./income-data.json";
import ReadIncome from "./ReadIncome";
import EditIncome from "./EditIncome";
import { useNavigate } from 'react-router-dom'

const IncomeTable = () => {
  const [cashflow, setCashflow] = useState(data);
  const [token, setToken] = useState()

  const [addFormData, setAddFormData] = useState({
    date: "",
    cashflow: "",
    
  });

  const [editFormData, setEditFormData] = useState({
    date: "",
    cashflow: "",
    
  });

  const [editContactId, setEditContactId] = useState(null);

 

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/income/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Token ${token}` 
      }
    })
    .then(resp => resp.json())
    .then(resp => setCashflow(resp))
    .catch(error => console.log(error))

  }, [])

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
      cashflow: addFormData.cashflow,
    };

    const newContacts = [...cashflow, newContact];
    setCashflow(newContacts);
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    const editedContact = {
      id: editContactId,
      date: addFormData.date,
      cashflow: addFormData.cashflow,
    };

    const newContacts = [...cashflow];

    const index = cashflow.findIndex((cashflow) => cashflow.id === editContactId);

    newContacts[index] = editedContact;

    setCashflow(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (e, cashflow) => {
    e.preventDefault();
    setEditContactId(cashflow.id);

    const formValues = { 
      date: addFormData.date,
      cashflow: addFormData.cashflow,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...cashflow];

    const index = cashflow.findIndex((casflow) => cashflow.id === contactId);

    newContacts.splice(index, 1);

    setCashflow(newContacts);
  };

  return (
    <div>
    <div className="formCenter">
      <h2 className="form-title">Add Income</h2>
      <form onSubmit={handleAddFormSubmit}>
        <label className="formFieldLabel">Date:
        <input
          type="date"
          name="date"
          required="required"
          placeholder="Enter date of cashflow..."
          onChange={handleAddFormChange}
          className="formFieldInput"
        />
        </label>
        <label className="formFieldLabel">Value ($):
        <input
          type="text"
          name="cashflow"
          required="required"
          placeholder="Enter cashflow value..."
          onChange={handleAddFormChange}
          className="formFieldInput"
        />
        </label>
        <br></br>
        <button 
          className="formFieldButton" 
          type="submit">Add</button>
      </form>
      </div>
      <br></br>
      <br></br>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Cashflow</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cashflow.map((cash) => (
              <Fragment>
                {editContactId === cash.id ? (
                  <EditIncome
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadIncome
                    cashflow={cash}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
    
    </div>
  );
};

export default IncomeTable;
