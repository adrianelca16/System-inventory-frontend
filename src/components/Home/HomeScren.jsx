import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import End from './End'
import MenuInventory from './MenuInventory'
import './styles/homeScreen.css'

const HomeScren = () => {
  const [token, setToken] = useState()
  const changedToken = localStorage.getItem('token')

  useEffect(() => {
    setToken(changedToken)
  }, [changedToken])
  
  return (
    <section className='container'>
        <article className='sub-container'>
          {
            token?
            <MenuInventory/>
            :
            <End/>
          }
          
        </article>
    </section>
  )
}

export default HomeScren