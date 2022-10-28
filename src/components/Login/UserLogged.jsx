import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/userLogged.css'

const UserLogged = () => {

    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <article className='userlogged-container'>
            <h2 className='userlogged-text'>Usuario Logeado</h2>
            <button className='userlogged-btn' onClick={logout}>Cerrar Sesion</button>
        </article>
    )
}

export default UserLogged