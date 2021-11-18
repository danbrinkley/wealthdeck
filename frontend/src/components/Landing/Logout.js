import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom';
import {useCookies} from 'react-cookie';

function Logout () {
  const [token, setToken, removeToken] = useCookies(['mytoken'])


  const navigate = useNavigate();

  const logoutBtn = () => {
    removeToken(['mytoken'])
  }

  

  useEffect (() => {
    if(!token['mytoken']) {
      navigate('/')
    }
  }, [token])


  return (
    <div className = "col">
        <button onClick = {logoutBtn}>Logout</button>
      </div>
  )


}

export default Logout