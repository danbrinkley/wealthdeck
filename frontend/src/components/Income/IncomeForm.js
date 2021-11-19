
import React, {useState, useEffect} from 'react'
import APIService from '../../APIService';
import {useCookies} from 'react-cookie';

function Form(props) {
    const [value, setValue] = useState('')
    const [date, setDate] = useState('')
    const [token] = useCookies(['mytoken'])

    useEffect(() => {
        setValue(props.income.value)
        setDate(props.income.date)

    }, [props.income])

    const updateIncome = () => {
        APIService.UpdateIncome(props.income.id, {value, date}, token['mytoken'])
        .then(resp => props.updatedInformation(resp))


    }

    const insertIncome = () => {
        APIService.InsertIncome({value, date}, token['mytoken'])
        .then(resp => props.insertedInformation(resp))
    }

    return (
        <div>

           {props.income ? (

                <div className = "mb-3">
                <label htmlFor = "title" className = "form-label">Title</label>
                <input type="text" className = "form-control" id="title" placeholder = "Please Enter The Value of Your income"
                value = {value} onChange = {e => setValue(e.target.value)}
                
                
                />

                <label htmlFor = "date" className = "form-label">Date</label>

                <textarea className = "form-control" id="description" rows="5"
                value = {date} onChange = {e => setDate(e.target.value)}
                ></textarea>

                <br/>

                {
                    props.income.id ?   <button onClick = {updateIncome} className = "btn btn-success">Update Income</button>
                    :  <button onClick = {insertIncome} className = "btn btn-success">Insert Income</button>


                }

               
                </div>


           ) : null}
            
        </div>
    )
}

export default Form
