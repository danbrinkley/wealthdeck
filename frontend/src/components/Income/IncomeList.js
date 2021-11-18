

import React from 'react'
import APIService from '../../APIService'
import {useCookies} from 'react-cookie';

function IncomeList(props) {

  const [token] = useCookies(['mytoken'])

   const editBtn = (income) => {
     props.editBtn(income)
   }

   const deleteBtn = (incomee) => {
        APIService.DeleteIncome(income.id, token['mytoken'])
        .then(() => props.deleteBtn(income))
        .catch(error => console.log(error))
       
   }

    return (
 
        <div>
            
         
            
        {props.incomes && props.incomes.map(income => {
          return (
            <div key = {income.id}>
          <h2>{income.value}</h2>
          <p>{income.date}</p>

          <div className = "row">
          <div className = "col-md-1">
          <button className = "btn btn-primary" onClick  = {() => editBtn(income)}>Update</button>
          </div>

           <div className = "col">
          <button onClick = {() => deleteBtn(income)} className = "btn btn-danger">Delete</button>
          </div>


          </div>

          <hr className = "hrclass"/>
          </div>
          )
        })}

    

    
        
        </div>
    
    )
}

export default IncomeList
