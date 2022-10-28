import React from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/end.css'

const End = () => {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
      }
  return (
    <div className='end-container'>
        <h2 className='end__title'>Bienvenido a el sistemas de inventario! </h2>
          <p className='end__text'>Para seguir adelante inicie sesion, por favor!</p>
          <button className='end__button' onClick={goToLogin}>Iniciar sesion</button>
    </div>
  )
}

export default End