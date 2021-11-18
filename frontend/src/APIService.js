


export default class APIService {
    
    static UpdateIncome(income_id, body, token) {

     return fetch(`http://127.0.0.1:8000/api/income/${income_id}/`, {
        'method':'PUT',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }, 
          body:JSON.stringify(body)

     }).then(resp => resp.json())


    }

    static InsertIncome(body, token) {

      return fetch('http://127.0.0.1:8000/api/income/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())

    }

    static DeleteIncome(income_id, token) {

      return fetch(`http://127.0.0.1:8000/api/income/${income_id}/`, {
        'method':'DELETE',
        headers: {
            'Content-Type':'application/json',
            'Authorization':`Token ${token}` 
          }

     })

    }

    static LoginUser(body) {

      return fetch('http://127.0.0.1:8000/auth/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())

    }


    static RegisterUser(body) {

      return fetch('http://127.0.0.1:8000/api/users/', {
        'method':'POST',
        headers: {
            'Content-Type':'application/json',
            
          }, 
          body:JSON.stringify(body)

      }).then(resp => resp.json())

    }


}