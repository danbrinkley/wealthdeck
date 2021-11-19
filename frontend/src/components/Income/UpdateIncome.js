import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { baseURL, headers } from "../../services/IncomeService";

const UpdateIncome = () => {
  const initialIncomeState = {
    id: null,
    name: "",
    description: "",
    price: 0,
  };

  let { id } = useParams();

  const [currentIncome, setCurrentIncome] = useState(initialIncomeState);
  const [submitted, setSubmitted] = useState(false);
  const countRef = useRef(0);

  useEffect(() => {
    retrieveIncome();
  }, [countRef]);

  const handleIncomeChange = (e) => {
    const { value, date } = e.target;
    setCurrentIncome({ ...currentIncome, [date]: value });
  };

  const retrieveIncome = () => {
    axios
      .get(`${baseURL}/income/${id}/`, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentIncome({
          id: response.data.id,
          value: response.data.value,
          date: response.data.date,
        });
        console.log(currentIncome);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const updatedIncome = () => {
    let data = {
      value: currentIncome.value,
      date: currentIncome.date,
     
    };

    axios
      .put(`${baseURL}/income/${id}/`, data, {
        headers: {
          headers,
        },
      })
      .then((response) => {
        setCurrentIncome({
            id: response.data.id,
            value: response.data.value,
            date: response.data.date,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  const newIncome = () => {
    setCurrentIncome(initialIncomeState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Income Updated!
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <button className="btn btn-success" onClick={newIncome}>
            Update
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="value">Value</label>
            <input
              type="text"
              className="form-control"
              id="value"
              required
              value={currentIncome.value}
              onChange={handleIncomeChange}
              name="value"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="text"
              className="form-control"
              id="date"
              required
              value={currentIncome.date}
              onChange={handleIncomeChange}
              name="date"
              default
            />
          </div>

          <button onClick={updatedIncome} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default UpdateIncome