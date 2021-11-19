

import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { baseURL, headers } from "../../services/IncomeService";
import { useNavigate } from "react-router-dom";


const IncomeList = () => {
    const [income, setIncome] = useState([]);
    const navigate = useNavigate();
    const countRef = useRef(0);
  
    const [deleted, setDeleted] = useState(false);
  
    useEffect(() => {
      retrieveAllIncome();
    }, [countRef]);
  
    const retrieveAllIncome = () => {
      axios
        .get(`${baseURL}/income/`, {
          headers: {
            headers,
          },
        })
        .then((response) => {
          setIncome(response.data);
          console.log(income);
        })
        .catch((e) => {
          console.error(e);
        });
    };
  
    const deleteMenu = (id) => {
      axios
        .delete(`${baseURL}/income/${id}/`, {
          headers: {
            headers,
          },
        })
        .then((response) => {
          setDeleted(true);
          retrieveAllIncome();
        })
        .catch((e) => {
          console.error(e);
        });
    };
  
    const handleUpdateClick = (id) => {
      navigate(`/income/${id}/update/`);
    };
    return (
      <div className="row justify-content-center">
        <div className="col">
          {deleted && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              Income deleted!
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
  
          {income &&
            income.map((income, index) => (
              <div className="card my-3 w-25 mx-auto">
                <div className="card-body">
                  <h2 className="card-title font-weight-bold">{income.value}</h2>
                  <h4 className="card-subtitle mb-2">{income.date}</h4>
                  <p className="card-text">{income.user.username}</p>
                </div>
                <div classNameName="card-footer">
                  <div
                    className="btn-group justify-content-around w-75 mb-1 "
                    data-toggle="buttons"
                  >
                    <span>
                      <button
                        className="btn btn-info"
                        onClick={() => handleUpdateClick(income.id)}
                      >
                        Update
                      </button>
                    </span>
                    <span>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteMenu(income.id)}
                      >
                        Delete
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };
//   const [income, setIncome] = useState([])
//   const [editIncome, setEditIncome] = useState(null)
//   const [token, setToken] = useCookies(['mytoken'])
//   const navigate = useNavigate();
 

//   useEffect(() => {
//     fetch('http://127.0.0.1:8000/api/income/', {
//       'method':'GET',
//       headers: {
//         'Content-Type':'application/json',
//         'Authorization':`Token ${token['mytoken']}` 
//       }
//     })
//     .then(resp => resp.json())
//     .then(resp => setIncome(resp))
//     .catch(error => console.log(error))

//   }, [])

  

//    const editBtn = (income) => {
//      props.editBtn(income)
//    }

//    const deleteBtn = (income) => {
//         APIService.DeleteIncome(income.id, token['mytoken'])
//         .then(() => props.deleteBtn(income))
//         .catch(error => console.log(error))
       
//    }

//     return (
 
//         <div>
            
         
            
//         {props.incomes && props.incomes.map(income => {
//           return (
//             <div key = {income.id}>
//           <h2>{income.value}</h2>
//           <p>{income.date}</p>

//           <div className = "row">
//           <div className = "col-md-1">
//           <button className = "btn btn-primary" onClick  = {() => editBtn(income)}>Update</button>
//           </div>

//            <div className = "col">
//           <button onClick = {() => deleteBtn(income)} className = "btn btn-danger">Delete</button>
//           </div>


//           </div>

//           <hr className = "hrclass"/>
//           </div>
//           )
//         })}

    

    
        
//         </div>
    
//     )
// }

export default IncomeList
