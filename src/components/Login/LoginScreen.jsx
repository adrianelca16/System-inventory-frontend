import React, { useEffect, useState } from 'react'
import Form from './Form'
import UserLogged from './userLogged'
import './styles/loginScreen.css'

const LoginScreen = () => {
    const [token, setToken] = useState()
    const changedToken = localStorage.getItem('token')

    useEffect(() => {
      setToken(changedToken)
    }, [changedToken])
    
  return (
    <div className='login__container'>
        {
            token?
            <UserLogged/>
            :
            <Form/>
        }
    </div>
  )
}

export default LoginScreen