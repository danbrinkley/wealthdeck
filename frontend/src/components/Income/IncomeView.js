import React from 'react'
import {useState, useEffect} from 'react'
import IncomeList from './IncomeList';
import IncomeForm from './IncomeForm';
import {useCookies} from 'react-cookie';

import {useNavigate} from 'react-router-dom';

function Income() {
 
  const [income, setIncome] = useState([])
  const [editIncome, setEditIncome] = useState(null)
  const [token, setToken, removeToken] = useCookies(['mytoken'])
  const navigate = useNavigate();
 

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/income/', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':`Token ${token['mytoken']}` 
      }
    })
    .then(resp => resp.json())
    .then(resp => setIncome(resp))
    .catch(error => console.log(error))

  }, [])


  useEffect(() => {
    if(!token['mytoken']) {
        navigate('/dashboard')
    
       
    }
}, [token])

  const editBtn = (income) => {
    setEditIncome(income)

  }

  const updatedInformation = (income) => {
    const new_income = income.map(myincome => {
      if(myincome.id === income.id) {
        return income;
      }
      else {
        return myincome;
      }
    })

    setIncome(new_income)

  }

  const incomeForm = () => {
    setEditIncome({value:'', date:''})

  }

  const insertedInformation = (income) => {
    const new_incomes = [...income,income]
    setIncome(new_incomes)

  }

  const deleteBtn = (income) => {
    const new_incomes = income.filter(myincome => {
      if(myincome.id === income.id) {
        return false
      }
      return true;
    })

    setIncome(new_incomes)

  }

  const logoutBtn = () => {
    removeToken(['mytoken'])

  }

  return (
    <div className="App">

      <div className = "row">
      <div className = "col">
    
        <h2>Django And ReactJS Course</h2>
        <br/>
        </div>

        <div className = "col">
        <button onClick = {incomeForm} className = "btn btn-primary">Insert income</button>
        </div>


        <div className = "col">
        <button onClick = {logoutBtn} className = "btn btn-primary">Logout</button>
        </div>

      </div>


    

        <IncomeList incomes = {income} editBtn = {editBtn} deleteBtn = {deleteBtn}/>
        
        {editIncome ? <IncomeForm income = {editIncome} updatedInformation = {updatedInformation} insertedInformation = {insertedInformation}/> : null}

        


      
    </div>
  );
}

export default Income;
